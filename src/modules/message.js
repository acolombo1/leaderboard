export default (msg, color = 'red') => {
  const label = document.getElementById('label');
  label.innerHTML = msg;
  if (color === 'red') {
    if (label.classList.contains('black')) label.classList.remove('black');
    if (!label.classList.contains('red')) label.classList.add('red');
  } else {
    if (label.classList.contains('red')) label.classList.remove('red');
    if (!label.classList.contains('black')) label.classList.add('black');
  }
  if (label.classList.contains('hideslowly')) label.classList.remove('hideslowly');
  setTimeout(() => {
    if (!label.classList.contains('hideslowly')) label.classList.add('hideslowly');
  }, 1000);
};