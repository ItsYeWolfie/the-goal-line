import { Logos } from '../../../types/Logos.types';

interface LogoProps {
	logo: Logos;
}

export default function Logo({ logo }: LogoProps) {
	return (
		<img
			className="flex-none basis-4/12 rounded-lg hover:border-2 hover:border-yellow-400 md:basis-1/12"
			src={logo.image}
			alt={logo.name}
		/>
	);
}
