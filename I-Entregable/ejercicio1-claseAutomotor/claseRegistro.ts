/* Ejercicio 1
Usando la clase Auto: Implementar la clase RegistroAutomotor 
con métodos para consultar por un auto en un 
listado, borrar, actualizar y dar de alta
Partir de la función ya implementada para leer archivos */

import { Auto } from "./claseAuto"; //importe clase auto

export class RegistroAutomotor {
  mostrarListado(listadoAutos: Auto[]): Auto[] {
    return listadoAutos;
  }
  insertarAuto(nuevoAuto: Auto, listadoAutos: Auto[]): Auto[] {
    if (listadoAutos.push(nuevoAuto)) {
      console.log(
        `Se ha añadido ${nuevoAuto.maker} a la base de datos. La base de datos del Registro queda de la siguiente forma:`
      );
      return listadoAutos;
    } else {
      console.log(
        `El libro ${nuevoAuto.maker} no se ha podido añadir a la biblioteca`
      );
      return listadoAutos;
    }
  }
  consultarAuto(maker: string, listadoAutos: Auto[]): any {
    const autoEncontrado = listadoAutos.find((auto) => auto.maker === maker);
    if (autoEncontrado) {
      console.log(`${maker} existe en el Registro.`);
      return autoEncontrado;
    } else {
      console.log(`${maker} NO existe en el Registro.`);
    }
  }
  modificarAuto(maker: string, listadoAutos: Auto[], dato: string): any {
    let autoModificar = this.consultarAuto(maker, listadoAutos);
    if (autoModificar) {
      autoModificar.maker = dato;
      console.log(
        `El auto ${maker} ha sido modificado y ahora se llama ${dato}`
        );
        return listadoAutos;
    } else {
      console.log("El Registro NO se ha podido modificar");
      return listadoAutos;
    }
  }
  eliminarAuto(maker: string, listadoAutos: Auto[]): Auto[] {
    let indexListAutos: number = listadoAutos.findIndex(
      (searchCar) => searchCar.maker == maker
    );
    if (indexListAutos >= 0) {
      listadoAutos.splice(indexListAutos, 1);
      console.log(`Auto eliminado del Registro: ${maker}`);
      return listadoAutos;
    } else {
      console.log(`El auto ${maker} no ha sido eliminado`);
      return listadoAutos;
    }
  }
}