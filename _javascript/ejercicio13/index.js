// Strings

let str = "Hola soy un string";

// Obtener partes de cadenas de caracteres
// slice() substring() substr()
let slice_str = str.slice(5, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Gorka";
let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles";

let replace_str = cadena.replace("Gorka", "Gise");
console.log(replace_str);

// Al utilizar string solo reemplaza la primera
let reemplazar = texto_largo.replace("los", "cinco");
console.log(reemplazar);

// al utilizar la expresión regular /g (global), reemplaza todas las instancias
let replace_all_str = texto_largo.replace(/los/g, "cinco");
console.log(replace_all_str);

let mayuscula = cadena.toUpperCase();
console.log(mayuscula);
let minuscula = cadena.toLowerCase();
console.log(minuscula);

// Formas de concatenar dos cadenas de carcateres
let str_1 = "Hola soy la primera cadena.";
let str_2 = "Y yo soy la segunda cadena";
let concatenar = str_1.concat(" ",str_2);
console.log(concatenar);

// Eliminar espacios al inicio y al final
let str_3 = "    Soy un string con espacios al final.           ";
console.log(str_3.length);
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posicion
let str_4 = "Hola soy el string numero 4";
console.log(str_4.charAt(5));
console.log(str_4[5]);

// Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Gorka y me gusta el surf. Mi nombre es Gorka y mi apellido es Villar";
console.log(str_5.indexOf("Gorka"));
console.log(str_5.indexOf("Albina"));
console.log(str_5.lastIndexOf("Gorka"));

// Match()
console.log(texto_largo.match(/no/g));

// Existe la palabra dentro del texto?
console.log(texto_largo.includes("terremoto"));

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito"));

// Saber si un texto termina con una palabra
console.log(texto_largo.endsWith("árboles"));