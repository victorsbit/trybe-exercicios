const coinContainer = document.querySelector('#crypto');

const fetchCrypto = fetch('https://api.coincap.io/v2/assets')
  .then(response => response.json())
  .then(data => {
    for (let index = 0; index < 10; index += 1) {
      newLi = document.createElement('li');
      newLi.innerText = `${data.data[index].name} (${data.data[index].symbol})`;
      coinContainer.appendChild(newLi);
    }
  });
