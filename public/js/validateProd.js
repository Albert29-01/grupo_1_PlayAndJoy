function validateProd() {
    let nombreProducto = document.getElementById("nombreProducto").value;
    let detalle = document.getElementById("detalle").value;
    let cantidad = document.getElementById("cantidad").value;
  
    
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

let imagen=document.getElementById('imagen')
imagen.addEventListener('change', function(){
    let file = this.files[0]
    console.log(file)
    if (/.(gif|jpeg|jpg|png)$/i.test(file.type)) {
        document.getElementById("errorImagen").innerText = '';
    }else {
        document.getElementById("errorImagen").innerText = 'Los formatos de imagen admitidos son: .jpeg .jpg .gif .png'
    }
})





