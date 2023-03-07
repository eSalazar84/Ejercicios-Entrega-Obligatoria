import fs from "fs";
import { Auto } from "./claseAuto";
import { RegistroAutomotor } from "./claseRegistro";

//Trabajando con la clase Auto

const auto_1: Auto = new Auto(`Peugeot`, `206`, 2012);
const auto_2: Auto = new Auto(`Ford`, `Ecosport`, 2015);
const auto_3: Auto = new Auto(`Chevrolet`, `Corsa`, 2020);
const auto_4: Auto = new Auto(`Fiat`, `Palio`, 2000);
const auto_5: Auto = new Auto(`Citroen`, `Xara`);
const auto_6: Auto = new Auto(`Wolkswagen`, `Gol`, 2010);
const auto_7: Auto = new Auto(`Ferrari`, `Testarrossa`, 2023);
const auto_8: Auto = new Auto(`Peugeot`,`206`,2012);
const auto_9:Auto=new Auto(`Ford`,`Ecosport`, 2023);
const auto_10:Auto=new Auto(`Ford`,`Palio`);

const listadoClaseAutos=[auto_1,auto_2,auto_3,auto_4,auto_5,auto_6,auto_7,auto_8,auto_9,auto_10];

const archiveToJson= JSON.stringify(listadoClaseAutos);
fs.writeFileSync("./autos.json",archiveToJson,"utf-8");

/* 

----------------------Trabajando con la clase Registro Automotor--------------

*/



const listadoClaseAutosJson = fs.readFileSync("./autos.json","utf8");
const listadoClaseAutosParce=JSON.parse(listadoClaseAutosJson);

const registroBenitoJuarez:RegistroAutomotor=new RegistroAutomotor();

//El metodo muestra el listado de Autos
console.table(registroBenitoJuarez.mostrarListado(listadoClaseAutosParce))

//Este metodo agrega un nuevo auto al listado
const auto_11: Auto=new Auto(`Renault`,`Clio`,2010);
console.table(registroBenitoJuarez.insertarAuto(auto_11,listadoClaseAutosParce));

//Metodo para consultar un auto en el listado
console.table(registroBenitoJuarez.consultarAuto(`Ferrari`,listadoClaseAutosParce));

//Metodo para modificar un auto del listado
registroBenitoJuarez.modificarAuto(`Fiat`,listadoClaseAutosParce,`-Fiat-`);
console.table(registroBenitoJuarez.modificarAuto(`fiat`,listadoClaseAutosParce,`-Fiat-`));

//Metodo para eliminar un auto del listado
console.table(registroBenitoJuarez.eliminarAuto(`Fiat`,listadoClaseAutos));