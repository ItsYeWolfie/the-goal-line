import FixturesMain from '../FixturesMain/FixturesMain';
import StandingsMain from '../StandingsMain/StandingsMain';
import KitsSlider from '../kits/kits';
import HorizontalLine from '../Layout/Horizontal-Line';
import LogosSlider from '../logos/Logos';
import NewsSlider from '../News/News-Slider';
import Footer from '../Footer/Footer';
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
