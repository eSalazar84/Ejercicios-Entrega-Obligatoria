/* Ejercicio 2
Implementar la clase Matriz. En vez de consultar los valores con los corchetes, 
se debe hacer (desde afuera) a través de un método → get(x, y) */

export class Matrix {
  private elementosEjeX: number;
  private elementosEjeY: number;
  constructor(elemEjeX: number, elemEjeY: number) {
    this.elementosEjeX = elemEjeX;
    this.elementosEjeY = elemEjeY;
  }
  get(x: number, y: number): string {
    if (x > this.elementosEjeX || y > this.elementosEjeY || x,y <= 0) {
      return `Los valores estan por fuera de la Matriz, intente con otros valores`;
    } else {
      const mtrx: number[][] = [[]];
      for (let i = 1; i <= this.elementosEjeX; i++) {
        if (i >= 0) mtrx.push([]);
        for (let j = 1; j <= this.elementosEjeY; j++) {
          mtrx[i][j] = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        }
      }
      console.table(mtrx);
      return `El valor en la Matriz posicion [x:${x} ; y:${y}] es ${mtrx[x][y]}`;
    }
  }
}

const matrix_ejemplo: Matrix = new Matrix(10,5);
console.log(matrix_ejemplo.get(5,5));


