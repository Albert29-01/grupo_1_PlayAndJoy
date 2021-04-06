    if (localStorage.length == 0) {
        document.querySelector('p.cartEmpty').innerHTML = 'No hay productos agregados al carrito'
    } else {
        let arrayProductos = JSON.parse(localStorage.carrito)
        for (let i = 0; i < arrayProductos.length; i++) {
            document.getElementById('delete').innerHTML += '<li><button style="border: none" class="deleteButton"><img src="/img/basura.png" alt="eliminar item"></a></li>'
            /*let deleteButton = querySelector('button.deleteButton')
            deleteButton.setAttribute('marcador', i);*/
            document.getElementById('productList').innerHTML += '<li>'+arrayProductos[i].nombreProducto+'</li>'
            document.getElementById('cantidad').innerHTML += '<li><input type="number" value='+arrayProductos[i].cantProducto+'></li>'
            document.getElementById('precio').innerHTML += '<li>'+arrayProductos[i].precioProducto+'</li>'        
        }
    }
    
    /*--------NO FUNCIONA--------*/
    function deleteItem(id){
        let carrito = JSON.parse(localStorage.carrito)
        /*carrito = carrito.filter((producto,id) => {
            return producto[id] !== id;
        });*/
        localStorage.setItem('carrito',JSON.stringify(carrito));
        console.log(carrito)
        //location.reload();
    }
    
    function deleteAll(){
        localStorage.clear()
        location.reload()
        alert('Carrito vaciado')
    }