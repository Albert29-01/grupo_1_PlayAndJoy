import './App.css';
import './components/styleList.css'
import React, { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import ContentBox from './components/ContentBox'
import LastProductBox from './components/LastProductBox'
import LastUserBox from './components/LastUserBox'
import CategoryBox from './components/CategoryBox'
import Footer from './components/Footer'

function App() {
  const [totalProductos, setTotalProductos] = useState('');
  const [products, setProducts] = useState([]);
  const [lastProduct, setLastProduct] = useState([]);

  const [totalSuscripciones, setTotalSuscripciones] = useState('');

  const [totalUsers, setTotalUsers] = useState('');
  //const [users, setUsers] = useState([]);
  const [lastUser, setLastUser] = useState([]);

  const [totalCategories, setTotalCategories] = useState('');
  const [categories, setCategories] = useState([]);
  
  useEffect(() => { //Productos
    fetch('https://playandjoy.herokuapp.com/api/product')
    .then((response)=>{return response.json()})
    .then((result)=>{
      setTotalProductos(result.meta.total)
      setProducts(result.data)
    })
    .catch((e)=>{console.log(e)})
  }, []);

  useEffect(() => { //Último Producto
    fetch('https://playandjoy.herokuapp.com/api/product/last')
    .then((response)=>{return response.json()})
    .then((result)=>{
      setLastProduct(result.data)
    })
    .catch((e)=>{console.log(e)})
  }, []);

  useEffect(() => { //Suscripciones
    fetch('https://playandjoy.herokuapp.com/api/suscriptions')
    .then((response)=>{return response.json()})
    .then((result)=>{
      setTotalSuscripciones(result.meta.total)
    })
    .catch((e)=>{console.log(e)})
  }, []);


  useEffect(() => { //Usuarios
    fetch('https://playandjoy.herokuapp.com/api/users')
    .then((response)=>{return response.json()})
    .then((result)=>{
      setTotalUsers(result.meta.total)
      //setUsers(result.data) PREGUNTAR SI HAY QUE MOSTRAR UN LISTADO DE USUARIOS
    })
    .catch((e)=>{console.log(e)})
  }, []);

  useEffect(() => { //Último Usuario
    fetch('https://playandjoy.herokuapp.com/api/users/last')
    .then((response)=>{return response.json()})
    .then((result)=>{
      setLastUser(result.data)
    })
    .catch((e)=>{console.log(e)})
  }, []);

  useEffect(() => { //Categorias
    fetch('https://playandjoy.herokuapp.com/api/product/category')
    .then((response)=>{return response.json()})
    .then((result)=>{
      setTotalCategories(result.meta.total)
      setCategories(result.data)
    })
    .catch((e)=>{console.log(e)})
  }, []);
  
  let boxes = [
    { 
      title: 'Productos', 
      dato: totalProductos,
      icono: 'fas fa-box fa-2x text-gray-300',
      color:'card border-left-primary shadow h-100 py-2'
    },
    { 
      title: 'Suscripciones', 
      dato: totalSuscripciones,
      icono: 'fas fa-clipboard-list fa-2x text-gray-300',
      color:'card border-left-danger shadow h-100 py-2'
    },{ 
      title: 'Usuarios', 
      dato: totalUsers, 
      icono: 'fas fa-user-check fa-2x text-gray-300',
      color:'card border-left-success shadow h-100 py-2' 
    },{ 
      title: 'Categorias', 
      dato: totalCategories,
      icono: 'fas fa-shopping-cart fa-2x text-gray-300',
      color:'card border-left-warning shadow h-100 py-2'
  }]

const itemTemplate = (item) => {
    
    return (
      <div className="product-item">
            <div className="image-container">
                <img src={`https://playandjoy.herokuapp.com/img/uploads/products/${item.images[0].nombre}`} onError={(e) => e.target.src='https://playandjoy.herokuapp.com/img/uploads/products/imagenDefault.png'} alt={item.name} />
            </div>
            <div className="product-list-detail">
                <h5 className="p-mb-2">{item.nombre}</h5>
                <i className="pi pi-tag product-category-icon"></i>
                <span className="product-category"> {item.categorias.nombre} </span>
            </div>
            <div className="product-list-action">
                <h6 className="p-mb-2">${item.precio}</h6>
                <span className={`product-badge`}>STOCK: {item.stock}</span>
            </div>
      </div>
    );
}

return (
  <div id="wrapper">
  <Sidebar/>
  <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
  <Topbar imgUrl={'/images/dummy-avatar.jpg'}/>
  <div className="container-fluid">
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
  </div>
  <ContentBox boxes={boxes}/>
  <div className="row">
  {lastProduct.map((product)=>{
             return <LastProductBox lastProduct={product.nombre} precio={product.precio} productDetail={product.detalle} imgUrl={`https://playandjoy.herokuapp.com/img/uploads/products/${product.images[0].nombre}`} />
  })}
  {lastUser.map((user)=>{
             return <LastUserBox lastUser={user.first_name+', '+user.last_name} userMail={user.email} imgUrl={`https://playandjoy.herokuapp.com/img/uploads/avatars/${user.imagen}`} />
  })}
  <div className="col-lg-6 mb-4">						
  <div className="card shadow mb-4">
  <div className="card-header py-3">
  <h6 className="m-0 font-weight-bold text-primary">Productos por categoria</h6>
  </div>
  <div className="card-body">
  <div className="row">
  {categories.map((category)=>{
             return <CategoryBox nombre={category.nombre} dato={category.productos.length}/>
  })}
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  <OrderList value={products} header="Listado de Productos" listStyle={{height:'auto'}} dataKey="id" itemTemplate={itemTemplate} onChange={(e) => setProducts(e.value)}></OrderList>
  </div>
  <Footer/>
  </div>
  </div>
  )
}

export default App;
