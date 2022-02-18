const submitBtn = document.querySelector('#submit');

function preventBtn(event) {
  event.preventDefault();
}

submitBtn.addEventListener('click', preventBtn);
