import './App.css';
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Box from './components/Box'
import LastProductBox from './components/LastProductBox'
import CategoryBox from './components/CategoryBox'
import Footer from './components/Footer'

function App() {
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
					<div className="row">
            <Box/>
          </div>
          <div class="row">
          <LastProductBox imgUrl={'/images/product_dummy.svg'}/>
          <div class="col-lg-6 mb-4">						
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
								</div>
								<div class="card-body">
									<div class="row">
                  <CategoryBox/>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <Footer/>
    </div>
    </div>
  )
}

export default App;
