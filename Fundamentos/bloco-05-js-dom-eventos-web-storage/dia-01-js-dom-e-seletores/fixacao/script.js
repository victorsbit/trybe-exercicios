function changeHeaderColor(color) {
  document.getElementById('header-container').style.backgroundColor = color;
}

changeHeaderColor('green');

function changeEmergency(color) {
  document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = color;
}

changeEmergency('#FF5555');

function changeNoEmergency(color) {
  document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = color;
}

changeNoEmergency('#FF9155');