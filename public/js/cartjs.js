    window.addEventListener('load',function(){
        let arrayProductos = localStorage
        if(arrayProductos.length > 0){
            for (let i = 0; i < arrayProductos.length; i++) {
                let productos = JSON.parse(arrayProductos[i])
                document.getElementById('delete').innerHTML += '<li><button type="submit" style="border: none" onclick="deleteItem('+i+')"><img src="/img/basura.png" alt="eliminar item"></a></li>'
                document.getElementById('productList').innerHTML += '<li>'+productos.nombreProducto+'</li>'
                document.getElementById('cantidad').innerHTML += '<li><input type="number" value='+productos.cantProducto+'></li>'
                document.getElementById('precio').innerHTML += '<li>'+productos.precioProducto+'</li>'        
            }
        }
        
        function deleteItem(id){
            localStorage.removeItem(id)
            location.reload()
        }

        function deleteAll(){
            localStorage.clear()
            location.reload()
        }
    })
