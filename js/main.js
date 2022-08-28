


const DateTime = luxon.DateTime;
const tabla = document.getElementById('tabla');
const listadoString = localStorage.getItem('registros')
let listado = JSON.parse(listadoString) || [];



    listado.forEach(({dia, hora, minuto, operario, maquina, modelo, color, talle, cantidad, estado})=> {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        
        <td>${dia}</td>
        <td>${hora}</td>
        <td>${minuto}</td>
        <td>${operario}</td>
        <td>${maquina}</td>
        <td>${modelo}</td>
        <td>${color}</td>
        <td>${talle}</td>
        <td>${cantidad}</td>
        <td>${estado}</td>
    
        `;
    
    tabla.append(tr);
       
    } )
    
    











// Ingreso------------------------------------------



const ingreso = document.getElementById('form-ingreso');
let operario
let maquina
let horaInicio


const dt = DateTime.now();
console.log( operario, maquina, horaInicio)


operarioString = localStorage.getItem('operario')
operario = JSON.parse(operarioString)
maquinaString = localStorage.getItem('maquina')
maquina = JSON.parse(maquinaString)
  



if (operario==undefined) {
    ingreso.addEventListener('submit', (e)=> {
        e.preventDefault();        
        const formIngreso = (e.target)
        operario = formIngreso[0].value;
        maquina = formIngreso[1].value;
        
        horaInicio = dt.hour;
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
    swal({
        title: "¿Seguro que desea salir?",
        text: "Se restaruraran a cero todos los registros",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Su sesion ha terminado, hasta pronto", {
            icon: "success",
            
          });
            localStorage.clear();
            location.reload();
        } else {
          swal("Puede continuar generando registros");
        }
      });
    
})




// Header ----------------------------------------------

const fechaYHora = document.getElementById('hora');

fechaYHora.innerText = dt.day + "/" + dt.month;



//Modelo 1--------------------------------



let modelos1 = [];
const cargarModelos1 = async () => {
  const response = await fetch('./modelos.json');
  const data = await response.json();  

  modelos1 = data;

  const select1 = document.getElementById('modelo1');
  select1.innerHTML = data.map((modelo1) => `<option value="${modelo1.nombre}">${modelo1.nombre}</option>`);


}

cargarModelos1();



const form1 = document.getElementById('form1');


form1.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formulario1 = (e.target); 
    modelo1 = {
        nombre: formulario1[0].value,
        color: formulario1[1].value,
        tiempo: parseInt(formulario1[2].value)
        
    }
    botonNoOk11.disabled = true;
    botonOk11.disabled = true;
    botonNoOk12.disabled = true;
    botonOk12.disabled = true;
    botonNoOk13.disabled = true;
    botonOk13.disabled = true;
    botonNoOk14.disabled = true;
    botonOk14.disabled = true;
    botonNoOk15.disabled = true;
    botonOk15.disabled = true;
    botonNoOk16.disabled = true;
    botonOk16.disabled = true;
    botonNoOk17.disabled = true;
    botonOk17.disabled = true;

    
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


let modelos2 = [];
const cargarModelos2 = async () => {
  const response = await fetch('./modelos.json');
  const data = await response.json();  

  modelos2 = data;

  const select2 = document.getElementById('modelo2');
  select2.innerHTML = data.map((modelo2) => `<option value="${modelo2.nombre}">${modelo2.nombre}</option>`);


}

cargarModelos2();



const form2 = document.getElementById('form2');


form2.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formulario2 = (e.target); 
    modelo2 = {
        nombre: formulario2[0].value,
        color: formulario2[1].value,
        tiempo: parseInt(formulario2[2].value)
    }
    botonNoOk21.disabled = true;
    botonOk21.disabled = true;
    botonNoOk22.disabled = true;
    botonOk22.disabled = true;
    botonNoOk23.disabled = true;
    botonOk23.disabled = true;
    botonNoOk24.disabled = true;
    botonOk24.disabled = true;
    botonNoOk25.disabled = true;
    botonOk25.disabled = true;
    botonNoOk26.disabled = true;
    botonOk26.disabled = true;
    botonNoOk27.disabled = true;
    botonOk27.disabled = true;

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

let modelos3 = [];
const cargarModelos3 = async () => {
  const response = await fetch('./modelos.json');
  const data = await response.json();  

  modelos3 = data;

  const select3 = document.getElementById('modelo3');
  select3.innerHTML = data.map((modelo3) => `<option value="${modelo3.nombre}">${modelo3.nombre}</option>`);


}

cargarModelos3();



const form3 = document.getElementById('form3');


form3.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formulario3 = (e.target); 
    modelo3 = {
        nombre: formulario3[0].value,
        color: formulario3[1].value,
        tiempo: parseInt(formulario3[2].value)
    }
    botonNoOk31.disabled = true;
    botonOk31.disabled = true;
    botonNoOk32.disabled = true;
    botonOk32.disabled = true;
    botonNoOk33.disabled = true;
    botonOk33.disabled = true;
    botonNoOk34.disabled = true;
    botonOk34.disabled = true;
    botonNoOk35.disabled = true;
    botonOk35.disabled = true;
    botonNoOk36.disabled = true;
    botonOk36.disabled = true;
    botonNoOk37.disabled = true;
    botonOk37.disabled = true;
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

//Modelo 4--------------------------------

let modelos4 = [];
const cargarModelos4 = async () => {
  const response = await fetch('./modelos.json');
  const data = await response.json();  

  modelos4 = data;

  const select4 = document.getElementById('modelo4');
  select4.innerHTML = data.map((modelo4) => `<option value="${modelo4.nombre}">${modelo4.nombre}</option>`);


}

cargarModelos4();



const form4 = document.getElementById('form4');


form4.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formulario4 = (e.target); 
    modelo4 = {
        nombre: formulario4[0].value,
        color: formulario4[1].value,
        tiempo: parseInt(formulario4[2].value)
    }
    botonNoOk41.disabled = true;
    botonOk41.disabled = true;
    botonNoOk42.disabled = true;
    botonOk42.disabled = true;
    botonNoOk43.disabled = true;
    botonOk43.disabled = true;
    botonNoOk44.disabled = true;
    botonOk44.disabled = true;
    botonNoOk45.disabled = true;
    botonOk45.disabled = true;
    botonNoOk46.disabled = true;
    botonOk46.disabled = true;
    botonNoOk47.disabled = true;
    botonOk47.disabled = true;

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











