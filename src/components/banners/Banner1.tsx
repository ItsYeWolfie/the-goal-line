export default function Banner1() {
	return (
		<section className="flex flex-col items-center justify-between overflow-y-hidden rounded-3xl bg-opacity-70 bg-gradient-to-tr from-gray-900 to-gray-600 px-4 py-1 text-center md:flex-row md:px-16 md:py-4 md:text-left">
			<div className="flex flex-col flex-wrap gap-8">
				<div className="text-yellow-500">New Platform</div>
				<div className="text-3xl text-gray-900 antialiased dark:text-gray-100 md:max-w-xl">
					Get one of our sports apps,which is only available on
				</div>
				<div className="text-lg text-gray-900 dark:text-gray-100">Download Our Apps!</div>
				<div className="flex flex-col gap-4 md:flex-row md:gap-16">
					<div>
						<img
							className="mx-auto w-48 animate-bounce sm:mx-0"
							src="/appstore.png"
							alt="App Store Logo"
						/>
					</div>
					<div>
						<img
							className="mx-auto w-48 animate-bounce md:mx-0"
							src="/googleplay.png"
							alt="Google Play Logo"
						/>
					</div>
				</div>
			</div>
			<div className="order-first flex flex-col gap-8 md:order-last md:max-h-max md:flex-row">
				<img
					className="flex-none basis-6/12 rounded-t-xl md:h-[75%] md:basis-3/12 md:place-self-end"
					src="/livescore.png"
					alt="Livescore App"
				/>
				<img
					className="flex-none basis-6/12 place-self-end md:h-[90%] md:basis-5/12"
					src="/flashscore1.png"
					alt="Flashscore App"
				/>
			</div>
		</section>
	);
}
