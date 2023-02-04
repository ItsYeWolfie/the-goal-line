interface ILogoAndImage {
	src: string;
	alt: string;
	name: string;
}

export default function LogoAndImage({ src, alt, name }: ILogoAndImage) {
	return (
		<div className="flex items-center gap-2 font-medium">
			<img
				src={src}
				alt={alt}
				loading="lazy"
				className="h-6 w-6 rounded-full"
			/>
			{name}
		</div>
	);
}

export function LogoAndImageReversed({ src, alt, name }: ILogoAndImage) {
	return (
		<div className="flex items-center gap-2 font-medium">
			{name}
			<img
				src={src}
				alt={alt}
				loading="lazy"
				className="h-6 w-6 rounded-full"
			/>
		</div>
	);
}
