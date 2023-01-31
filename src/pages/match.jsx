import Formation from '../components/match-page/Formation';
import H2h from '../components/match-page/H2H';
import LineUps from '../components/match-page/Lineups';
import Match from '../components/match-page/Match';
import MatchInfo from '../components/match-page/MatchInfo';
// import MobTabs from '../components/match-page/Mob-tabs';
import Odds from '../components/match-page/Odds';
import Standings from '../components/match-page/Standings';
import Statistics from '../components/match-page/Statistics';

export default function MatchPage() {
	return (
		<div className="bg-gray-900 text-gray-200">
			<div className="-mb-2 flex h-12 w-full justify-center md:mt-3 md:h-auto lg:hidden">
				<span className="my-auto">
					<img
						src="../images/logo-no-background.svg"
						width="170px"
						alt=""
					/>
				</span>
			</div>
			<div className="flex-col justify-center gap-4 p-0.5 md:flex md:flex-col lg:flex lg:flex-row lg:p-0">
				<div className="w-full lg:w-1/2">
					<h6 className="pl-1 text-xs text-gray-300 md:ml-20 lg:ml-0 lg:mt-2">MATCH</h6>
					<Match />
					{/* <MobTabs /> */}
					<h6 className="mt-4 hidden pl-1 text-xs text-gray-300 md:ml-20 lg:ml-0 lg:flex">MATCH INFO</h6>
					<MatchInfo />

					<h6 className="mt-4 hidden pl-1 text-xs text-gray-300 md:ml-20 lg:ml-0 lg:flex">TEAM FORMATIONS</h6>
					<Formation />

					<h6 className="mt-4 hidden pl-1 text-xs text-gray-300 md:ml-20 lg:ml-0 lg:flex">TEAM LINE UPS</h6>
					<LineUps />

					<h6 className="mt-4 hidden pl-1 text-xs text-gray-300 md:ml-20 lg:ml-0 lg:flex">TEAM STATISTIC</h6>
					<Statistics />
				</div>
				<div className="mt-[1px]">
					<div className="md:mx-auto md:w-4/5 lg:ml-0 lg:w-96">
						<h6 className="mt-2 hidden pl-1 text-xs text-gray-300 lg:flex">ODDS</h6>
						<Odds />

						<h6 className="mt-4 hidden pl-1 text-xs text-gray-300 lg:flex">HEAD-TO-HEAD MATCHES</h6>
						<H2h />
						<h6 className="mt-4 hidden pl-1 text-xs text-gray-300 lg:flex">TABLE</h6>
						<Standings />
						<div className="rounded-md bg-gray-800">
							<img
								className="mt-4 ml-10 hidden overflow-hidden lg:block"
								src="src/images/gjirafa501.png"
								width="300px"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<script
				src="https://kit.fontawesome.com/93f4c9f245.js"
				crossOrigin="anonymous"
				defer
			/>
			<script
				src="./fixture-page.js"
				type="module"
				defer
			/>
		</div>
	);
}
