import message from './message.js';

export default () => {
  if (localStorage.getItem('gameid') === null) {
    message('Please wait for the game ID to be loaded.');
  } else {
    // call api to get names/scores list
    // parse the data into the list
  }
 
};