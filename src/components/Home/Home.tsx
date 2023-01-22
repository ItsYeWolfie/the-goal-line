import Banner from '../banners/Banner';
import Banner1 from '../banners/Banner1';
import KitsSlider from '../kits/kits';
import Layout from '../Layout/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Banner />
			<Banner1 />
			<KitsSlider />
		</Layout>
	);
}
