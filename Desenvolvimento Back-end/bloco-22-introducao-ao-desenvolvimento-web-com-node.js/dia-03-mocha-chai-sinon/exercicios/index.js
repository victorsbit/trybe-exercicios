const checkNumber = (number) => {
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
