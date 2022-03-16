const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

function months(array) {
  const { spring, summer, autumn, winter } = {...array};
  const newArray = [spring, summer, autumn, winter];

  const allMonths = newArray.map((element) => {
    return element.join(', ');
  });

  return allMonths;
}

console.log(months(yearSeasons));
