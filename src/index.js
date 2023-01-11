import './components/navbar/GHeader';
import './components/footer/footer';
import './components/header/header';
import './components/banner/banner'


const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

button.addEventListener('click', () => {
	menu.classList.toggle('hidden');
});

