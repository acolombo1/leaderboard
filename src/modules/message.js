export default (msg) => { 
  const label = document.getElementById('label');
  label.innerHTML = msg;
  if (label.classList.contains('hideslowly')) label.classList.remove('hideslowly');
  setTimeout(() => {
    if (!label.classList.contains('hideslowly')) label.classList.add('hideslowly');
  }, 1000);
};