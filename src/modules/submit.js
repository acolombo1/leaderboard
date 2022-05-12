/* eslint-disable linebreak-style */
import message from './message.js';

export default () => {
  if (localStorage.getItem('gameid') === null) {
    message('Please wait for the game ID to be loaded.');
  } else {
    const nameInput = document.getElementById('name');
    const scoreInput = document.getElementById('score');

    if (nameInput.value !== '' && scoreInput.value !== '') {
      const gameid = localStorage.getItem('gameid');
      const uri = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores/`;
      fetch(uri, {
        method: 'POST',
        body: JSON.stringify({
          user: nameInput.value,
          score: scoreInput.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          message(json.result);
        });
    } else {
      message('Please input Name and Score');
    }
  };
}