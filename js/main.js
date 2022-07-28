

class Modelo {
    constructor (nombre, color, talle, tiempo) {
    this.nombre = nombre;
    this.color = color;
    this.talle = talle;
    this.tiempo = parseInt(tiempo);

    }

    registrar() {
        let tiempoTrabajado = 8.5*60*60
        let entrada
        let produccion=0
        let fallado=0
        let burbujas=0
        let rebaba=0
        let rota=0
        let manchada=0
        let agarrada=0
        do {
            entrada = prompt(this.nombre + " " + this.color + " " + this.talle  + "\n\n" + "Ingrese ok para un par bueno \n Ingrese b para burbujas \n Ingrese r para Rebaba  Abierta \n Ingrese t para suela rota \n Ingrese m para manchada \n Ingrese a para Agarrada")
            if(entrada == "fin") {              
                
            
                    
                
                alert("Resumen: \n"+"Pares OK: "+(produccion-fallado) +"\n" +"Burbujas: "+burbujas +"\n"+"Rebaba Abierta: "+rebaba +"\n"+"Rota: "+rota +"\n"+"Manchada: "+manchada +"\n"+"Agarrada: "+agarrada +"\n");
                alert("Tuvo un fallado del "+ porcentaje(fallado, produccion));
                
                alert("Su eficiencia fue de "+ porcentaje(this.tiempo*produccion, tiempoTrabajado ));                
                alert("La distribución de su fallado fue: \n"+"Burbujas: "+burbujas/(burbujas+rebaba+rota+manchada+agarrada)*100+"%\n"+"Rebaba Abierta: "+rebaba/(burbujas+rebaba+rota+manchada+agarrada)*100+"%\n"+"Rota: "+rota/(burbujas+rebaba+rota+manchada+agarrada)*100+"%\n"+"Manchada: "+manchada/(burbujas+rebaba+rota+manchada+agarrada)*100+"%\n"+"Agarrada: "+agarrada/(burbujas+rebaba+rota+manchada+agarrada)*100+"%\n")  ;   
            
                
            } else if(entrada=="ok" || entrada=="b" || entrada=="r" ||   entrada=="t" || entrada=="m" || entrada=="a"){
                produccion++        
            }  else {
                alert("Ingrese un valor valido")

            }  
        
            if (entrada=="b" || entrada=="r" ||   entrada=="t" || entrada=="m" || entrada=="a"){
                fallado++            
            } 
            if (entrada=="b") {
                burbujas++
            } else if (entrada=="r") {
                rebaba++
            } else if (entrada=="t") {
                rota++
            } else if (entrada=="m") {
                manchada++
            } else if (entrada=="a") {
                agarrada++
            }        
           
        
    

        }   while (entrada != "fin");
        

    }   

        


}


function porcentaje (num1, num2) {
    return (num1/num2)*100 + "%"
}


const nombre = prompt('Ingrese el nombre del modelo');
const color  = prompt('Ingrese el color');
const talle  = prompt('Ingrese el talle');
const tiempo = prompt('Ingrese el tiempo en segundos');
const modelo = new Modelo(nombre, color, talle, tiempo);

   
modelo.registrar();
    




 

    



    
     
        
        
       
        
        
    






