function validateSus() {
    let tipoSuscripcion = document.getElementById("tipoSuscripcion").value;
    let detalle = document.getElementById("detalle").value;
   
    
    if (tipoSuscripcion=='' || tipoSuscripcion.length < 5) {
        document.getElementById("errorNombre").innerText = 'El nombre es obligatorio y debe tener al menos 5 caracteres'
    } else {
        document.getElementById("errorNombre").innerText = '' 
    }
    if (detalle=='' || detalle.length < 20) {
        document.getElementById("errorDetalle").innerText = 'El detalle es obligatorio y debe tener al menos 20 caracteres';
    } else {
        document.getElementById("errorDetalle").innerText = ''
    }
}





