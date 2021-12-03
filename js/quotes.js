const quotes = [
  {
    quote: 'Tough times never last, but tough people do.',
    author: 'Robert H. Schuller',
  },
  {
    quote:
      'I’ve failed over and over and over again in my life and that is why I succeed.',
    author: 'Michael Jordan',
  },
  {
    quote:
      'If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.',
    author: 'Angelina Jolie',
  },
  { quote: 'Grind Hard, Shine Hard.', author: 'Dwayne Johnson' },
  {
    quote:
      'I didn’t get there by wishing for it or hoping for it, but by working for it.',
    author: 'Estée Lauder',
  },
  {
    quote: 'You cannot change what you are, only what you do.',
    author: 'Philip Pullman',
  },
  {
    quote:
      'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
    author: 'Thomas A. Edison',
  },
  {
    quote:
      'All you need in this life is ignorance and confidence; then success is sure.',
    author: 'Mark Twain',
  },
  {
    quote:
      'Life is from the inside out. When you shift on the inside, life shifts on the outside.',
    author: 'Kamal Ravikant',
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
];

const quoteBox = document.querySelector('#quote');
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

function getQuote() {
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = `"${todaysQuote.quote}"`;
  author.innerText = `-${todaysQuote.author}-`;
}

getQuote();

if (savedUserName !== null) {
  quoteBox.classList.remove(HIDDEN_CLASSNAME);
}
