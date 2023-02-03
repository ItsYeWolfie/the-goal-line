/* eslint-disable @typescript-eslint/no-shadow */
import { useState, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import fetchData from '../../../lib/helpers/Fetch';
import { TeamStatistics } from '../../../types/Standings-Main.types';
import StandingsMainLoader from '../Index-Loaders/Standings-Loader-Main';
import StandingMainHeader from './Standings-M-Header';
import StadingsTableHeader from './Standings-Table-Header';
import StandingsTableRow from './Standings-Table-Row';

export default function StandingsMain() {
	const [data, setData] = useState<TeamStatistics[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetchData<TeamStatistics[]>('https://api.npoint.io/782a05439d88d05d9069').then((data) => {
			setData(data);
			setLoading(false);
		});
	}, []);

	return (
		<section className="mx-[1%] overflow-hidden md:mx-[5%]   2xl:container 2xl:mx-auto">
			<StandingMainHeader />
			<div className="flex  w-full cursor-all-scroll flex-col items-center rounded-[20px]  bg-gray-800">
				<h1 className="my-[1%]   text-lg font-medium text-gray-200  2xl:text-[25px]">2020-21 Season</h1>
				<div className="mt-1 flex h-[390px] w-full flex-col overflow-scroll">
					<div className="">
						<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-0 ">
							<div className=" overflow-scroll shadow  sm:rounded-lg">
								{loading ? (
									<StandingsMainLoader />
								) : (
									<table className="min-w-full   text-sm text-gray-200">
										<StadingsTableHeader />
										<tbody className="text-[18px]  text-gray-200">
											{data.map((item) => (
												<StandingsTableRow
													key={item.team.id}
													item={item}
												/>
											))}
										</tbody>
									</table>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className=" my-[1%] ml-[5%] flex w-full  items-center  justify-start gap-5">
					<p className=" flex items-center gap-2 text-gray-200 2xl:text-[25px]">
						<FaCircle className=" text-blue-400  " />
						Champions League
					</p>
					<p className=" flex items-center gap-2 text-gray-200 2xl:text-[25px]">
						<FaCircle className=" text-red-400 " />
						Europa League
					</p>
				</div>
			</div>
		</section>
	);
}
