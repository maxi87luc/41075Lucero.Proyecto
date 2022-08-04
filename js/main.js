// Ingreso------------------------------------------

const ingreso = document.getElementById('form-ingreso');
let operario
let maquina
let horaInicio
const fecha = new Date();



ingreso.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    const formIngreso = (e.target)
    operario = formIngreso[0].value;
    maquina = formIngreso[1].value;
    let hora = new Date();
    horaInicio = hora;
    const datosOperario = document.getElementById('pantallaInicio');
    datosOperario.className = 'datos-operario d-none' ; 
    const h1maquina = document.getElementById('h1maquina');
    h1maquina.innerText = maquina;
    const h2operario = document.getElementById('h2operario');
    h2operario.innerText = operario;



})

console.log(operario)

// Header ----------------------------------------------

const fechaYHora = document.getElementById('hora');
const dia = new Date();
fechaYHora.innerText = dia.getDate() + "/" + dia.getMonth();








// Constructor--------------------------------------------






class Registro {
    constructor(año, mes, dia, hora, minuto, operario, maquina, modelo, color, talle, cantidad, estado){
        
        
        this.año = año;
        this.mes = mes;
        this.dia = dia;
        this.hora = hora;
        this.minuto = minuto;
        this.operario = operario;
        this.maquina = maquina;
        this.modelo = modelo;
        this.color = color;
        this.talle = talle;
        this.cantidad = parseInt(cantidad);
        this.estado = estado;      
        


    }
   
    
}

//Listado-------------------------------------------------------- 

const listado = [];




//Funciones------------------------------------------------------



function porcentaje (num1, num2) {
    return ((num1/num2)*100).toFixed(1) + "%"
  }
