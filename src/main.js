/* eslint-disable prettier/prettier */
import './style.css';
import './components/navbar/GHeader';


const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
