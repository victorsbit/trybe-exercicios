enum Color {
  BLACK = 'Preta',
  WHITE = 'Branca',
  RED = 'Vermelha',
  SILVER = 'Prata'
}

enum Door {
  OPEN = 'abre a porta',
  CLOSE = 'fecha a porta'
}

enum Direction {
  LEFT = 'esquerda',
  RIGHT = 'direita',
}

class Car {
  brand: string;
  doors: number;

  constructor(brand: string, doors: number) {
    this.brand = brand;
    this.doors = doors;
  }

  honk(): void {
    console.log('why r u gae');
  }

  openTheDoor(action: Door): void {
    console.log(action);
  }

  closeTheDoor(action: Door): void {
    console.log(action);
  }

  turnOn(): void {
    console.log('ligando o carro');
  }

  turnOff(): void {
    console.log('desligando o carro');
  }

  speedUp(): void {
    console.log('acelerando');
  }

  speedDown(): void {
    console.log('desacelerando');
  }

  stop(): void {
    console.log('parou');
  }

  turn(direction: Direction): void {
    console.log(`virando a ${direction}`);
  }
}
