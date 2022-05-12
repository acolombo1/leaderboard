/* eslint-disable linebreak-style */
import './style.css';
import createGame from './modules/createGame.js';
import refresh from './modules/refresh.js';
import submit from './modules/submit.js';

if (localStorage.getItem('gameid') === null) {
  createGame('Game2');
}

const refreshBtn = document.getElementById('Refresh-btn');
const submitBtn = document.getElementById('Submit-btn');

refreshBtn.addEventListener('click', refresh);
submitBtn.addEventListener('click', submit);