let changeBg = document.getElementById('bgcolor');
let bgColor = document.getElementById('all');

function changeBackgroundColor() {
  bgColor.className = 'changeBgColor';
}

changeBg.addEventListener('click', changeBackgroundColor);