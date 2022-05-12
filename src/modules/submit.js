import message from './message.js';

export default async () => {
  if (localStorage.getItem('gameid') === null) {
    message('Please wait for the game ID to be loaded.');
  } else {
    const nameInput = document.getElementById('name');
    const scoreInput = document.getElementById('score');

    if (nameInput.value !== '' && scoreInput.value !== '') {
      const gameid = localStorage.getItem('gameid');
      const uri = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores/`;
      try {
        const response = await fetch(uri, {
          method: 'POST',
          body: JSON.stringify({ user: nameInput.value, score: scoreInput.value }),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        if (response.ok) {
          const jsonresponse = await response.json();
          message(jsonresponse.result, 'black');
        } else {
          message(`API request error: ${response.status}`);
        }
      } catch (error) {
        message(`API request failed: ${error}`);
      }
    } else {
      message('Please input Name and Score');
    }
  }
};
