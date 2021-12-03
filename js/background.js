const mainView = document.querySelector('.main-view');

const images = ['0.jpg', '1.jpg', '2.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.src = `/img/${chosenImage}`;

mainView.style.backgroundImage = `url(${bgImage.src})`;
mainView.style.backgroundSize = 'cover';
mainView.style.backgroundRepeat = 'no-repeat';
// mainView.style.height = '100vh';
