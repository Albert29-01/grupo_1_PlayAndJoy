    if (localStorage == undefined || localStorage.carrito == undefined || localStorage.carrito == "[]") { //ver validacion
        document.querySelector('p.cartEmpty').innerHTML = 'No hay productos agregados al carrito'
    } else {
        let arrayProductos = JSON.parse(localStorage.carrito)
        for (let i = 0; i < arrayProductos.length; i++) {
            let precio = arrayProductos[i].precioProducto.slice(1)   //para sacarle el símbolo pesos al precio
            document.querySelector('tbody').innerHTML += '<tr class="producto"><td class="first"><button style="border: none" class="deleteButton" onclick=deleteItem('+i+')><img src="/img/basura.png" alt="eliminar item"></button></td><td>'+arrayProductos[i].nombreProducto+'</td><td><input type="number" value='+arrayProductos[i].cantProducto+'></td><td>$'+precio*arrayProductos[i].cantProducto+'</td></tr>'
        }
    }

    function deleteAll(){
        localStorage.clear()
        location.reload()
        alert('Carrito vaciado')
    }
    
    function deleteItem(id){
        let carrito = JSON.parse(localStorage.carrito)
        carrito = carrito.filter((producto,i) => {
            return i !== id;
        });
        localStorage.setItem('carrito',JSON.stringify(carrito));
        console.log(carrito)
        location.reload();
    }
    
    