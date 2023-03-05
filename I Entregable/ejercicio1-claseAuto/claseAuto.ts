/* Ejercicio 2
Plantear una clase Auto de la forma en que se vió 
en la clase → especificando variables internas y métodos
Implementar en TypeScript*/

export class Auto {
  // estado de la clase: variables
  brand: string;
  private model: string;
  private currentSpeed: number;
  private year: number;
  private isOn: boolean;
  private fuel: number;
  // constructor de la clase
  constructor(brand: string, model: string, year?: number) {
    this.brand = brand;
    this.model = model;
    year ? (this.year = year) : (this.year = Math.floor(Math.random()*(2023-1980)+1980));
    this.currentSpeed=0;
    this.isOn=Math.random() >= 0.5;
    this.fuel= Math.floor(Math.random()*(100-10)+10);
  }
  // funcionalidades de la clase: funciones
  switchOnOff(): void {
    this.isOn != this.isOn;
    console.log(`${this.brand} Car on, check system, ${this.fuel}% fuel`);
  }
  private showSpeed(): number {
    return this.currentSpeed;
  }
  speedUp(): void {
    if (this.currentSpeed < 100 && this.fuel > 1) {
      this.currentSpeed++;
      this.fuel--;
      console.log(`${this.showSpeed()}km/h`);
    } else {
      this.currentSpeed++;
      this.fuel--;
      console.log(`${this.showSpeed()}km/h ¡Alerta de velocidad!`);
    }
  }
  speedDown(): void {
    if (this.currentSpeed > 1 && this.fuel > 1) {
      this.currentSpeed--;
      this.fuel--;
      console.log(`${this.showSpeed()}km/h`);
    } else {
      console.log(`Auto detenido`);
    }
    /* if (this.currentSpeed > 100) {
      console.log(`${this.showSpeed()}km/h ${this.speedLimit}`);
    } */
  }
}

/* const peugeot: Auto = new Auto(`Peugeot`,`206`,2012);
const ford:Auto=new Auto(`Ford`,`Ecosport`, 2023);
const fiat:Auto=new Auto(`Ford`,`Palio`)
peugeot.switchOnOff();
peugeot.speedUp();
peugeot.speedUp();
peugeot.speedUp();
peugeot.speedUp();
peugeot.speedDown();
peugeot.speedDown();
peugeot.speedDown();
peugeot.speedDown();
peugeot.speedDown();
console.log(peugeot);
console.log(ford);
console.log(fiat); */
