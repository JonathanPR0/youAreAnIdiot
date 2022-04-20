const maxWidth = window.innerWidth - sectionContainer.offsetWidth - 48;
const maxHeight = window.innerHeight - sectionContainer.offsetHeight - 48;

function randomPosition(width, height) {
  container.style.display = 'inline-block';
  const x = Math.floor(Math.random() * (width - 20 + 1));
  const y = Math.floor(Math.random() * (height - 20 + 1));
  return { x, y };
}

yes.addEventListener('click', (e) => {
  e.preventDefault();
  sectionContainer.innerHTML = '<h2>Oh! Interesting<h2/>';
});
no.addEventListener('click', (e) => {
  e.preventDefault();
  sectionContainer.style.left = randomPosition(maxWidth, maxHeight).x + 'px';
  sectionContainer.style.top = randomPosition(maxWidth, maxHeight).y + 'px';
});
