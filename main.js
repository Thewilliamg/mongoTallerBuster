import { movis } from "./js/model/movis.js";
// import {authors} from "./js/model/authors.js";
let obj;

obj = new movis();
// console.log(await obj.getAll());
console.log(`11. Encontrar la edad promedio de los actores en la base de datos:`,await obj.getAll())
obj.destructor();