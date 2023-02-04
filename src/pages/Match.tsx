import Formation from '../components/match-page/Formation';
import H2h from '../components/match-page/H2H';
import Match from '../components/match-page/Match';
import MatchTabs from '../components/match-page/LineupTabs';
import Tabs from '../components/match-page/MobTabs';
import Odds from '../components/match-page/Odds';
import Standings from '../components/match-page/Standings';
import Statistics from '../components/match-page/Statistics';
import TabIS from '../components/match-page/TabIS';

export default function MatchPage() {
	return (
		<div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
			<div className="-mb-2 flex h-12 w-full justify-center md:mt-3 md:h-auto lg:hidden">
				<span className="my-auto">
					<img
						src="/images/logo-sky-no-background.svg"
						width="170px"
						alt=""
					/>
				</span>
			</div>
			<div className="flex-col justify-center gap-4 p-0.5 md:flex md:flex-col lg:flex lg:flex-row lg:p-0">
				<div className="w-full lg:w-1/2">
					<h6 className="pl-1 text-xs md:ml-20 lg:ml-0 lg:mt-2">MATCH</h6>
					<Match />
					<Tabs />
					<div className="hidden lg:block">
						<TabIS />
					</div>
					<div className="hidden lg:block">
						<h6 className="mt-4 hidden pl-1 text-xs md:ml-20 lg:ml-0 lg:flex">TEAMS FORMATIONS</h6>
						<Formation />
					</div>
					<div className="mt-4 hidden lg:block">
						<MatchTabs />
					</div>
					<div className="hidden lg:block">
						<h6 className="mt-4 hidden pl-1 text-xs md:ml-20 lg:ml-0 lg:flex">TEAMS STATISTIC</h6>
						<Statistics />
					</div>
				</div>
				<div className="mt-[1px]">
					<div className="md:mx-auto md:w-4/5 lg:ml-0 lg:w-96">
						<div className="hidden lg:block">
							<h6 className="mt-2 hidden pl-1 text-xs lg:flex">ODDS</h6>
							<Odds />
						</div>
						<div className="hidden lg:block">
							<h6 className="mt-4 hidden pl-1 text-xs lg:flex">HEAD-TO-HEAD MATCHES</h6>
							<H2h />
						</div>
						<div className="hidden lg:block">
							<h6 className="mt-4 hidden pl-1 text-xs lg:flex">TABLE</h6>
							<Standings />
						</div>
						<div className="rounded-md bg-gray-200 dark:bg-gray-800">
							<img
								className="mt-4 ml-10 hidden overflow-hidden lg:flex"
								src="/images/gjirafa501.png"
								width="300px"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
