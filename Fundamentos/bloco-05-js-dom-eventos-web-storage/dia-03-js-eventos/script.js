function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


// 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index = 0; index < dezDaysList.length; index += 1) {
  const day = dezDaysList[index];
  const dayWeek = document.createElement('li');
  dayWeek.innerHTML = day;
  
  if (day === 24 || day === 25 || day === 31) {
    dayWeek.className = 'day holiday';
  } else if (day === 4 || day === 11 || day === 18 || day === 25) {
    dayWeek.className = 'day friday';
  } else {
    dayWeek.className = 'day';
  }

  const dayUlList = document.querySelector('#days');
  dayUlList.appendChild(dayWeek);
}

// 2
function createButton(holidays) {
  const btnHoliday = document.createElement('button');
  btnHoliday.innerHTML = holidays;
  const divButton = document.querySelector('.buttons-container');
  btnHoliday.setAttribute('id', 'btn-holiday') // Ref: https://www.educative.io/edpresso/how-to-add-an-id-to-element-in-javascript
  btnHoliday.className = 'buttons-container';
  divButton.appendChild(btnHoliday);
}

createButton('Feriados');

// 3
function changeBgColor() {
  const button = document.querySelector('#btn-holiday');
  const allDays = document.querySelectorAll('.holiday');
  let newColor = 'green';
  let defaultColor = 'rgb(238,238,238)';


  button.addEventListener('click', function() {  
    for (let i = 0; i < allDays.length; i += 1) {
      // allDays[i].style.backgroundColor = newColor;
      // allDays[i].style.color = 'white';

      if (allDays[i].style.backgroundColor === newColor) {
        allDays[i].style.backgroundColor = defaultColor;
        allDays[i].style.color = '#777'
      } else {
        allDays[i].style.backgroundColor = newColor;
        allDays[i].style.color = 'white';
      }
    }
  });
}

changeBgColor();

// 4
function createFridayButton(sexta) {
  const btnFriday = document.createElement('button');
  btnFriday.innerHTML = sexta;
  const divButton = document.querySelector('.buttons-container');
  btnFriday.className = 'buttons-container';
  btnFriday.setAttribute('id', 'btn-friday');
  divButton.appendChild(btnFriday);
}

createButton('Sexta-feira');

// 5
function changeFriday() {
  const button = document.querySelectorAll('.buttons-container')[2];
  const friday = document.querySelectorAll('.friday');
  let defaultColor = 'rgb(238,238,238)';
  let newColor = 'lightblue';

  button.addEventListener('click', function() {
    for (let i = 0; i < friday.length; i += 1) {
      if (friday[i].style.backgroundColor === newColor) {
        friday[i].style.backgroundColor = defaultColor;
        friday[i].style.color = '#777'
      } else {
        friday[i].style.backgroundColor = newColor;
        friday[i].style.color = 'white';
      }      
    }
  });
}

changeFriday();