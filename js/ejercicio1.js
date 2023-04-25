/**
 * Crear un arreglo de objetos que contengan datos de película como:
  - titulo
  - género
  - año
  - sinopsis
 - crear una funcion que permita mostrar en una lista cada película con sus datos. 
 */

class Pelicula {
    constructor(titulo = "titulo por defecto", genero, año, sipnosis){
        this.titulo = titulo; 
        this.genero = genero; 
        this.año = año;
        this.sipnosis = sipnosis; 
    }
    
    listar(){
        for (const key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }
}

let peliculaDeTerror = new Pelicula("el exorsista","terror", 2011,"doloremque doloribus corrupti, reprehenderit magni perferendis repellendus consectetur ut vel quaerat. Quod, nesciunt neque");

console.log(peliculaDeTerror);