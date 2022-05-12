/* eslint-disable linebreak-style */
export default (game) => {
  /* To extract the JSON body content from the response object, we use the json() method,
   which returns a second promise that resolves with the result of parsing the response
   body text as JSON. */
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: game,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const myresult = json.result;
      const gameid = myresult.substr(myresult.search('ID: ') + 4, 20);
      localStorage.setItem('gameid', gameid);
    });
};
