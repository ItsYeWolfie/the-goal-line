/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-shadow */
import { useState, useEffect } from 'react';
import { FaArrowRight, FaCircle, FaTrophy } from 'react-icons/fa';
import fetchData from '../../../lib/helpers/Fetch';
import { TeamStatistics } from '../../../types/Standings-Main.types';

export default function StandingsMain() {
	const [data, setData] = useState<TeamStatistics[]>([]);

	useEffect(() => {
		fetchData<TeamStatistics[]>('https://api.npoint.io/782a05439d88d05d9069').then((data) => {
			setData(data);
		});
	}, []);

	return (
		<section className="m-[3%]">
			<div className="  w-full">
				<div className="flex items-center">
					<p className=" ml-[3%] flex w-2/3 gap-[1%] text-[20px]  text-gray-200 md:ml-[1%]">
						<FaTrophy className=" mr-[1%]  mt-[2%] rounded-full text-[20px] text-yellow-500 md:mt-[0.5%]" />
						Standings
					</p>
					<p className="  flex w-1/3 justify-end gap-[2%] text-right text-[20px]  text-gray-200 md:ml-[1%] ">
						View All <FaArrowRight className="mt-[3%] md:mt-[1%]" />
					</p>
				</div>
				<div className="my-[2%] flex">
					<p className="mt-[6%] ml-[3%] flex w-full items-center gap-[0.7%] text-[20px] text-gray-200 sm:mt-[2%] md:mt-[1%] md:ml-[1%]">
						<img
							className="h-[30px] w-[30px] rounded-full"
							src="src/images/Flag-England.webp"
							alt=""
						/>
						<img
							className="h-[30px] w-[30px] rounded-full bg-white"
							src="src/images/39.png"
							alt=""
						/>
						Premier League
					</p>
				</div>
			</div>
			<div className="flex  w-full cursor-all-scroll flex-col items-center  bg-gray-800">
				<h1 className="mt-[5%] text-lg font-medium text-gray-200 lg:mt-0 xl:mt-[0%]">2020-21 Season</h1>
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
											<tr
												key={item.team.id}
												className={`${
													item.rank > 6 ? 'bg-slate-900' : item.rank <= 4 ? 'bg-blue-900' : 'bg-red-900'
												} border-b-[2px] border-gray-400 bg-opacity-[0.7]`}
											>
												<td className="pl-4">{item.rank}</td>
												<td className="flex whitespace-nowrap px-6 py-4">
													<img
														className="h-5 w-5"
														src={item.team.logo}
														alt=""
													/>
													<span className="ml-2 font-medium">{item.team.name}</span>
												</td>
												<td className="whitespace-nowrap px-6 py-4">{item.all.played}</td>
												<td className="whitespace-nowrap px-6 py-4">{item.all.win}</td>
												<td className="whitespace-nowrap px-6 py-4">{item.all.draw}</td>
												<td className="whitespace-nowrap px-6 py-4">{item.all.lose}</td>
												<td className="whitespace-nowrap px-6 py-4">{item.home.goals.for + item.away.goals.for}</td>
												<td className="whitespace-nowrap px-6 py-4">
													{item.home.goals.against + item.away.goals.against}
												</td>
												<td className="whitespace-nowrap px-6 py-4">{item.goalsDiff}</td>
												<td className="whitespace-nowrap px-6 py-4">{item.points}</td>
												<td className="flex whitespace-nowrap px-6 py-4">
													{item.form.split('').map((char, index) => {
														if (char === 'W') {
															return (
																<svg
																	key={index}
																	className="w-4 fill-current text-green-600"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																>
																	<path
																		fillRule="evenodd"
																		d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																		clipRule="evenodd"
																	/>
																</svg>
															);
														}
														if (char === 'D') {
															return (
																<svg
																	key={index}
																	className="w-4 fill-current text-gray-400"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																>
																	<path
																		fillRule="evenodd"
																		d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
																		clipRule="evenodd"
																	/>
																</svg>
															);
														}
														if (char === 'L') {
															return (
																<svg
																	key={index}
																	className="w-4 fill-current text-red-500"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																>
																	<path
																		fillRule="evenodd"
																		d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
																		clipRule="evenodd"
																	/>
																</svg>
															);
														}
													})}
													<svg
														className="w-4 fill-current text-red-500"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															fillRule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
															clipRule="evenodd"
														/>
													</svg>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className=" mt-[4%] mb-[3%] ml-[5%] flex  w-full  items-center justify-start gap-5">
					<p className=" flex items-center gap-2 text-gray-200">
						<FaCircle className="fa-solid fa-circle text-blue-400  " />
						Champions League
					</p>
					<p className=" flex items-center gap-2 text-gray-200">
						<FaCircle className="fa-solid fa-circle text-red-400 " />
						Europa League
					</p>
				</div>
			</div>
		</section>
	);
}
