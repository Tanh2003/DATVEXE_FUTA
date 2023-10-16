
import './App.scss';
import Footer from "../FooterFuta/Footer.js";
import Header  from '../HeaderFuta/HeaderFutaMain';
import LoginFuta from '../Login/LoginFuta';

const App=()=> {
  return (
    <div className="App">
      <Header/>
     <LoginFuta/>  
     <Footer/>

    </div>
  );
}

export default App;
