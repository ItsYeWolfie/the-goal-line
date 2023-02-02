import { useState, useEffect } from 'react';
import FormationLoader from '../../loaders/match-page/FormationLoader';
import { IFormation } from '../../types/Formation.types';

function Formation() {
	const [formation, setFormation] = useState<IFormation[]>([] as IFormation[]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/f7cb825e4feb737b6771');
			const data = await response.json();
			setFormation(data);
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) {
		return <FormationLoader />;
	}
	return (
		<div className="h-auto w-full flex-col rounded-md bg-gray-800 py-4 md:mx-auto md:flex md:w-4/5 md:flex-row md:justify-evenly lg:flex lg:w-full lg:flex-row lg:justify-evenly">
			<span className="flex justify-around">
				<span className="flex flex-col items-center md:my-auto lg:my-auto">
					<img
						src={formation[0].team.logo}
						width="50px"
						height="50px"
						alt=""
					/>
					<p>{formation[0].formation}</p>
				</span>
				<span className="flex flex-col items-center md:hidden lg:my-auto lg:hidden">
					<img
						src={formation[1].team.logo}
						width="50px"
						height="50px"
						alt=""
					/>
					<p>{formation[1].formation}</p>
				</span>
			</span>
			<div className="mx-auto flex h-[16rem] w-[23.9rem] bg-green-900 md:mx-0 lg:mx-0">
				<div className="absolute h-64 w-48 border-2 border-solid border-white">
					<div className="absolute -ml-0.5 mt-[-0.10rem] h-3 w-3 rounded-br-full border-2 border-solid border-white" />
					<div className="absolute top-8 z-50 mx-16 -ml-8 flex h-48 w-64 -rotate-90 flex-col justify-between px-4 py-2">
						<div className="flex items-center justify-center">
							<span className="relative flex h-7 w-7 rotate-90 items-center justify-center rounded-full bg-lime-700 text-center">
								{formation[0].startXI[0].player.number}
							</span>
						</div>
						{['D', 'M', 'F'].map((pos) => (
							<div className="flex items-center justify-center gap-6">
								{formation[0].startXI
									.filter((player) => player.player.pos === pos)
									.map((player) => (
										<span
											className="relative flex h-7 w-7 shrink-0 rotate-90 items-center justify-center rounded-full bg-lime-700 text-center"
											key={player.player.id}
										>
											{player.player.number}
										</span>
									))}
							</div>
						))}
					</div>
					<div className="absolute ml-[-0.063rem] mt-12 h-40 w-20 border-2 border-solid border-white">
						<div className="absolute mt-7 ml-[-0.14rem] h-24 w-12 border-2 border-solid border-white" />
						<span className="absolute ml-[4.813rem] mt-12 h-14 rounded-r-full border-2 border-solid border-white px-3" />
						<div className="absolute ml-[-0.14rem] mt-[12.05rem] h-3 w-3 rounded-tr-full border-2 border-solid border-white" />
					</div>
					<div className="absolute ml-[9.688rem] mt-[5.625rem] rounded-full border-2 border-solid border-white p-8" />
				</div>
				<div className="absolute ml-[11.938rem] h-64 w-48 border-2 border-solid border-white">
					<div className="absolute ml-[11.125rem] mt-[-0.10rem] h-3 w-3 rounded-bl-full border-2 border-solid border-white" />
					<div className="absolute top-8 z-50 mx-16 -ml-8 flex h-48 w-64 -rotate-90 flex-col-reverse justify-between px-4 py-2">
						<div className="flex items-center justify-center">
							<span className="relative flex h-7 w-7 rotate-90 items-center justify-center rounded-full bg-sky-700 text-center">
								{formation[1].startXI[0].player.number}
							</span>
						</div>
						{['D', 'M', 'F'].map((pos) => (
							<div className="flex items-center justify-center gap-6">
								{formation[1].startXI
									.filter((player) => player.player.pos === pos)
									.map((player) => (
										<span
											className="relative flex h-7 w-7 shrink-0 rotate-90 items-center justify-center rounded-full bg-sky-700 text-center"
											key={player.player.id}
										>
											{player.player.number}
										</span>
									))}
							</div>
						))}
					</div>
					<div className="absolute mt-12 ml-[6.875rem] h-40 w-20 border-2 border-solid border-white">
						<div className="absolute mt-7 ml-[1.906rem] h-24 w-12 border-2 border-solid border-white" />
						<span className="absolute -ml-[1.7rem] mt-12 h-14 rounded-l-full border-2 border-solid border-white px-3" />
						<div className="absolute ml-[4.15rem] mt-[12.05rem] h-3 w-3 rounded-tl-full border-2 border-solid border-white" />
					</div>
				</div>
			</div>
			<span className="my-auto hidden items-center md:flex md:flex-col lg:flex lg:flex-col">
				<img
					src={formation[1].team.logo}
					width="50px"
					height="50px"
					alt=""
				/>
				<p>{formation[1].formation}</p>
			</span>
		</div>
	);
}

export default Formation;
