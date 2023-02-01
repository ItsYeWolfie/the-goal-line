import Banner from '../Banners/Banner';
import Banner1 from '../Banners/Banner1';
import FixturesMain from '../FixturesMain/FixturesMain';
import StandingsMain from '../StandingsMain/StandingsMain';
import KitsSlider from '../kits/kits';
import HorizontalLine from '../Layout/Horizontal-Line';
import Layout from '../Layout/Layout';
import LogosSlider from '../logos/Logos';
import NewsSlider from '../News/News-Slider';
import Search from '../SearchBar-Main/Search';
import Footer from '../Footer/Footer';

export default function HomePage() {
	return (
		<Layout>
			<Search />
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
		</Layout>
	);
}
