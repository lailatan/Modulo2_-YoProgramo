// Import stylesheets
import './style.css';
// Write TypeScript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
class Persona {
    constructor(nombre, apellido, anioNac) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.anioNac = anioNac;
    }
    toString() {
        return this.nombre + " " + this.apellido + " tiene aproximadanebte " +
            this.edad(2022) + " años";
    }
    edad(anioActual) {
        return (anioActual - this.anioNac);
    }
}
let pepe;
pepe = new Persona("Jose", "Lopez", 2000);
console.log(pepe.toString());
