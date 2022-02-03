const a1 = 80;
const a2 = 50;
const a3 = 50;
let soma = a1 + a2 + a3;

if (soma === 180) {
    console.log(true);
} else if (a1 <= 0 || a2 <= 0 || a3 <= 0) {
    console.log("Um dos ângulos inseridos possui um valor inválido.");
} else {
    console.log(false);
}