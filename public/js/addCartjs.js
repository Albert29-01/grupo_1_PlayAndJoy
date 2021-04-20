let cart = document.querySelector('button.addCart')
cart.addEventListener('click',function(){

    /*------------Capturo los datos del producto---------------*/
    let nombreProducto = document.querySelector('#nombre').innerText
    let precioProducto = document.querySelector('#precio').innerText
    let cantProducto = document.querySelector('#cantidad').value

    if (cantProducto == 0) {
        cantProducto = 1
    }

    let producto = {
        nombreProducto,
        precioProducto,
        cantProducto
    }

    if( localStorage.length == 0){
        let carrito = []
        carrito.push(producto)  
        localStorage.setItem('carrito',JSON.stringify(carrito)) 
        console.log(carrito)
    } else {
        let carrito = JSON.parse(localStorage.carrito)
        carrito.push(producto)  
        localStorage.setItem('carrito',JSON.stringify(carrito)) 
        console.log(carrito)
    }
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: nombreProducto+' agregado al carrito',
        showConfirmButton: false,
        timer: 3000
      })
})


