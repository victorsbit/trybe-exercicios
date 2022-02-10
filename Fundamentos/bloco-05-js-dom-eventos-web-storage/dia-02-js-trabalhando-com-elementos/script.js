/* 
console.log(document.getElementById('start').nextSibling) // nó
console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>
*/

// 1
console.log(document.getElementById('primeiroFilhoDoFilho').parentNode);

// 2
let corPai = document.getElementById('elementoOndeVoceEsta').parentNode;
corPai.style.color = 'violet';

// 3
let textPrimeiroFilhoDoFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild;

textPrimeiroFilhoDoFilho.innerText = 'muda!';

// 4
console.log(document.getElementById('pai').firstElementChild);