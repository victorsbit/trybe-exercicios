const nota = 100;

if (nota >=  80) {
    console.log("Parabens, voce foi aprovado(a)!");
} else if (nota < 80 && nota >= 60) {
    console.log("Voce esta na nossa lista de espera.");
} else if (nota < 60) {
    console.log("Voce foi reprovado(a).");
} else {
    console.log("Nota invalida.");
}