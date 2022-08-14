//Funciones------------------------------------------------------




function porcentaje (num1, num2) {
    return ((num1/num2)*100).toFixed(1) + "%"
  }
function crearRegistro (modelo, color, talle, estado) {
    const dt = DateTime.now();
    const registro = new Registro (
        

        dt.toLocaleString(DateTime.DATE_SHORT),
        dt.hour,
        dt.minute,
        operario,
        maquina,
        modelo,
        color,
        talle,
        1,
        estado   
    )
    if (registro.estado == "OK"){
        Toastify({
            text: registro.modelo + " " + registro.color + " " + registro.talle + " " + registro.estado,
            duration: 3000,
            gravity: top,
            position: top,
            style: {
                background: "linear-gradient(to right, #198754, #95C93E)",
              },
        }).showToast();
    } else {
        Toastify({
            text: registro.modelo + " " + registro.color + " " + registro.talle + " " + registro.estado,
            duration: 3000,
            gravity: top,
            position: top,
            style: {
                background: "linear-gradient(to right, #DC3545, #FFC271)",
              },
        }).showToast();

    }
    

    const listadoString = localStorage.getItem('registros')
    if (listadoString) {
        listado = JSON.parse(listadoString)

    }
    


    listado.push(registro)
    console.log(listado)
    localStorage.setItem('registros', JSON.stringify(listado))



    
    
    
    const tabla = document.getElementById('tabla');
    const tr = document.createElement('tr');

    tr.innerHTML = `       
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
   

}











