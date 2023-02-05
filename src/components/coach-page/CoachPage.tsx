import moment from 'moment';
import { Suspense, useContext, useEffect } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { GlobalHeaderContext, IGlobalHeader } from '../../contexts/GlobalHeader.context';
import { ICoach } from '../../types/Coach.types';
import MainLoadingSpinner from '../MainLoadingSpinner';

export default function CoachPage() {
	const { coach: coachData } = useLoaderData() as { coach: ICoach };

	const { setBreadcrumbs } = useContext<IGlobalHeader>(GlobalHeaderContext);

	useEffect(() => {
		setBreadcrumbs([
			{
				name: 'O. Solskjær',
				href: '/coach/19',
			},
		]);

		return () => {
			setBreadcrumbs([]);
		};
	}, [setBreadcrumbs]);

	return (
		<Suspense fallback={<MainLoadingSpinner />}>
			<Await resolve={coachData}>
				{(coach: ICoach) => (
					<div className="mx-auto  w-full rounded-t-[20px] bg-gray-100  text-black  dark:bg-gray-900  dark:text-white  md:w-[85%]">
						<div className="h-auto w-full">
							<div className="h-auto w-full gap-[4%] lg:grid lg:grid-cols-2">
								<div className="col-span-1 flex w-full   ">
									<div className=" w-1/2 flex-row items-center justify-center gap-[9%]">
										<img
											src={coach.photo}
											alt={coach.name}
											className=" md:[10%] mx-auto mt-[15%] w-[50%] rounded-full  bg-gradient-to-r from-red-400 to-slate-900  p-[2%] dark:from-sky-400 dark:to-sky-800  md:w-1/2"
										/>
										<div className="mx-auto my-[4%] w-1/2 bg-gradient-to-r  from-red-400 to-slate-900 bg-clip-text text-center  text-[22px] font-extrabold text-transparent dark:bg-gradient-to-r dark:from-sky-400 dark:to-sky-800 ">
											Age: {coach.age}
										</div>
									</div>
									<div className="my-auto w-1/2  ">
										<h1 className=" mt-[10%] bg-gradient-to-r from-red-600 to-slate-900 bg-clip-text p-[1%]  text-left text-[16px] font-extrabold text-transparent dark:from-sky-300 dark:to-sky-400 sm:text-[25px] md:text-[27px] lg:text-[23px] 2xl:text-[27px] ">
											{coach.name}, an absolute legend at {coach.team.name}, is a graduate of the {coach.team.name}
											youth system who has gone on to manage the senior team
										</h1>
									</div>
								</div>
								<div className=" col-span-1 my-auto w-full">
									<h1 className="my-[7%] text-center text-[28px] font-semibold">
										{coach.firstname} {coach.lastname}
									</h1>
									<h1 className="p-2 pl-[2%] text-[16px]  text-gray-700 dark:text-gray-200">
										Born in {coach.birth.place} on <b>{moment(coach.birth.date).format('MMM.DD.YYYY')}</b>,{' '}
										{coach.firstname} {coach.lastname} became first team manager in{' '}
										{
											coach.career.map((c) => (
												<i key={c.team.id}>
													<b>{moment(c.start).format('MMM.DD.YYYY')}</b>
												</i>
											))[0]
										}
										. Thus began his second spell at {coach.team.name} His first era at the club was a huge success and
										lasted 24 years; he started as an U12 and progressed all the way up to the first team. He then left{' '}
										{coach.team.name}
										for Al Sadd in Qatar and with that experienced learned, he is coming back home.
									</h1>
								</div>
							</div>
							<div className="mt-[2%] h-auto w-full bg-gradient-to-r from-red-600  to-slate-700 p-3 dark:from-sky-700 dark:to-sky-900 md:grid md:grid-cols-3">
								<div className="col-span-1  text-left text-white">
									<div className="mt-[5%] w-full  rounded-[2px] border-b-[5px]  border-yellow-300 dark:border-gray-300">
										<p className="p-[2%] text-2xl font-semibold"> HISTORY</p>
									</div>

									<ul
										key={coach.id}
										className=" mb-[5%] list-disc gap-[4%] pl-[5%]  text-[15px] text-gray-100"
									>
										{coach.career.map((c) => (
											<li
												key={c.team.id}
												className="mt-2"
											>
												<i className="text-[17px] text-gray-100">
													{' '}
													{c.team.name} - from {moment(c.start).format('MMM Do YYYY')} to{' '}
													{moment(c.end).format('MMM Do YYYY')}
												</i>
											</li>
										))}
									</ul>
								</div>
								<div className="col-span-1  text-left text-white">
									<img
										src={coach.team.logo}
										alt=""
										className=" mx-auto h-auto w-auto md:mt-[20%]"
									/>
								</div>
								<div className="col-span-1  text-left text-white">
									<div className="mt-[5%] w-full  rounded-[2px] border-b-[5px] border-yellow-300 dark:border-gray-300">
										<p className="p-[2%]  text-2xl  font-semibold"> Personal Details</p>
									</div>

									<div key={coach.id}>
										<p className="mt-4 pl-[2%] text-[14px]">Name</p>
										<h1 className="pl-[2%] font-mono text-xl text-white dark:text-gray-100">
											{coach.firstname} {coach.lastname}
										</h1>
										<p className="mt-3 pl-[2%] text-[14px]">Place of birth</p>
										<h1 className="pl-[2%] font-mono text-xl text-white dark:text-gray-100">
											{coach.birth.place} {coach.birth.country}
										</h1>
										<p className="mt-3 pl-[2%] text-[14px]">Date of birth</p>
										<h1 className="pl-[2%] pb-5 font-mono text-xl text-white dark:text-gray-100">
											{moment(coach.birth.date).format('MMM DD YYYY')}
										</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</Await>
		</Suspense>
	);
}
