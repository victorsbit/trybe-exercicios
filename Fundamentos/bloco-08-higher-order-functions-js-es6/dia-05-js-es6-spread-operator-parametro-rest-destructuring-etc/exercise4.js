const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
function filterPeople(array) {
  // return array.filter((element) => element.bornIn >= 1901 && element.bornIn <= 2000);
  
  let newArray = [];
  array.forEach((element) => {
    const { bornIn } = element;
    if (bornIn >= 1901 && bornIn <= 2000) newArray.push(element);
  });
  
  return newArray;
}

console.log(filterPeople(people));
