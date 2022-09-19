class Estudante {
  private _nome: string;
  private _matricula: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];
  private _notasGeral: number[];

  constructor(nome: string, matricula: string, np: number[], nt: number[]) {
    if (!nome || !matricula) throw new Error('NO');
    if (np.length !== 4) throw new Error('NO');
    if (nt.length !== 2) throw new Error('NO');

    this._nome = nome;
    this._matricula = matricula;
    this._notasProva = np;
    this._notasTrabalho = nt;
    this._notasGeral = [...this._notasProva, ...this._notasTrabalho];
  }

  public calcSum() {
    return this._notasGeral.reduce((acc, curr) => acc + curr, 0);
  }

  public calcAvg() {
    return (this.calcSum() / this._notasGeral.length).toFixed(2);
  }
}

const novoEstudante = new Estudante('jao', '1234abcd', [10, 10, 10, 5], [5, 5]);
console.log(novoEstudante.calcAvg());
