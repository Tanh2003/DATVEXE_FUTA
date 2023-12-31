import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IndexAdmin from '../Admin/IndexAdmin';
import LoginFuta from '../Dangnhap/LoginFuta';
import AddUser from "../Admin/CRUD_User/AddUser";
import EditUser from "../Admin/CRUD_User/EditUser";


import TrangChu from '../User/TrangChu';
import LienHe from '../User/LienHe';
import DatXe from '../User/DatXe';
import XeManager from '../Admin/CRUD_xe/XeManager';




function App() {
    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < IndexAdmin / > }
        /> <
        Route path = "/Login"
        element = { < LoginFuta / > }
        /> <
        Route path = "/them"
        element = { < AddUser / > }
        /> <
        Route path = "/sua"
        element = { < EditUser / > }
        /> <
        Route path = "/xe"
        element = { < XeManager / > }
        />



        <
        Route path = "/trangchu"
        element = { < TrangChu / > }
        /> <
        Route path = "/lienhe"
        element = { < LienHe / > }
        /> <
        Route path = "/datxe"
        element = { < DatXe / > }
        />

        <
        /Routes> <
        ToastContainer position = "bottom-right"
        autoClose = { 5000 }
        hideProgressBar = { false }
        newestOnTop = { false }
        closeOnClick rtl = { false }
        pauseOnFocusLoss draggable pauseOnHover theme = "colored" /
        >
        <
        /BrowserRouter>

    );
}

ReactDOM.render( < App / > , document.getElementById('root'));
export default App;