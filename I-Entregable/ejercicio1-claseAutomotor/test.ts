import fs from "fs";
import { Auto } from "./claseAuto";

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



const archiveToJson= JSON.stringify(auto_1)
const prueba= fs.writeFileSync("./autos.json",archiveToJson,"utf-8");
console.log(typeof prueba);




 