function crearRegistro (modelo, color, talle, estado) {
    const registro = new Registro (
        fecha.getFullYear(),
        fecha.getMonth(),
        fecha.getDate(),
        fecha.getHours(),
        fecha.getMinutes(),
        operario,
        maquina,
        modelo1.nombre,
        modelo1.color,
        talle,
        1,
        estado   
    )
    listado.push(registro)
    console.log(listado)
    const tabla = document.getElementById('tabla');
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${registro.año}</td>
        <td>${registro.mes}</td>
        <td>${registro.dia}</td>
        <td>${registro.hora}</td>
        <td>${registro.minutos}</td>
        <td>${registro.operario}</td>
        <td>${registro.maquina}</td>
        <td>${registro.modelo}</td>
        <td>${registro.talle}</td>
        <td>${registro.cantidad}</td>
        <td>${registro.estado}</td>

    `;

    tabla.append(tr);
   

}










//Modelo 1--------------------------------

let modelo1



const form1 = document.getElementById('form1');


form1.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formulario1 = (e.target); 
    modelo1 = {
        nombre: formulario1[0].value,
        color: formulario1[1].value,
        tiempo: parseInt(formulario1[2].value)
    }

    console.log(modelo1)
})



//Talle 1
const botonNoOk11 = document.getElementById('botonNoOK11');
const botonOk11 = document.getElementById('botonOK11');



botonNoOk11.addEventListener('click', () => {   
    crearRegistro(35, "fallado")    
});   

   

botonOk11.addEventListener('click', () => {
    crearRegistro(35, "OK") 
});

//Talle 2
const botonNoOk12 = document.getElementById('botonNoOK12');
const botonOk12 = document.getElementById('botonOK12');



botonNoOk12.addEventListener('click', () => {   
    crearRegistro(36, "fallado")    
});   

   

botonOk12.addEventListener('click', () => {
    crearRegistro(36, "OK") 
});

//Talle 3
const botonNoOk13 = document.getElementById('botonNoOK13');
const botonOk13 = document.getElementById('botonOK13');



botonNoOk13.addEventListener('click', () => {   
    crearRegistro(37, "fallado")    
});   

   

botonOk13.addEventListener('click', () => {
    crearRegistro(37, "OK") 
});

//Talle 4
const botonNoOk14 = document.getElementById('botonNoOK14');
const botonOk14 = document.getElementById('botonOK14');



botonNoOk14.addEventListener('click', () => {   
    crearRegistro(38, "fallado")    
});   

   

botonOk14.addEventListener('click', () => {
    crearRegistro(38, "OK") 
});

//Talle 5
const botonNoOk15 = document.getElementById('botonNoOK15');
const botonOk15 = document.getElementById('botonOK15');



botonNoOk15.addEventListener('click', () => {   
    crearRegistro(39, "fallado")    
});   

   

botonOk15.addEventListener('click', () => {
    crearRegistro(39, "OK") 
});

//Talle 6
const botonNoOk16 = document.getElementById('botonNoOK17');
const botonOk16 = document.getElementById('botonOK17');



botonNoOk16.addEventListener('click', () => {   
    crearRegistro(40, "fallado")    
});   

   

botonOk16.addEventListener('click', () => {
    crearRegistro(40, "OK") 
});

//Talle 7
const botonNoOk17 = document.getElementById('botonNoOK17');
const botonOk17 = document.getElementById('botonOK17');



botonNoOk17.addEventListener('click', () => {   
    crearRegistro(41, "fallado")    
});   

   

botonOk17.addEventListener('click', () => {
    crearRegistro(41, "OK") 
});


//Modelo 2--------------------------------

let modelo2


const form2 = document.getElementById('form2');


form2.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formulario2 = (e.target); 
    modelo1 = {
        nombre: formulario2[0].value,
        color: formulario2[1].value,
        tiempo: parseInt(formulario2[2].value)
    }

    console.log(modelo2)
})



//Talle 1
const botonNoOk21 = document.getElementById('botonNoOK21');
const botonOk21 = document.getElementById('botonOK21');



botonNoOk21.addEventListener('click', () => {   
    crearRegistro(35, "fallado")    
});   

   

botonOk21.addEventListener('click', () => {
    crearRegistro(35, "OK") 
});

//Talle 2
const botonNoOk22 = document.getElementById('botonNoOK22');
const botonOk22 = document.getElementById('botonOK22');



botonNoOk22.addEventListener('click', () => {   
    crearRegistro(36, "fallado")    
});   

   

botonOk22.addEventListener('click', () => {
    crearRegistro(36, "OK") 
});

//Talle 3
const botonNoOk23 = document.getElementById('botonNoOK23');
const botonOk23 = document.getElementById('botonOK23');



botonNoOk23.addEventListener('click', () => {   
    crearRegistro(37, "fallado")    
});   

   

botonOk23.addEventListener('click', () => {
    crearRegistro(37, "OK") 
});

//Talle 4
const botonNoOk24 = document.getElementById('botonNoOK24');
const botonOk24 = document.getElementById('botonOK24');



botonNoOk24.addEventListener('click', () => {   
    crearRegistro(38, "fallado")    
});   

   

botonOk24.addEventListener('click', () => {
    crearRegistro(38, "OK") 
});

//Talle 5
const botonNoOk25 = document.getElementById('botonNoOK25');
const botonOk25 = document.getElementById('botonOK25');



botonNoOk25.addEventListener('click', () => {   
    crearRegistro(39, "fallado")    
});   

   

botonOk25.addEventListener('click', () => {
    crearRegistro(39, "OK") 
});

//Talle 6
const botonNoOk26 = document.getElementById('botonNoOK26');
const botonOk26 = document.getElementById('botonOK26');



botonNoOk26.addEventListener('click', () => {   
    crearRegistro(40, "fallado")    
});   

   

botonOk26.addEventListener('click', () => {
    crearRegistro(40, "OK") 
});

//Talle 7
const botonNoOk27 = document.getElementById('botonNoOK27');
const botonOk27 = document.getElementById('botonOK27');



botonNoOk27.addEventListener('click', () => {   
    crearRegistro(41, "fallado")    
});   

   

botonOk27.addEventListener('click', () => {
    crearRegistro(41, "OK") 
});
    
    


