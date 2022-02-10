/* 
console.log(document.getElementById('start').nextSibling) // nó
console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>


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

// 5
console.log(document.getElementById('pai').previousElementSibling);

// 6
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

// 7
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

// 8
console.log(document.getElementById('pai').lastElementChild.previousElementSibling);
*/
/* 
// Parte 2

// 1
let sibling = document.createElement('section');
document.getElementById('pai').appendChild(sibling);

// 2
let child = document.createElement('section');
document.getElementById('elementoOndeVoceEsta').appendChild(child);
document.getElementById('elementoOndeVoceEsta').lastElementChild.innerText = 'test';

// 3
let child2 = document.createElement('section');
document.getElementById('primeiroFilhoDoFilho').appendChild(child2);
document.getElementById('primeiroFilhoDoFilho').lastElementChild.innerText = 'test2';

// 4
let grandChild = document.getElementById('primeiroFilhoDoFilho').firstChild;
// console.log(grandChild);
 */

// Parte 3

// Remove primeiroFilho

function removeElement(element) {
  element.remove();
}

// selectiona primeiroFilho
let removePrimeiroFilho = document.getElementById('paiDoPai').firstElementChild.firstElementChild;

// selectiona segundoEUltimoFilho
let removeSegundoEUltimoFilho = document.getElementById('elementoOndeVoceEsta').lastElementChild;

// selectiona terceiroFilho
let removeTerceiroFilho =  document.getElementById('pai').lastElementChild.previousElementSibling;

// selectiona quartoEUltimoFilho
let removeQuartoEUltimoFilho = document.getElementById('pai').lastElementChild;

// Funcao que aceita como parametro qual elemento a ser excluido
removeElement(removeQuartoEUltimoFilho);