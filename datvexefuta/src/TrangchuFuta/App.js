import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexAdmin from '../Admin/IndexAdmin';
import LoginFuta from '../Dangnhap/LoginFuta';
import AddUser from "../Admin/CRUD_User/AddUser";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexAdmin/>} />
       
        <Route path="/Login" element={<LoginFuta/>} />
        <Route path="/them" element={<AddUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;