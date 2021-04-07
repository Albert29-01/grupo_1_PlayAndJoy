let cart = document.querySelector('button.addCart')
cart.addEventListener('click',function(){
    /*-------Capturar los datos del producto--------*/
    let nombreProducto = document.querySelector('#nombre').innerText
    let precioProducto = document.querySelector('#precio').innerText
    let cantProducto = document.querySelector('#cantidad').value

    let producto = {
        nombreProducto,
        precioProducto,
        cantProducto
    }

    if( localStorage.length == 0){
        let carrito = []
        carrito.push(producto)  
        localStorage.setItem('carrito',JSON.stringify(carrito)) //cambiar por sessionStorage?
        console.log(carrito)
    } else {
        let carrito = JSON.parse(localStorage.carrito)
        carrito.push(producto)  
        localStorage.setItem('carrito',JSON.stringify(carrito)) //cambiar por sessionStorage?
        console.log(carrito)
    }    
 alert(nombreProducto+' agregado al carrito')
})


