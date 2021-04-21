//const Swal = require('sweetalert2')

function validateForm() {
    let nombreProducto = document.getElementById("nombreProducto").value;
    let detalle = document.getElementById("detalle").value;
    let cantidad = document.getElementById("cantidad").value;

    var nombreOk = true
    var detalleOk = true
    var cantidadOk = true
    
    
    if (nombreProducto=='' || nombreProducto.length < 5) {
        nombreOk = false
        document.getElementById("errorNombre").innerText = 'El nombre es obligatorio y debe tener al menos 5 caracteres'
    } else {
        document.getElementById("errorNombre").innerText = '' 
    }
    if (detalle=='' || detalle.length < 20) {
        detalleOk = false
        document.getElementById("errorDetalle").innerText = 'El detalle es obligatorio y debe tener al menos 20 caracteres';
    } else {
        document.getElementById("errorDetalle").innerText = ''
    }
    if (cantidad == 0 ) {
        cantidadOk = false
        document.getElementById("errorCantidad").innerText = 'La cantidad es obligatoria y debe ser un número entero';
    } else {
        document.getElementById("errorCantidad").innerText = ''
    }

}

let imagen=document.getElementById('imagen')
imagen.addEventListener('change', function(){
    let file = this.files[0]
    var imagenOk = true
    console.log(file)
    if (/.(gif|jpeg|jpg|png)$/i.test(file.type)) {
        document.getElementById("errorImagen").innerText = '';
    }else {
        imagenOk = false
        document.getElementById("errorImagen").innerText = 'Los formatos de imagen admitidos son: .jpeg .jpg .gif .png'
    }
})

function myAlert(e) {
    if ( nombreOk && detalleOk && cantidadOk && imagenOk){
        Swal.fire(
            {icon: 'success',
            title: 'Excelente!',
            text:'Producto cargado exitosamente!',
            showConfirmButton: false,
            timer: 2000}
          ).then(()=>{
            location.reload()
          })
    } else {
        e.preventDefault()
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal!',
          })
    }
}




/*function formSubmit(event){
    const delay = 5000;
    setTimeout(formSubmit,delay)
    event.preventDefault()
    Swal.fire(
        'Excelente!',
        'Producto cargado exitosamente!',
        'success'
      )
}*/




