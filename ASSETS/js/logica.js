function mostrarFecha() {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1; 
    var anio = fecha.getFullYear();
    
       var fechaFormateada = ('0' + dia).slice(-2) + '/' + ('0' + mes).slice(-2) + '/' + anio;
    
   
    var liFecha = document.getElementById("fecha");
    
       liFecha.innerHTML = fechaFormateada;
  }
  
   mostrarFecha();
  