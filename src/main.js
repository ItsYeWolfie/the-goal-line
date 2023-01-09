import './style.css';

// Import poppins font from Google Fonts and apply it to the body
document.querySelector('head').innerHTML += `
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
`;

if (
	localStorage.theme === 'dark' ||
	(!('theme' in localStorage) &&
		window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
	document.documentElement.classList.add('dark');
} else {
	document.documentElement.classList.remove('dark');
}
