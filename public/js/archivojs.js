function myFunction() {
    var nombreProducto = document.getElementById("nombreProducto").value;
    var detalle = document.getElementById("detalle").value;
    var cantidad = document.getElementById("cantidad").value;
    
    
    if (nombreProducto=='' || nombreProducto.length < 5) {
        document.getElementById("errorNombre").innerText = 'El nombre es obligatorio y debe tener al menos 5 caracteres'
    } else {
        document.getElementById("errorNombre").innerText = '' 
    }
    if (detalle=='' || detalle.length < 20) {
        document.getElementById("errorDetalle").innerText = 'El detalle es obligatorio y debe tener al menos 20 caracteres';
    } else {
        document.getElementById("errorDetalle").innerText = ''
    }
    if (cantidad == 0 ) {
        document.getElementById("errorCantidad").innerText = 'La cantidad es obligatoria y debe ser un número entero';
    } else {
        document.getElementById("errorCantidad").innerText = ''
    }
}

/*var formulario=document.querySelector('form')
formulario.addEventListener('submit', function(event){
    var image = document.getElementById('imagen').value
    if (!(/\.(jpg|png|jpeg|gif)$/i).test(image)) {
        document.getElementById("errorImagen").innerText = '';
    }else {
        event.preventDefault()
        
        document.getElementById("errorImagen").innerText = 'El archivo a adjuntar no es una imagen' */  //no funciona
    }
})







