function calc(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number'
        || typeof b !== 'number'
        || typeof c !== 'number') {
          reject(new Error('Informe apenas números'));
    }

    const resultado = (a + b) * c;

    if (resultado < 50) {
      reject(new Error(`Valor muito baixo: ${resultado}`));
    } else {
      resolve(`Valor: ${resultado}`);
    }
  });
}

// async function main() {
//   try {
//     const resultado = await calc('a', 2, 5);
//     console.log(`Resultado: ${resultado}`);
//   } catch(e) {
//     console.log(e.message);
//   }
// }

// main();

function doCalc() {
  const rNumber1 = Math.floor(Math.random() * 100 + 1);
  const rNumber2 = Math.floor(Math.random() * 100 + 1);
  const rNumber3 = Math.floor(Math.random() * 100 + 1);

  calc(rNumber1, rNumber2, 'number')
    .then((resolve) => console.log(resolve))
    .catch((error) => console.log(error.message));

  calc(rNumber1, rNumber2, rNumber3)
    .then((resolve) => console.log(resolve))
    .catch((error) => console.log(error.message));
}

doCalc();
