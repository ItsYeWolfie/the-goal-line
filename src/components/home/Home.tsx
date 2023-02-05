import FixturesMain from '../fixtures-main/FixturesMain';
import StandingsMain from '../standings-main/StandingsMain';
import KitsSlider from '../kits/kits';
import HorizontalLine from '../layout/Horizontal-Line';
import LogosSlider from '../logos/TeamsSlider';
import NewsSlider from '../news/NewsSlider';
import Footer from '../footer/Footer';
import Banner from '../Banners/Banner';
import Banner1 from '../Banners/Banner1';

export default function HomePage() {
	return (
		<>
			<Banner />
			<HorizontalLine />
			<StandingsMain />
			<HorizontalLine />
			<FixturesMain />
			<HorizontalLine />
			<KitsSlider />
			<HorizontalLine />
			<LogosSlider />
			<HorizontalLine />
			<Banner1 />
			<HorizontalLine />
			<NewsSlider />
			<HorizontalLine />
			<Footer />
		</>
	);
}
