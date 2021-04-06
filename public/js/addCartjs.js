let cart = document.querySelector('button.addCart')
console.log(localStorage)
cart.addEventListener('click',function(){
    let nombreProducto = document.querySelector('#nombre').innerText
    let precioProducto = document.querySelector('#precio').innerText
    let cantProducto = document.querySelector('#cantidad').value

    let producto = {
        nombreProducto,
        precioProducto,
        cantProducto
    }
    
    localStorage.setItem((localStorage.length),JSON.stringify(producto)) //cambiar por sessionStorage?
    console.log(localStorage)
})


