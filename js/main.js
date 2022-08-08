



const tabla = document.getElementById('tabla');
const listadoString = localStorage.getItem('registros')
console.log(listadoString)



if (listadoString!=null) {  
    listado = JSON.parse(listadoString)
    listado.forEach((registro)=> {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${registro.año}</td>
        <td>${registro.mes}</td>
        <td>${registro.dia}</td>
        <td>${registro.hora}</td>
        <td>${registro.minuto}</td>
        <td>${registro.operario}</td>
        <td>${registro.maquina}</td>
        <td>${registro.modelo}</td>
        <td>${registro.color}</td>
        <td>${registro.talle}</td>
        <td>${registro.cantidad}</td>
        <td>${registro.estado}</td>
    
        `;
    
    tabla.append(tr);
       
    } )
    
    



} 







// Ingreso------------------------------------------



const ingreso = document.getElementById('form-ingreso');
let operario
let maquina
let horaInicio
const fecha = new Date();
console.log( operario, maquina, horaInicio)
operarioString = localStorage.getItem('operario')
operario = JSON.parse(operarioString)
maquinaString = localStorage.getItem('maquina')
maquina = JSON.parse(maquinaString)
horaInicioString = localStorage.getItem('horaInicio')
horaInicio = JSON.parse(horaInicioString)  



if (operario==undefined) {
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
        localStorage.setItem('operario', JSON.stringify(operario))
        localStorage.setItem('maquina', JSON.stringify(maquina))
        localStorage.setItem('horaInicio', JSON.stringify(horaInicio))
       


    })
} else {
    
    const datosOperario = document.getElementById('pantallaInicio');
    datosOperario.className = 'datos-operario d-none' ; 
    const h1maquina = document.getElementById('h1maquina');
    h1maquina.innerText = maquina;
    const h2operario = document.getElementById('h2operario');
    h2operario.innerText = operario; 


}

//Cierre de Sesion -----------------------------------

const cerrarSesion = document.getElementById('cerrarSesion');
cerrarSesion.addEventListener('click', (e)=>{
    localStorage.clear();
    location.reload();
})




// Header ----------------------------------------------

const fechaYHora = document.getElementById('hora');
const dia = new Date();
fechaYHora.innerText = dia.getDate() + "/" + dia.getMonth();



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
    crearRegistro(modelo1.nombre, modelo1.color, 35, "fallado")    
});   

   

botonOk11.addEventListener('click', () => {
    crearRegistro(modelo1.nombre, modelo1.color, 35, "OK") 
});

//Talle 2
const botonNoOk12 = document.getElementById('botonNoOK12');
const botonOk12 = document.getElementById('botonOK12');



botonNoOk12.addEventListener('click', () => {   
    crearRegistro(modelo1.nombre, modelo1.color, 36, "fallado")    
});   

   

botonOk12.addEventListener('click', () => {
    crearRegistro(modelo1.nombre, modelo1.color, 36, "OK") 
});

//Talle 3
const botonNoOk13 = document.getElementById('botonNoOK13');
const botonOk13 = document.getElementById('botonOK13');



botonNoOk13.addEventListener('click', () => {   
    crearRegistro(modelo1.nombre, modelo1.color, 37, "fallado")    
});   

   

botonOk13.addEventListener('click', () => {
    crearRegistro(modelo1.nombre, modelo1.color, 37, "OK") 
});

//Talle 4
const botonNoOk14 = document.getElementById('botonNoOK14');
const botonOk14 = document.getElementById('botonOK14');



botonNoOk14.addEventListener('click', () => {   
    crearRegistro(modelo1.nombre, modelo1.color, 38, "fallado")    
});   

   

botonOk14.addEventListener('click', () => {
    crearRegistro(modelo1.nombre, modelo1.color, 38, "OK") 
});

//Talle 5
const botonNoOk15 = document.getElementById('botonNoOK15');
const botonOk15 = document.getElementById('botonOK15');



botonNoOk15.addEventListener('click', () => {   
    crearRegistro(modelo1.nombre, modelo1.color, 39, "fallado")    
});   

   

botonOk15.addEventListener('click', () => {
    crearRegistro(modelo1.nombre, modelo1.color, 39, "OK") 
});

//Talle 6
const botonNoOk16 = document.getElementById('botonNoOK16');
const botonOk16 = document.getElementById('botonOK16');



botonNoOk16.addEventListener('click', () => {   
    crearRegistro(modelo1.nombre, modelo1.color, 40, "fallado")    
});   

   

botonOk16.addEventListener('click', () => {
    crearRegistro(modelo1.nombre, modelo1.color, 40, "OK") 
});

//Talle 7
const botonNoOk17 = document.getElementById('botonNoOK17');
const botonOk17 = document.getElementById('botonOK17');



botonNoOk17.addEventListener('click', () => {   
    crearRegistro(modelo1.nombre, modelo1.color, 40, "fallado")    
});   

   

botonOk17.addEventListener('click', () => {
    crearRegistro(modelo1.nombre, modelo1.color, 40, "OK") 
});


//Modelo 2--------------------------------

let modelo2



const form2 = document.getElementById('form2');


form2.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formulario2 = (e.target); 
    modelo2 = {
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
    crearRegistro(modelo2.nombre, modelo2.color, 35, "fallado")    
});   

   

botonOk21.addEventListener('click', () => {
    crearRegistro(modelo2.nombre, modelo2.color, 35, "OK") 
});

//Talle 2
const botonNoOk22 = document.getElementById('botonNoOK22');
const botonOk22 = document.getElementById('botonOK22');



botonNoOk22.addEventListener('click', () => {   
    crearRegistro(modelo2.nombre, modelo2.color, 36, "fallado")    
});   

   

botonOk22.addEventListener('click', () => {
    crearRegistro(modelo2.nombre, modelo2.color, 36, "OK") 
});

//Talle 3
const botonNoOk23 = document.getElementById('botonNoOK23');
const botonOk23 = document.getElementById('botonOK23');



botonNoOk23.addEventListener('click', () => {   
    crearRegistro(modelo2.nombre, modelo2.color, 37, "fallado")    
});   

   
botonOk23.addEventListener('click', () => {
    crearRegistro(modelo2.nombre, modelo2.color, 37, "OK") 
});

//Talle 4
const botonNoOk24 = document.getElementById('botonNoOK24');
const botonOk24 = document.getElementById('botonOK24');



botonNoOk24.addEventListener('click', () => {   
    crearRegistro(modelo2.nombre, modelo2.color, 38, "fallado")    
});   

   

botonOk24.addEventListener('click', () => {
    crearRegistro(modelo2.nombre, modelo2.color, 38, "OK") 
});

//Talle 5
const botonNoOk25 = document.getElementById('botonNoOK25');
const botonOk25 = document.getElementById('botonOK25');



botonNoOk25.addEventListener('click', () => {   
    crearRegistro(modelo2.nombre, modelo2.color, 39, "fallado")    
});   

   

botonOk25.addEventListener('click', () => {
    crearRegistro(modelo2.nombre, modelo2.color, 39, "OK") 
});

//Talle 6
const botonNoOk26 = document.getElementById('botonNoOK26');
const botonOk26 = document.getElementById('botonOK26');



botonNoOk26.addEventListener('click', () => {   
    crearRegistro(modelo2.nombre, modelo2.color, 40, "fallado")    
});   

   

botonOk26.addEventListener('click', () => {
    crearRegistro(modelo2.nombre, modelo2.color, 40, "OK") 
});

//Talle 7
const botonNoOk27 = document.getElementById('botonNoOK27');
const botonOk27 = document.getElementById('botonOK27');



botonNoOk27.addEventListener('click', () => {   
    crearRegistro(modelo2.nombre, modelo2.color, 40, "fallado")    
});   

   

botonOk27.addEventListener('click', () => {
    crearRegistro(modelo2.nombre, modelo2.color, 40, "OK") 
});


//Modelo 3--------------------------------

let modelo3



const form3 = document.getElementById('form3');


form3.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formulario3 = (e.target); 
    modelo3 = {
        nombre: formulario3[0].value,
        color: formulario3[1].value,
        tiempo: parseInt(formulario3[2].value)
    }

    console.log(modelo3)
})



//Talle 1
const botonNoOk31 = document.getElementById('botonNoOK31');
const botonOk31 = document.getElementById('botonOK31');



botonNoOk31.addEventListener('click', () => {   
    crearRegistro(modelo3.nombre, modelo3.color, 35, "fallado")    
});   

   

botonOK31.addEventListener('click', () => {
    crearRegistro(modelo3.nombre, modelo3.color, 35, "OK") 
});

//Talle 2
const botonNoOk32 = document.getElementById('botonNoOK32');
const botonOk32 = document.getElementById('botonOK32');



botonNoOk32.addEventListener('click', () => {   
    crearRegistro(modelo3.nombre, modelo3.color, 36, "fallado")    
});   

   

botonOk32.addEventListener('click', () => {
    crearRegistro(modelo3.nombre, modelo3.color, 36, "OK") 
});

//Talle 3
const botonNoOk33 = document.getElementById('botonNoOK33');
const botonOk33 = document.getElementById('botonOK33');



botonNoOk33.addEventListener('click', () => {   
    crearRegistro(modelo3.nombre, modelo3.color, 37, "fallado")    
});   

   
botonOk33.addEventListener('click', () => {
    crearRegistro(modelo3.nombre, modelo3.color, 37, "OK") 
});

//Talle 4
const botonNoOk34 = document.getElementById('botonNoOK34');
const botonOk34 = document.getElementById('botonOK34');



botonNoOk34.addEventListener('click', () => {   
    crearRegistro(modelo3.nombre, modelo3.color, 38, "fallado")    
});   

   

botonOk34.addEventListener('click', () => {
    crearRegistro(modelo3.nombre, modelo3.color, 38, "OK") 
});

//Talle 5
const botonNoOk35 = document.getElementById('botonNoOK35');
const botonOk35 = document.getElementById('botonOK35');



botonNoOk35.addEventListener('click', () => {   
    crearRegistro(modelo3.nombre, modelo3.color, 39, "fallado")    
});   

   

botonOk35.addEventListener('click', () => {
    crearRegistro(modelo3.nombre, modelo3.color, 39, "OK") 
});

//Talle 6
const botonNoOk36 = document.getElementById('botonNoOK36');
const botonOk36 = document.getElementById('botonOK36');



botonNoOk36.addEventListener('click', () => {   
    crearRegistro(modelo3.nombre, modelo3.color, 40, "fallado")    
});   

   

botonOk36.addEventListener('click', () => {
    crearRegistro(modelo3.nombre, modelo3.color, 40, "OK") 
});

//Talle 7
const botonNoOk37 = document.getElementById('botonNoOK37');
const botonOk37 = document.getElementById('botonOK37');



botonNoOk37.addEventListener('click', () => {   
    crearRegistro(modelo3.nombre, modelo3.color, 40, "fallado")    
});   

   

botonOk37.addEventListener('click', () => {
    crearRegistro(modelo3.nombre, modelo3.color, 40, "OK") 
});

//Modelo 3--------------------------------

let modelo4



const form4 = document.getElementById('form4');


form4.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formulario4 = (e.target); 
    modelo4 = {
        nombre: formulario4[0].value,
        color: formulario4[1].value,
        tiempo: parseInt(formulario4[2].value)
    }

    console.log(modelo4)
})



//Talle 1
const botonNoOk41 = document.getElementById('botonNoOK41');
const botonOk41 = document.getElementById('botonOK41');



botonNoOk41.addEventListener('click', () => {   
    crearRegistro(modelo4.nombre, modelo4.color, 35, "fallado")    
});   

   

botonOK41.addEventListener('click', () => {
    crearRegistro(modelo4.nombre, modelo4.color, 35, "OK") 
});

//Talle 2
const botonNoOk42 = document.getElementById('botonNoOK42');
const botonOk42 = document.getElementById('botonOK42');



botonNoOk42.addEventListener('click', () => {   
    crearRegistro(modelo4.nombre, modelo4.color, 36, "fallado")    
});   

   

botonOk42.addEventListener('click', () => {
    crearRegistro(modelo4.nombre, modelo4.color, 36, "OK") 
});

//Talle 3
const botonNoOk43 = document.getElementById('botonNoOK43');
const botonOk43 = document.getElementById('botonOK43');



botonNoOk43.addEventListener('click', () => {   
    crearRegistro(modelo4.nombre, modelo4.color, 37, "fallado")    
});   

   
botonOk43.addEventListener('click', () => {
    crearRegistro(modelo4.nombre, modelo4.color, 37, "OK") 
});

//Talle 4
const botonNoOk44 = document.getElementById('botonNoOK44');
const botonOk44 = document.getElementById('botonOK44');



botonNoOk44.addEventListener('click', () => {   
    crearRegistro(modelo4.nombre, modelo4.color, 38, "fallado")    
});   

   

botonOk44.addEventListener('click', () => {
    crearRegistro(modelo4.nombre, modelo4.color, 38, "OK") 
});

//Talle 5
const botonNoOk45 = document.getElementById('botonNoOK45');
const botonOk45 = document.getElementById('botonOK45');



botonNoOk45.addEventListener('click', () => {   
    crearRegistro(modelo4.nombre, modelo4.color, 39, "fallado")    
});   

   

botonOk45.addEventListener('click', () => {
    crearRegistro(modelo4.nombre, modelo4.color, 39, "OK") 
});

//Talle 6
const botonNoOk46 = document.getElementById('botonNoOK46');
const botonOk46 = document.getElementById('botonOK46');



botonNoOk46.addEventListener('click', () => {   
    crearRegistro(modelo4.nombre, modelo4.color, 40, "fallado")    
});   

   

botonOk46.addEventListener('click', () => {
    crearRegistro(modelo4.nombre, modelo4.color, 40, "OK") 
});

//Talle 7
const botonNoOk47 = document.getElementById('botonNoOK47');
const botonOk47 = document.getElementById('botonOK47');



botonNoOk47.addEventListener('click', () => {   
    crearRegistro(modelo4.nombre, modelo4.color, 40, "fallado")    
});   

   

botonOk47.addEventListener('click', () => {
    crearRegistro(modelo4.nombre, modelo4.color, 40, "OK") 
});











