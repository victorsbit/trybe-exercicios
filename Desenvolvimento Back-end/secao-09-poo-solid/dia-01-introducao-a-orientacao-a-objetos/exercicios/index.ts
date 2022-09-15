class Estudante {
  nome: string;
  matricula: string;
  notasProva: number[];
  notasTrabalho: number[];

  constructor(nome: string, matricula: string, np: number[], nt: number[]) {
    if (!nome || !matricula) throw new Error('NO');
    if (np.length !== 4) throw new Error('NO');
    if (nt.length !== 2) throw new Error('NO');

    this.nome = nome;
    this.matricula = matricula;
    this.notasProva = np;
    this.notasTrabalho = nt;
  }
}