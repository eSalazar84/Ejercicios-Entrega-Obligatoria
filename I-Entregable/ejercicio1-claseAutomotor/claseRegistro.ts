/* En un mismo proyecto NPM
Ejercicio 1
Usando la clase Auto: Implementar la clase RegistroAutomotor 
con métodos para consultar por un auto en un 
listado, borrar, actualizar y dar de alta
Partir de la función ya implementada para leer archivos */

import * as fs from "fs";
import { table } from "console";
import { Auto } from "./claseAuto";

const listadoAuto:string[]=[];

//const fs = require(`fs`);
try {
  const listadoAuto = require(`./autos.json`);
  const listadoAutoEdit = fs.readFileSync(`./autos.json`, `utf8`);
  const listado = JSON.parse(listadoAutoEdit);  
} catch (error) {
  const message:string=`Ocurrio un error...`;  
  fs.writeFileSync(`./errrores.txt`, message, `utf8`)
}

//const listadoAuto = JSON.parse(fs.readFileSync(`./autos.json`,`utf-8`)) ;

class RegistroAutomotor {
  todo(array: any): void {
    console.log(`Listado de Autos en el Registro:`);
    return table(array);
  }
  insertar(car: any, model:string|number,year:number, array: any): string {
    if (array.push(car)) {
      return `Se ha añadido ${car.brand} a la base de datos. La base de datos del Registro queda de la siguiente forma:`;
    } else {
      return `El libro ${car.brand} no se ha podido añadir a la biblioteca`;
    }
  }
  consultar(brand: string, array: Auto[]): any {
    let autoEncontrado: Auto | undefined = array.find(
      (auto) => auto.brand === brand
    );
    if (autoEncontrado) {
      console.log(`${brand} existe en el Registro.`);
      //console.table(autoEncontrado);
      return autoEncontrado;
    } else {
      console.log(`${brand} no existe en el Registro.`);
    }
  }
  modificar(brand: string, array: Auto[], dato: string): string {
    let autoModificar: Auto | undefined = this.consultar(brand, array);
    if (autoModificar) {
      autoModificar.brand = dato;
      return `El auto ${brand} ha sido modificado y ahora se llama ${dato}`;
    } else {
      return "El Registro no se ha podido modificar";
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

const registro1: RegistroAutomotor = new RegistroAutomotor();
registro1.todo(listado); // chequeado y OK
registro1.insertar("Ferrari","Testarrossa",2006,listado); // NO ANDA COMIENZO
