const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

function months(array) {
  const { spring, summer, autumn, winter } = {...array};
  const newArray = [spring, summer, autumn, winter];
  
  let months = [];

  newArray.forEach((element) => months.push(...element));

  return months;
}

// console.log(months(yearSeasons));
