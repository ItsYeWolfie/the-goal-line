import Banner from '../Banners/Banner';
import Banner1 from '../Banners/Banner1';
import FixturesMain from '../FixturesMain/FixturesMain';
import KitsSlider from '../Kits/kits';
import HorizontalLine from '../Layout/Horizontal-Line';
import Layout from '../Layout/Layout';
import LogosSlider from '../logos/Logos';
import NewsSlider from '../News/News-Slider';

export default function HomePage() {
	return (
		<Layout>
			<Banner />
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
		</Layout>
	);
}
