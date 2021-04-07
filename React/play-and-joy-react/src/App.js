import './App.css';
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import ProductsBox from './components/ProductsBox'

function App() {
  return (
    <div id="wrapper">
    <Sidebar/>
		<div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
        <Topbar/>
        <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					<div className="row">
            <ProductsBox/>
          </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default App;
