import Banner from '../banners/Banner';
import Banner1 from '../banners/Banner1';
import FixturesMain from '../FixturesMain/FixturesMain';
import StandingsMain from '../StandingsMain/StandingsMain';
import KitsSlider from '../kits/kits';
import HorizontalLine from '../Layout/Horizontal-Line';
import LogosSlider from '../logos/Logos';
import NewsSlider from '../News/News-Slider';
import Footer from '../Footer/Footer';

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
