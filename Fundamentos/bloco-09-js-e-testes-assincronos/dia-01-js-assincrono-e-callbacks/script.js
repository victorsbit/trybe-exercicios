// 1
// 1 = A, 2 = B, 3 = C

// 2
// 1 = A, 2 = C, 3 = B

// 3
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

setTimeout(getPlanet, 4000); // imprime Marte depois de 4 segundos

// 4
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// console.log(getMarsTemperature());

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  return setTimeout(() => {
    console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`);
  }, messageDelay());
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
