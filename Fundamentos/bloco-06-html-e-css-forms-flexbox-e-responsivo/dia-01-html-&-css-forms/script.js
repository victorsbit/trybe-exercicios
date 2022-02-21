const submitBtn = document.querySelector('#submit');
const checkImg = document.querySelector('#check-1');

function preventBtn(event) {
  event.preventDefault();
}

function agreement (event) {
  const checked = event.target.checked;
  console.log(checked);
}

checkImg.addEventListener('change', agreement);
submitBtn.addEventListener('click', preventBtn);
