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

async function main() {
  try {
    const resultado = await calc(2, 2, 5);
    console.log(`Resultado: ${resultado}`);
  } catch(e) {
    console.log(e.message);
  }
}

main();
