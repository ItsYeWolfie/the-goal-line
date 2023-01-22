import Banner from '../banners/Banner';
import Banner1 from '../banners/Banner1';
import KitsSlider from '../kits/kits';
import HorizontalLine from '../Layout/Horizontal-Line';
import Layout from '../Layout/Layout';
import LogosSlider from '../logos/Logos';

export default function HomePage() {
	return (
		<Layout>
			<Banner />
			<HorizontalLine />
			<KitsSlider />
			<HorizontalLine />
			<LogosSlider />
			<HorizontalLine />
			<Banner1 />
			<HorizontalLine />
		</Layout>
	);
}
