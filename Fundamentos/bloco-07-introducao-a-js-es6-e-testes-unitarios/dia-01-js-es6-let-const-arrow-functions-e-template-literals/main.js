const clickCount = document.querySelector('#counter');
const btnClick = document.querySelector('#btn-counter');
let numberOfClicks = 0;

btnClick.addEventListener('click', () => {
  numberOfClicks += 1;
  clickCount.innerHTML = numberOfClicks;
});
