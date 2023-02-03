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

		if (darkMode) {
			localStorage.theme = 'light';
		} else {
			localStorage.theme = 'dark';
		}
	};
	return (
		<button
			type="button"
			onClick={toggleDarkMode}
			className={`${className || ''} flex h-10 w-10 items-center justify-center `}
		>
			{darkMode ? <BsMoonFill className="h-full text-gray-200" /> : <BsFillSunFill className="h-full text-gray-200" />}
		</button>
	);
}

DarkModeToggle.defaultProps = {
	className: '',
};
