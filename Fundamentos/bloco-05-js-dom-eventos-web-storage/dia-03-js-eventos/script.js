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