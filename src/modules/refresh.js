import message from './message.js';

export default async () => {
  if (localStorage.getItem('gameid') === null) {
    message('Please wait for the game ID to be loaded.');
  } else {
    // call api to get names/scores list
    const gameid = localStorage.getItem('gameid');
    const uri = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores/`;
    try {
      const response = await fetch(uri, { method: 'GET' });
      if (response.ok) {
        const jsonresponse = await response.json();
        // parse the data into the list
        const scores = jsonresponse.result;
        const ul = document.querySelector('.leaderboard');
        ul.innerHTML = '';
        for (let i = 0; i < scores.length; i += 1) {
          const li = document.createElement('li');
          li.classList.add('listitem');
          li.innerHTML = `<span>${scores[i].user}</span><span>${scores[i].score}</span>`;
          ul.appendChild(li);
          message('Refreshed ok!', 'black');
        }
      } else {
        message(`API request error: ${response.status}`);
      }
    } catch (error) {
      message(`API request failed: ${error}`);
    }
  }
};