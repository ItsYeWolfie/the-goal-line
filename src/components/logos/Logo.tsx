import { Logos } from '../../../types/Logos.types';

interface LogoProps {
	logo: Logos;
}

export default function Logo({ logo }: LogoProps) {
	return (
		<img
			className="no-scrollbar flex-none basis-[20%] overflow-auto rounded-lg hover:border-[1px] hover:border-yellow-400 md:basis-[10%]"
			src={logo.image}
			alt={logo.name}
		/>
	);
}
