import './style.css';
import './components/navbar/GHeader';

const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

const countDownDate = new Date('March 19, 2023 20:45:00').getTime();

// Update the count down every 1 second
const x = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById(
    'demo',
  ).innerHTML = `${days}d : ${hours}h :  ${minutes}min : ${seconds}sec `;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);
