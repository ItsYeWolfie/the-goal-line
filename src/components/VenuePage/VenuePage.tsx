import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MagnifyingGlass } from 'react-loader-spinner';
import { IVenue } from '../../../types/Venue.types';
import fetchData from '../../../lib/helpers/Fetch';

export default function VenuePage() {
	const [venue, setVenue] = useState<IVenue[]>([]);
	const [loading, setLoading] = useState(false);
	const { name } = useParams();

	useEffect(() => {
		setLoading(true);
		fetchData<IVenue[]>('https://api.npoint.io/383138d98ef41e68a0ce')
			.then((data) => {
				setVenue(data);
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
			});
	}, []);

	const Venue = venue.find((coach) => coach.name === name);

	return (
		<div className="bg-gray-100 py-[5%] dark:bg-gray-900 2xl:container 2xl:mx-auto">
			<div className="mx-auto h-auto w-full rounded-[10px]  bg-white text-black dark:bg-gray-700 dark:text-gray-200  lg:w-[85%]">
				{!Venue || loading ? (
					<MagnifyingGlass
						visible
						height="80"
						width="80"
						ariaLabel="MagnifyingGlass-loading"
						wrapperStyle={{
							position: 'relatice',
							top: '0',
							left: '0',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100vh',
							width: '100%',
						}}
						wrapperClass="MagnifyingGlass-wrapper"
						glassColor="#6082B6"
						color="#C70039"
					/>
				) : (
					<>
						<div className=" w-full rounded-t-[10px] bg-gradient-to-r from-gray-200 to-gray-400 px-[2%] pl-[1%] font-serif text-[30px] font-extrabold  text-black md:text-[40px] lg:text-[45px]  2xl:container 2xl:mx-auto 2xl:text-[60px]">
							{Venue.name}
							<div className=" ">
								<span className="text-[15px] font-semibold  text-gray-600 md:text-[25px] 2xl:text-[35px]">
									The club:
								</span>{' '}
								<span className="font-serif text-[17px] md:text-[25px] 2xl:text-[45px]"> {Venue.name} </span>
							</div>
						</div>
						<div className=" h-auto w-full border-b-[1px]  border-gray-400 md:grid md:grid-cols-2 ">
							<div className=" col-span-1 border-r-[1px]  border-gray-400 bg-white  ">
								<Carousel>
									<div>
										<img
											src={Venue.image}
											alt="a"
										/>
										<p className="absolute bottom-[10%] w-full bg-gray-200 bg-opacity-[0.3] py-[3%] font-mono text-[20px] font-semibold text-black text-opacity-10  hover:bg-opacity-[0.9] hover:text-opacity-100 md:text-[25px] 2xl:text-[35px]">
											{' '}
											The stadium owes its name to the legendary president of the club
										</p>
									</div>
									<div>
										<img
											src="..//556.png"
											alt="a"
										/>
										<p className="absolute bottom-[10%] w-full bg-gray-200 bg-opacity-[0.3] py-[3%] font-mono text-[20px] font-semibold text-black text-opacity-10  hover:bg-opacity-[0.9] hover:text-opacity-100 md:text-[25px] 2xl:text-[35px]">
											{' '}
											The Whites` stadium is in the heart of the {Venue.city}{' '}
										</p>
									</div>
									<div>
										<img
											src="..//556.png"
											alt="a"
										/>
										<p className="absolute bottom-[10%] w-full bg-gray-200 bg-opacity-[0.3] py-[3%] font-mono text-[20px] font-semibold text-black text-opacity-10  hover:bg-opacity-[0.9] hover:text-opacity-100 md:text-[25px] 2xl:text-[35px]">
											{' '}
											The {Venue.name}, a stadium with all the mod cons{' '}
										</p>
									</div>
								</Carousel>
							</div>
							<div className="col-span-1">
								<div className="mx-auto  flex h-[100%] w-[90%] flex-col items-center justify-center gap-5 text-center lg:gap-3 2xl:gap-20">
									<h1 className="font-mono text-[25px] font-extrabold 2xl:text-[40px] ">{Venue.name}</h1>
									<p className="pb-3 text-left  font-serif md:text-[16px] lg:text-[18px] 2xl:text-[35px]">
										Designed by Scottish architect Archibald Leitch, who designed several other stadia, the ground was
										originally designed with a capacity of {Venue.capacity + 20000} spectators and featured seating in
										the south stand under cover, while the remaining three stands were left as terraces and uncovered.
										Including the purchase of the {Venue.surface}, the construction of the stadium was originally to
										have cost £60,000 all told. However, as costs began to rise, to reach the intended capacity would
										have cost an extra £30,000 over the original estimate and, at the suggestion of club secretary J. J.
										Bentley, the capacity was reduced to approximately {Venue.capacity}.
									</p>
								</div>
							</div>
						</div>
						<div className="grid w-full grid-cols-3 rounded-[10px]">
							<div className="flex w-full flex-col items-center justify-center ">
								<div className=" my-[30px] flex w-full  flex-col justify-center  gap-6 border-r-[1px] border-gray-400 text-center lg:w-[80%] lg:text-left ">
									<div className="text-[14px] text-gray-700 dark:text-gray-300 2xl:text-[30px] ">
										<p className=" font-mono text-[15px] text-black dark:text-gray-100 lg:text-[17px] 2xl:text-[30px]">
											OPENING
										</p>
										1947
									</div>
									<div className="text-[14px] text-gray-700 dark:text-gray-300 2xl:text-[30px] ">
										<p className=" font-mono text-[15px] text-black dark:text-gray-100 lg:text-[17px] 2xl:text-[30px]">
											DIMENSIONS
										</p>
										105 x 68 m
									</div>
									<div className="text-[14px] text-gray-700 dark:text-gray-300 2xl:text-[30px] ">
										<p className=" font-mono text-[15px] text-black dark:text-gray-100 lg:text-[17px] 2xl:text-[30px]">
											LIGHTING
										</p>
										1.800 Lux
									</div>
								</div>
							</div>
							<div className="flex w-full flex-col items-center justify-center ">
								<div className=" my-[30px] flex w-full  flex-col justify-center gap-6 border-r-[1px] border-gray-400 text-center lg:w-[80%] lg:text-left ">
									<div className="text-[14px] text-gray-700 dark:text-gray-300 2xl:text-[30px] ">
										<p className=" font-mono text-[15px] text-black dark:text-gray-100 lg:text-[17px] 2xl:text-[30px]">
											CAPACITY
										</p>
										{Venue.capacity}
									</div>
									<div className="text-[14px] text-gray-700 dark:text-gray-300 2xl:text-[30px] ">
										<p className=" font-mono text-[15px] text-black dark:text-gray-100 lg:text-[17px] 2xl:text-[30px]">
											HOSPITALITY
										</p>
										245
									</div>
									<div className="text-[14px] text-gray-700 dark:text-gray-300 2xl:text-[30px] ">
										<p className=" font-mono text-[15px] text-black dark:text-gray-100 lg:text-[17px] 2xl:text-[30px]">
											PHONE{' '}
										</p>
										+34913984300
									</div>
								</div>
							</div>{' '}
							<div className="flex w-full flex-col items-center justify-center ">
								<div className=" my-[30px] flex w-full  flex-col justify-center  gap-6 text-center lg:w-[80%]  lg:text-left ">
									<div className="text-[14px] text-gray-700 dark:text-gray-300 2xl:text-[30px] ">
										<p className=" font-mono text-[15px] text-black dark:text-gray-100 lg:text-[17px] 2xl:text-[30px]">
											SUBWAY
										</p>
										{Venue.country} L10
									</div>
									<div className="text-[14px] text-gray-700 dark:text-gray-300 2xl:text-[30px] ">
										<p className=" font-mono text-[15px] text-black dark:text-gray-100 lg:text-[17px] 2xl:text-[30px]">
											ADDRESS
										</p>
										{Venue.name} - {Venue.country}
									</div>
									<div className="text-[14px] text-gray-700 dark:text-gray-300 2xl:text-[30px] ">
										<p className=" font-mono text-[15px] text-black dark:text-gray-100 lg:text-[17px] 2xl:text-[30px]">
											NAME
										</p>
										{Venue.name}
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
