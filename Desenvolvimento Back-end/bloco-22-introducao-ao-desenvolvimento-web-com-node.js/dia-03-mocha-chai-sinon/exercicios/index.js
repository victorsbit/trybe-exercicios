const checkNumber = (number) => {
  if (typeof number !== 'number') {
    return 'o valor deve ser um número';
  }
  
  switch (true) {
    case (number < 0):
      return 'negativo';
    case (number === 0):
      return 'neutro';
    case (number > 0):
      return 'positivo';
    default:
      'dunno'
    break;
  };
}

module.exports = checkNumber;
