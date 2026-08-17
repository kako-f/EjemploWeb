// 1. Selecting elements
const button = document.querySelector('.my-button');

// 2. Modifying content and styles
button.textContent = 'Clicked!';
button.style.backgroundColor = 'blue';

// 3. Handling user events
button.addEventListener('click', () => {
  console.log('Button was clicked!');
});