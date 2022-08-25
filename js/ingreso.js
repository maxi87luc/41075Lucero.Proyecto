
const ingreso = document.getElementById('form-ingreso');
const DateTime = luxon.DateTime;
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



