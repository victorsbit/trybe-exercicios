function sum(...parameters) {
  return `You declared a total of ${parameters.length <= 1 ? parameters.length + ' parameter' : parameters.length + ' parameters'}`;
}

console.log(sum(2, 'str', () => {}, [], false, [], {}));
