/* 
console.log(document.getElementById('start').nextSibling) // nó
console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>
*/

console.log(document.getElementById('primeiroFilhoDoFilho').parentNode);

let corPai = document.getElementById('elementoOndeVoceEsta').parentNode;
corPai.style.color = 'violet';