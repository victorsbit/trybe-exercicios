const doingThings = (func) => {
  console.log(func());
};

const wakeUp = () => 'Acordando!';
const breakfast = () => 'Bora tomar café!';
const sleep = () => 'Partiu dormir!';

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);