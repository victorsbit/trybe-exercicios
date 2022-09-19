class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string = 'n sei';

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn() {
    console.log(`TV da marca ${this._brand}. Possui ${this._size}"`);
  }

  set connectedTo(connection: string) {
    if (this._connections.some((con: string) => con === connection)) {
      this._connectedTo = connection;
    } else {
      console.log('Sorry, connection unavailable');
    }
  }

  get connectedTo() {
    return this._connectedTo;
  }
}

const newTv = new Tv('LG', 48, '4K', ['HDMI', 'DisplayPort']);
newTv.connectedTo = 'VGA';
console.log(newTv.connectedTo);
