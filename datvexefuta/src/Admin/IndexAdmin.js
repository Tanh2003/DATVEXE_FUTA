import Dashboard from './Components/DashBoard';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

const IndexAdmin=()=>{
 
            return(
              

              <div>
              <Navbar/>
              <div className="container-fluid" id="main">
               <div className="row row-offcanvas row-offcanvas-left">
                 <Sidebar/>
                <Dashboard/>
              
           </div>
          </div>  
      </div>  

            );

        

        }

export default IndexAdmin;