/* eslint-disable tailwindcss/classnames-order */
import { useContext, useEffect } from 'react';
import Formation from '../../../components/match-page/Formation';
import H2h from '../../../components/match-page/H2H';
import Match from '../../../components/match-page/Match';
import MatchTabs from '../../../components/match-page/LineupTabs';
import Tabs from '../../../components/match-page/MobTabs';
import Odds from '../../../components/match-page/Odds';
import Standings from '../../../components/match-page/Standings';
import Statistics from '../../../components/match-page/Statistics';
import TabIS from '../../../components/match-page/TabIS';
import { GlobalHeaderContext, IGlobalHeader } from '../../../contexts/GlobalHeader.context';

export default function MatchPage() {
	const { setBreadcrumbs } = useContext<IGlobalHeader>(GlobalHeaderContext);

	useEffect(() => {
		setBreadcrumbs([
			{
				name: 'Matches',
				href: '/matches',
			},
		]);

		return () => {
			setBreadcrumbs([]);
		};
	}, [setBreadcrumbs]);
	return (
		<div className=" text-gray-900 dark:text-gray-200">
			<div className="container flex-col justify-center gap-4 p-0.5 md:flex md:flex-col lg:flex lg:flex-row lg:p-0">
				<div className="w-full lg:w-3/5">
					<h6 className="-mt-2 pl-1 text-xs">MATCH</h6>
					<Match />
					<Tabs />
					<div className="hidden lg:block">
						<TabIS />
					</div>
					<div className="hidden lg:block">
						<h6 className="mt-4 hidden pl-1 text-xs lg:flex">TEAMS FORMATIONS</h6>
						<Formation />
					</div>
					<div className="mt-4 hidden lg:block">
						<MatchTabs />
					</div>
					<div className="hidden lg:block">
						<h6 className="mt-4 hidden pl-1 text-xs lg:flex">TEAMS STATISTIC</h6>
						<Statistics />
					</div>
				</div>
				<div className="mt-[1px]">
					<div className="md:mx-auto md:w-4/5 lg:ml-0 lg:w-[30rem]">
						<div className="hidden lg:block">
							<h6 className="-mt-2 hidden pl-1 text-xs lg:flex">ODDS</h6>
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
						<div className="mt-4 w-full">
							{/* <img
								className="hidden mt-4 ml-10 overflow-hidden lg:flex"
								src="/images/gjirafa501.png"
								width="292px"
								alt=""
							/> */}
							<img
								src="/images/reklam1.png"
								className="mt-4 hidden overflow-hidden lg:flex"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
