import './App.css';
import React, { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import ContentBox from './components/ContentBox'
import LastProductBox from './components/LastProductBox'
import CategoryBox from './components/CategoryBox'
import Footer from './components/Footer'

function App() {
  const [totalProductos, setTotalProductos] = useState('');
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://playandjoy.herokuapp.com/api/product')
    .then((response)=>{return response.json()})
    .then((result)=>{
      setTotalProductos(result.meta.total)
      setProducts(result.data)
    })
    .catch((e)=>{console.log(e)})
  }, []);
  
  let boxes = [
    { 
      title: 'Productos', 
      dato: totalProductos,
      icono: 'fas fa-clipboard-list fa-2x text-gray-300',
      color:'card border-left-primary shadow h-100 py-2'
    },{ 
      title: 'Usuarios', 
      dato: '250', 
      icono: 'fas fa-user-check fa-2x text-gray-300',
      color:'card border-left-success shadow h-100 py-2' 
    },{ 
      title: 'Categorias', 
      dato: '90',
      icono: 'fas fa-clipboard-list fa-2x text-gray-300',
      color:'card border-left-warning shadow h-100 py-2'
  }]

const itemTemplate = (item) => {
    return (
      /*<div className="product-item">
        <div className="product-list-detail">
                <h5 className="p-mb-2">{item.nombre}</h5>
                <i className="pi pi-tag product-category-icon"></i>
                <span className="product-category"> {item.categorias.nombre} </span>
            </div>
      </div>*/
      <div className="product-item">
            <div className="image-container">
                <img src={`showcase/demo/images/product/${item.}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
            </div>
            <div className="product-list-detail">
                <h5 className="p-mb-2">{item.nombre}</h5>
                <i className="pi pi-tag product-category-icon"></i>
                <span className="product-category">{item.categorias.nombre}</span>
            </div>
            <div className="product-list-action">
                <h6 className="p-mb-2">{item.precio}</h6>
                <span className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}>{item.inventoryStatus}</span>
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
  <LastProductBox imgUrl={'/images/product_dummy.svg'}/>
  <div className="col-lg-6 mb-4">						
  <div className="card shadow mb-4">
  <div className="card-header py-3">
  <h6 className="m-0 font-weight-bold text-primary">Productos por categoria</h6>
  </div>
  <div className="card-body">
  <div className="row">
  <CategoryBox/>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  <OrderList value={products} header="Listado de Productos" dragdrop listStyle={{height:'auto'}} dataKey="id" itemTemplate={itemTemplate} onChange={(e) => setProducts(e.value)}></OrderList>
  </div>
  <Footer/>
  </div>
  </div>
  )
}

export default App;
