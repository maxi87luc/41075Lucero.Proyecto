
class Operario {
    constructor(nombre, apellido, puesto) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.puesto = puesto;
    }

}

class Empresa {
    constructor() {
        this.operarios = [];
        this.nomina = 0;
    }
    agregarOperario(nombre, apellido, puesto) {
        let operario = new Operario(nombre, apellido, puesto)
        this.operarios.push(operario)
        
    } 
    calcularCantidadDeOperarios() {
        return this.operarios.length;
    } 
    
}

const empresa = new Empresa();

let nombre 
let apellido
let puesto
let continuar = false

do {
    nombre = prompt("Ingrese nombre del Operario")
    apellido = prompt("Ingrese apellido del Operario")
    puesto = prompt("Ingrese puesto del Operario")
    continuar = prompt("¿Desea finalizar? \n(si/no)") === "no" || "NO";

    empresa.agregarOperario(nombre, apellido, puesto)
} while (continuar)

alert("La nómina actual de la empresa es de " + empresa.calcularCantidadDeOperarios() +" operarios")


