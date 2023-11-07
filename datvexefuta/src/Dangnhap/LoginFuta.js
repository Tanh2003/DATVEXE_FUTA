import phone from "../image/phone.svg";
import "./LoginFuta.scss";
import Footer from "../FooterFuta/Footer";
import HeaderFutaMain from "../HeaderFuta/HeaderFutaMain";
function LoginFuta() { // Đặt tên thành phần React là Login thay vì login

    return (
        <div>
            
        <HeaderFutaMain/>
         <main>
             <div className="body-content">
                 <div className="login-box">
                     <div className="login-images">
                         <div className="login-image1"></div>
                         <div className="login-image2"></div>
                     </div>
                     <div className="create-account">
                         <b>Đăng nhập tài khoản</b>
                         <div className="login-left">
                            <img src={phone} className=""/>
                             <a className="login" >Đăng nhập</a>
                             <a className="register" >Đăng ký</a>
                         </div>
                         <hr className="custom-hr" />
                         <div className="input-group">
                             <input type="text" name="username" placeholder="Nhập số điện thoại" />
                         </div>
                         <div className="input-group">
                             <input type="password" name="password" placeholder="Nhập mật khẩu" />
                         </div>
                         <button type="submit" >Đăng nhập</button>
                     </div>
                 </div>
             </div>
         </main>
   <Footer/>
     </div>
    );
}

export default LoginFuta;
