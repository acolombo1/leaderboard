import './style.css';
import createGame from './modules/createGame.js';
import refresh from './modules/refresh.js';
import submit from './modules/submit.js';

if (localStorage.getItem('gameid') === null) {
  createGame('Game2');
} else {
  refresh();
}

const refreshBtn = document.getElementById('Refresh-btn');
const submitBtn = document.getElementById('Submit-btn');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

const submitOnEnter = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    submitBtn.click();
  }
};

refreshBtn.addEventListener('click', refresh);
submitBtn.addEventListener('click', submit);
nameInput.addEventListener('keypress', submitOnEnter);
scoreInput.addEventListener('keypress', submitOnEnter);
