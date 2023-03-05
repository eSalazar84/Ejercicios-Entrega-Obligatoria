/* En un mismo proyecto NPM
Ejercicio 1
Usando la clase Auto: Implementar la clase RegistroAutomotor 
con métodos para consultar por un auto en un 
listado, borrar, actualizar y dar de alta
Partir de la función ya implementada para leer archivos */

import { Auto } from "../ejercicio1-claseAuto/claseAuto";

class RegistroAutomotor {
  todo(array: any): void {
    console.log(`Listado de Autos en el Registro:`);
    console.table(array);
  }
  insertar(car: Auto, array: Auto[]): void {
    if (array.push(car)) {
      console.log(
        `Se ha añadido ${car.brand} a la base de datos. La base de datos del Registro queda de la siguiente forma:`
      );
      console.table(array);
    } else {
      console.log(
        `El libro ${car.brand} no se ha podido añadir a la biblioteca`
      );
    }
  }
  consultar(brand: string, array: Auto[]): any {
    let autoEncontrado: Auto | undefined = array.find((auto) => auto.brand === brand);
    if (autoEncontrado) {
      console.log(`${brand} existe en el Registro.`);
      //console.table(autoEncontrado);
      return autoEncontrado
    } else {
      console.log(`${brand} no existe en el Registro.`);
    }
  }
  modificar(brand: string, array: Auto[], dato: string): void {
    let autoModificar: Auto | undefined = this.consultar(brand, array);
    console.log(autoModificar);
    
    if (autoModificar) {
      autoModificar.brand = dato;
      console.log(
        `El auto ${brand} ha sido modificado y ahora se llama ${dato}`
      );
    } else {
      console.log("El Registro no se ha podido modificar");
    }
  }
  eliminar(brand: string, array: Auto[]): any {
    const setString: string = brand.toLowerCase();
    let indexArray: number = array.findIndex(
      (setString) => setString.brand == brand
    );
    if (indexArray >= 0) {
      array.splice(indexArray, 1);
      console.log(`Auto eliminado del Registro: ${brand}`);
      console.table(array);
      return array;
    } else {
      console.log(`El auto ${brand} no ha sido eliminado`);
    }
  }
}
const auto_1: Auto = new Auto(`Peugeot`, `206`, 2012);
const auto_2: Auto = new Auto(`Ford`, `Ecosport`, 2015);
const auto_3: Auto = new Auto(`Chevrolet`, `Corsa`, 2020);
const auto_4: Auto = new Auto(`Fiat`, `Palio`, 2000);
const auto_5: Auto = new Auto(`Citroen`, `Xara`);
const auto_6: Auto = new Auto(`Wolkswagen`, `Gol`, 2010);

const listadoAutos: Auto[] = [auto_1, auto_2, auto_3, auto_4, auto_5, auto_6];
const registro: RegistroAutomotor = new RegistroAutomotor();
const auto_7: Auto = new Auto(`Ferrari`, `Testarrossa`, 2023);
registro.insertar(auto_7, listadoAutos);
registro.eliminar(`Fiat`, listadoAutos);  //Chequeado y modificado
registro.consultar(`Fiat`,listadoAutos);
registro.modificar(`Wolkswagen`, listadoAutos,`Volkswagen`);
registro.todo(listadoAutos);

