//Funciones------------------------------------------------------




function porcentaje (num1, num2) {
    return ((num1/num2)*100).toFixed(1) + "%"
  }
function crearRegistro (modelo, color, talle, estado) {
    const registro = new Registro (
        fecha.getDate(),
        (fecha.getMonth())+1,
        fecha.getFullYear(),      
        fecha.getHours(),
        fecha.getMinutes(),
        operario,
        maquina,
        modelo,
        color,
        talle,
        1,
        estado   
    )

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
   

}











