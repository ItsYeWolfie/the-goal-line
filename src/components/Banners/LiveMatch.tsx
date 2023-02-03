interface LiveMatchProps {
	gameTimeInSeconds: number;
	gameTimeInMinutes: number;
}

function MatchStat({ valueOne, valueTwo, label }: { valueOne: number; valueTwo: number; label: string }) {
	const valueOnePercentage = (valueOne / (valueOne + valueTwo)) * 100;
	const valueTwoPercentage = (valueTwo / (valueOne + valueTwo)) * 100;
	return (
		<div className="flex flex-col justify-center gap-2">
			<div className="flex justify-between">
				<p className="text-blue-600">{valueOne}</p>
				<p>{label}</p>
				<p className="text-orange-600">{valueTwo}</p>
			</div>
			<div className="flex justify-between">
				<div className="h-2.5 basis-5/12 rotate-180 rounded-full bg-gray-200 dark:bg-gray-700">
					<div
						className="h-2.5 rounded-full bg-blue-600"
						style={{
							width: `${valueOnePercentage}%`,
						}}
					/>
				</div>
				<div className="h-2.5 basis-5/12 rounded-full bg-gray-200 dark:bg-gray-700">
					<div
						className="h-2.5 rounded-full bg-orange-600"
						style={{
							width: `${valueTwoPercentage}%`,
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default function LiveMatch({ gameTimeInSeconds, gameTimeInMinutes }: LiveMatchProps) {
	return (
		<div className="relative flex flex-col justify-center gap-4 lg:basis-5/12">
			<div className="flex flex-col justify-center">
				<h3 className="mt-6 text-center font-medium text-gray-200">Live Match</h3>
				<div className="mt-4 flex">
					<img
						alt="Italian flag"
						className="h-20"
						src=" https://i.pinimg.com/564x/6b/cf/50/6bcf5098d8250e99fadaeaa1c0fb04b8.jpg"
					/>
					<div className="flex flex-1 grow flex-col justify-center text-center">
						<p className="text-center text-xl font-medium text-lime-500">
							{gameTimeInMinutes >= 20 ? gameTimeInMinutes : 20}:
							{gameTimeInSeconds < 10 ? `0${gameTimeInSeconds}` : gameTimeInSeconds}{' '}
						</p>
						<p className="mx-auto mt-2 rounded-full bg-sky-600 px-4 py-1 text-center">0 - 0</p>
					</div>
					<img
						alt="Swedish flag"
						className="h-20"
						src=" https://i.pinimg.com/564x/a6/7a/f9/a67af9c593ba25a687b95e35d294dc18.jpg"
					/>
				</div>
			</div>
			<MatchStat
				valueOne={70}
				valueTwo={30}
				label="Possession"
			/>
			<MatchStat
				valueOne={12}
				valueTwo={15}
				label="Shots"
			/>
			<MatchStat
				valueOne={7}
				valueTwo={3}
				label="Fouls"
			/>
		</div>
	);
}
