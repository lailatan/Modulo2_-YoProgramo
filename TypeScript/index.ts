// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Persona{
    readonly nombre:string;
    readonly apellido:string;
    private anioNac:number;

    constructor(nombre:string, apellido:string, anioNac:number) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.anioNac=anioNac;
    }
    public toString():string {
        return this.nombre + " " + this.apellido + " tiene aproximadanebte "+ 
        this.edad(2022) +" años";
    }
    public edad(anioActual:number):number{
        return (anioActual-this.anioNac);
    }
  }
  
  let pepe:Persona;
  pepe=new Persona("Jose", "Lopez",2000);
  console.log(pepe.toString());



