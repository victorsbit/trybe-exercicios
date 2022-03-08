function isTechListValid(a, b) {
  if (a.length === 0 || b === '') {
    throw new Error('Vazio!');
  }

  return true;
}

function techList(arr, name) {
  let newArray = [];

  try {
    isTechListValid(arr, name);
    for (let i = 0; i < arr.length; i += 1) {
      const newKey = arr[i];
      newArray.push({ 'tech': newKey, name });
    }

    // Source: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
    arraySorted = newArray.sort((a, b) => {
      if (a.tech < b.tech) {
        return -1;
      }
      if (a.tech > b.tech) {
        return 1;
      }
      return 0;
    });
    return arraySorted;
  } catch (error) {
    return error.message;
  }  
}

console.log(techList([], 'Victor'));
module.exports = techList;
