import { useEffect, useState } from 'react';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

export default function DarkModeToggle({ className }: { className?: string }) {
	const [darkMode, setDarkMode] = useState(
		localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
	);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);

		if (localStorage.getItem('theme') === 'light') {
			localStorage.setItem('theme', 'dark');
		} else {
			localStorage.removeItem('theme');
		}
	};
	return (
		<button
			type="button"
			onClick={toggleDarkMode}
			className={`${className || ''} flex h-8 w-8`}
		>
			{darkMode ? (
				<BsMoonFill className="h-5 w-5 text-gray-200" />
			) : (
				<BsFillSunFill className="h-5 w-5 text-gray-200" />
			)}
		</button>
	);
}

DarkModeToggle.defaultProps = {
	className: '',
};
