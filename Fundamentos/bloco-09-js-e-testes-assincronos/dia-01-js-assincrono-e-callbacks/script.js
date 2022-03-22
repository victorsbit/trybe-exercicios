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
