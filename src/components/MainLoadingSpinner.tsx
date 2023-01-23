import { ImSpinner10 } from 'react-icons/im';
import { useEffect } from 'react';

export default function MainLoadingSpinner() {
	useEffect(() => {
		const doesOverflowYScrollExist = document.body.classList.contains('overflow-y-scroll');
		document.body.classList.add('overflow-y-hidden');
		if (doesOverflowYScrollExist) {
			document.body.classList.remove('overflow-y-scroll');
		}
		return () => {
			document.body.classList.remove('overflow-y-hidden');
			if (doesOverflowYScrollExist) {
				document.body.classList.add('overflow-y-scroll');
			}
		};
	}, []);

	return (
		<section className="absolute top-0 left-0 h-full w-full bg-neutral-800 bg-opacity-70">
			<div className="flex h-full items-center justify-center">
				<ImSpinner10 className="animate-spin text-5xl text-neutral-100" />
			</div>
		</section>
	);
}
