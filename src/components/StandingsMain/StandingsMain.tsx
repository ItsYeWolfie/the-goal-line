/* eslint-disable @typescript-eslint/no-shadow */
import { useState, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import fetchData from '../../../lib/helpers/Fetch';
import { TeamStatistics } from '../../../types/Standings-Main.types';
import StandingMainHeader from './Standings-M-Header';
import StandingsTableRow from './Standings-Table-Row';

export default function StandingsMain() {
	const [data, setData] = useState<TeamStatistics[]>([]);

	useEffect(() => {
		fetchData<TeamStatistics[]>('https://api.npoint.io/782a05439d88d05d9069').then((data) => {
			setData(data);
		});
	}, []);

	return (
		<section className="m-[3%]">
			<StandingMainHeader />
			<div className="flex  w-full cursor-all-scroll flex-col items-center rounded-[20px]  bg-gray-800">
				<h1 className="mt-[5%] pt-[2%]  text-lg font-medium text-gray-200 lg:mt-0 xl:mt-[0%]">2020-21 Season</h1>
				<div className="mt-6 flex h-[390px] w-full flex-col overflow-scroll">
					<div className="">
						<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
							<div className=" overflow-scroll shadow  sm:rounded-lg">
								<table className="min-w-full   text-sm text-gray-200">
									<thead className=" bg-gray-900 text-xs font-medium uppercase">
										<tr>
											<th> </th>
											<th
												className="px-6 py-3 text-left text-[19px] tracking-wider"
												scope="col"
											>
												Club
											</th>
											<th
												className="px-6 py-3 text-left tracking-wider"
												scope="col"
											>
												MP
											</th>
											<th
												className="px-6 py-3 text-left tracking-wider"
												scope="col"
											>
												W
											</th>
											<th
												className="px-6 py-3 text-left tracking-wider"
												scope="col"
											>
												D
											</th>
											<th
												className="px-6 py-3 text-left tracking-wider"
												scope="col"
											>
												L
											</th>
											<th
												className="px-6 py-3 text-left tracking-wider"
												scope="col"
											>
												GF
											</th>
											<th
												className="px-6 py-3 text-left tracking-wider"
												scope="col"
											>
												GA
											</th>
											<th
												className="px-6 py-3 text-left tracking-wider"
												scope="col"
											>
												GD
											</th>
											<th
												className="px-6 py-3 text-left tracking-wider"
												scope="col"
											>
												Pts
											</th>
											<th
												className="px-6 py-3 text-left tracking-wider"
												scope="col"
											>
												Last 5
											</th>
										</tr>
									</thead>

									<tbody className="text-[18px]  text-gray-200">
										{data.map((item) => (
											<StandingsTableRow
												key={item.team.id}
												item={item}
											/>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className=" mt-[4%] mb-[3%] ml-[5%] flex  w-full  items-center justify-start gap-5">
					<p className=" flex items-center gap-2 text-gray-200">
						<FaCircle className=" text-blue-400  " />
						Champions League
					</p>
					<p className=" flex items-center gap-2 text-gray-200">
						<FaCircle className=" text-red-400 " />
						Europa League
					</p>
				</div>
			</div>
		</section>
	);
}
