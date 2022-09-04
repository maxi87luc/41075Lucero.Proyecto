const eficienciaModal = document.getElementById('eficienciaModal')
const falladoModal = document.getElementById('falladoModal')
const botonInforme = document.getElementById('botonInforme')
let produccion1 = 0;
let produccion2 = 0;
let produccion3 = 0;
let produccion4 = 0;

botonInforme.addEventListener('click', (e)=>{

    //Fallado -----------------------------------
    const registrosFallado = listado.filter((registro)=>{
        return (registro.estado === "fallado")
    })
    
    const registrosOK = listado.filter((registro)=>{
        return (registro.estado === "OK")
    })
    
    falladoModal.textContent = porcentaje(registrosFallado.length, (registrosOK.length + registrosFallado.length))

    //Eficiencia --------------------------------
    const tiempoObjetivo1 = time11 + time12 + time13 + time14 + time15 + time16 + time17
    const tiempoObjetivo2 = time21 + time22 + time23 + time24 + time25 + time26 + time27 
    const tiempoObjetivo3 = time31 + time32 + time33 + time34 + time35 + time36 + time37
    const tiempoObjetivo4 = time41 + time42 + time43 + time44 + time45 + time46 + time47

    const tiempoReal1 = produccion1 * modelo1.tiempo
    
    const tiempoReal2 = produccion2 * modelo2.tiempo
    
    const tiempoReal3 = produccion3 * modelo3.tiempo
    
    const tiempoReal4 = produccion4 * modelo4.tiempo
    
    tiempoObjetivoTotal = tiempoObjetivo1 + tiempoObjetivo2 + tiempoObjetivo3 + tiempoObjetivo4
    tiempoRealTotal = tiempoReal1 + tiempoReal2 + tiempoReal3 + tiempoReal4

    eficienciaModal.textContent = porcentaje(tiempoRealTotal, tiempoObjetivoTotal)
    console.log(tiempoRealTotal, tiempoObjetivoTotal)
    console.log(tiempoReal1, tiempoReal2, tiempoReal3, tiempoReal4)

})

