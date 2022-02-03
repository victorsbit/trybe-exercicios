let peca = "cAvAlO";

if (peca.toLowerCase() === "rei") {
    console.log("diagonais, verticais e horizontais");
} else if (peca.toLowerCase() === "dama") {
    console.log("diagonais, verticais e horizontais");
} else if (peca.toLowerCase() === "torre") {
    console.log("vericais e hotizontais");
} else if (peca.toLowerCase() === "bispo") {
    console.log("diagonais");
} else if (peca.toLowerCase() === "cavalo") {
    console.log("em L");
} else if (peca.toLowerCase() === "peão") {
    console.log("diagonais e verticais");
} else {
    console.log("peça inválida");
}