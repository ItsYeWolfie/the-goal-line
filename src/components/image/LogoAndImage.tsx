export default function LogoAndImage({ src, alt, name }: { src: string; alt: string; name: string }) {
	return (
		<div className="flex items-center gap-2 font-medium">
			<img
				src={src}
				alt={alt}
				className="h-6 w-6"
			/>
			{name}
		</div>
	);
}
