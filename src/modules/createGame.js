/* eslint-disable linebreak-style */
import message from './message.js';

export default async (game) => {
  /* To extract the JSON body content from the response object, we use the json() method,
   which returns a second promise that resolves with the result of parsing the response
   body text as JSON. */
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      body: JSON.stringify({ name: game }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    if (response.ok) {
      const jsonresult = await response.json();
      const myresult = jsonresult.result;
      const gameid = myresult.substr(myresult.search('ID: ') + 4, 20);
      localStorage.setItem('gameid', gameid);
    } else {
      message(`API request error: ${response.status}`);
    }
  } catch (error) {
    message(`API request failed: ${error}`);
  }
};
