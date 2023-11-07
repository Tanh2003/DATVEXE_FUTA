import * as React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IndexAdmin from '../Admin/IndexAdmin';
import LoginFuta from '../Dangnhap_DangKy/LoginFuta';
import AddUser from "../Admin/CRUD_User/AddUser";
import EditUser from "../Admin/CRUD_User/EditUser";
import TrangChu from '../User/TrangChu';
import LienHe from '../User/LienHe';
import DatXe from '../User/DatXe';
import XeManager from '../Admin/CRUD_xe/XeManager';
import QuyenAdmin from '../Admin/QuyenAdmin';
import TaikhoanAdmin from "../Admin/TaikhoanAdmin";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/admin/taikhoan" exact component={TaikhoanAdmin} />
        <Route path="/admin/xe" exact component={IndexAdmin} />
        <Route path="/admin/quyen" component={QuyenAdmin} />
        <Route path="/Login" component={LoginFuta} />
        <Route path="/them" component={AddUser} />
        <Route path="/sua" component={EditUser} />
        <Route path="/xe" component={XeManager} />
        <Route path="/" component={TrangChu} />
        <Route path="/lienhe" component={LienHe} />
        <Route path="/datxe" component={DatXe} />
      </Switch>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}


export default App;
