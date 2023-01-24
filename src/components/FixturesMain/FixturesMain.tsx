/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */

import { useState, useEffect } from 'react';
import { FaFutbol, FaInfoCircle } from 'react-icons/fa';
import moment from 'moment';
import fetchData from '../../../lib/helpers/Fetch';
import { FootballMatch } from '../../../types/Fixture-Main.types';


const urls = ['https://api.npoint.io/cfdd9340ece0aa795c9e', 'https://api.npoint.io/832db32c2f7ed1d3b542', 'https://api.npoint.io/1ba04a17c40d1ca4244d'];

export default function FixturesMain() {
  const [matches, setMatches] = useState<FootballMatch[]>([]);
  const [currentUrl, setCurrentUrl] = useState<string>(urls[0]);
  const [activeButton, setActiveButton] = useState<number>(0);
	const [hoveredMatchId, setHoveredMatchId] = useState<string | null>(null);

  const handleButtonClick = (index:number) => {
    setCurrentUrl(urls[index]);
    setActiveButton(index);
  }

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData<FootballMatch[]>(currentUrl);
      setMatches(data.slice(20, 30));
    }
    fetchAPI();
	}, [currentUrl]);
	
	return (
		<section className="m-[3%]">
			<div className="w-full rounded-t-[40px]">
				<div className="relative h-[125px] w-full border-b-[5px] border-gray-300">
					<div className="flex items-center">
						<p
							className=" mt-[6%]  ml-[3%] flex w-full  gap-[1%] text-[20px] text-gray-200 sm:mt-[2%] md:mt-[1%] md:ml-[1%]"
						>
							<FaFutbol className=" mr-[0.4%] mt-[0.4%]  rounded-full text-[20px] text-yellow-500"
							  />
							Football Matches
						</p>
					</div>

					<div
						className="absolute -bottom-[5px] flex h-[50px] w-[100%] items-start gap-[6%] md:gap-[6%]"
					>
					<p
 						 className={`h-full pl-[2.5%] text-center text-[14px] md:text-[17px] ${activeButton === 0 ? 'border-b-[5px] border-yellow-400 text-yellow-400' : ''}`}
 						 onClick={() => handleButtonClick(0)}
						>
 						 Latest Match
						</p>
						<p
 							 className={`h-full text-center text-[14px] md:text-[17px] ${activeButton === 1 ? 'border-b-[5px] border-yellow-400 text-yellow-400' : ''}`}
 							 onClick={() => handleButtonClick(1)}
						>
  						Live Matches
						</p>
						<p
							className={`h-full text-center text-[14px] md:text-[17px] ${activeButton === 2 ? 'border-b-[5px] border-yellow-400 text-yellow-400' : ''}`}
							onClick={() => handleButtonClick(2)}
							>
  						Coming Matches
						</p>
					</div>
				</div>
				<div
					className="no-scrollbar mx-auto mt-[10px] h-[600px] w-[95%] cursor-pointer"
				>
					{matches.map((match: FootballMatch, index: number) => (
							<div
      				  key={match.fixture.id}
       				 className={`${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-600'} mt-[0.5%] grid h-[55px] w-full items-center gap-[1%] rounded-xl md:grid-cols-2`}
 						   >
						<div className="col-span-1 h-full w-full">
								<div className="relative flex h-full w-full items-center">
								<div
										
										className={`absolute top-[-150px] right-[-90%] z-[10] ${String(match.fixture.id) === hoveredMatchId ? '' : 'hidden'} h-[250px] w-[350px] overflow-hidden rounded-[20px] bg-cyan-800 `}
										id={`modal-info-${match.fixture.id}`}
 										 >
												<div className="grid h-full w-full grid-cols-2">
													<div className="h-full w-full">
														<p
															className="my-[5%] ml-[5%] w-[90%] text-center text-[18px] text-gray-200"
														>
															{match.teams.home.name}
														</p>
														<img
															className="mx-auto h-[100px] w-[100px]"
															src={match.teams.home.logo}
															alt=""
														/>
													</div>
													<div className="h-full w-full">
														<p
															className="relative my-[5%] ml-[5%] w-[90%] text-center text-[18px] text-gray-200"
														>
															{match.teams.away.name}
														</p>
														<img
															className="mx-auto h-[100px] w-[100px]"
															src={match.teams.away.logo}
															alt=""
														/>
														<div className="relative flex w-full items-center ">
															<img
																className="absolute left-[-80px] top-[10px] h-[25px]  w-[25px]"
																src={match.league.logo}
																alt=""
															/>
															<p
																className="absolute left-[-50px] top-[10px] mr-[3%] text-lime-400"
															>
																{match.league.name}
															</p>
															<p
																className="absolute left-[-70px] top-[40px] text-lime-400"
															>
																{match.league.round}
															</p>
															<p
																className="absolute right-[7px] top-[80px] text-gray-200"
															>
																{match.fixture.status.long}
															</p>
															<p
																className="absolute left-[-160px]  top-[80px] text-gray-200"
															>
																{match.league.country}
															</p>
														</div>
													</div>
												</div>
											</div>
				
								<img
									className="absolute left-[2%] h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[35px] md:w-[35px]"
									src={match.teams.home.logo}
									alt=""
								/>
								<p
									className="absolute left-[15%] w-[25%] text-[15px] text-gray-200 sm:left-[12%] sm:text-[17px] md:left-[15%] md:text-[17px] lg:left-[15%] xl:left-[10%] xl:text-[17px]"
								>
								 {match.teams.home.name}
								</p>
								<p
									className="absolute left-[42.5%] w-[15%] rounded-[20px] bg-slate-500 py-[5px] px-[10px] text-center text-lime-400 sm:text-[18px]"
								>
								{match.goals.home}:{match.goals.away}
								</p>
								<p
									className=" xl:rigth-[10%] absolute right-[13%] w-[25%] text-[15px] text-gray-200 sm:right-[10%] sm:text-[17px] md:right-[15%] md:text-[17px] lg:right-[10%] xl:text-[17px]"
								>
									 {match.teams.away.name}
								</p>
								<img
									className="absolute right-[2%] h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[35px] md:w-[35px]"
									src={match.teams.away.logo}
									alt=""
								/>
							</div>
						</div>

						<div className="relative col-span-1 hidden h-full w-full md:grid">
							<div className="flex h-full w-full items-center">
								<p 
   								 className={`${match.fixture.status.short === 'FT' ? 'bg-red-200 text-red-500' : 'bg-lime-400 text-slate-800'} ml-[10%] flex w-[20%] items-center justify-center rounded-[10px]  bg-red-200 px-[10px] py-[5px] text-red-500`}
									>
									{match.fixture.status.short}
								</p>
									<p className="ml-[20%] w-[20%] text-yellow-400">Time: {moment(match.fixture.date).format('HH:MM')}</p>
								<p className="absolute right-[5%]">
								<FaInfoCircle
										className="text-[25px] text-yellow-400"
										onMouseEnter={() => setHoveredMatchId(String(match.fixture.id))}
										onMouseLeave={() => setHoveredMatchId(null)}
									/>
								</p>
							</div>
						</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

