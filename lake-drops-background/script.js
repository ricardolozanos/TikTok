const container = document.querySelector('.container');

function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  const size = Math.floor(Math.random() * 6) + 5; 
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.borderRadius = '50%';
  circle.style.borderWidth = '2px';
  container.appendChild(circle);

  const x = Math.random() * (container.offsetWidth - size);
  const y = Math.random() * (container.offsetHeight - size);
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  circle.addEventListener('animationend', () => {
    circle.remove();
  });

  setTimeout(() => {
    circle.classList.add('expand');
  }, 100);
}

setInterval(createCircle, 50); //20 PER SECOND
