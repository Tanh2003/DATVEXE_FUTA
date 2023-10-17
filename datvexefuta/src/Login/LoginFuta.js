
import "./LoginFuta.scss"
import phone from "../image/phone.svg";
import {useState} from "react";









const LoginFuta=()=>{




  
    let [name,setName]=useState('tanhne');
    let [adress,setAddress]=useState('');


const handleClickme=(event)=>{
   setName(adress);

    
    console.log("click  me+>>>",event.target.value);
}

const handleInputAdreess=(event)=>{
    setAddress(event.target.value);
}
   

    return(
        
        <div>
            <main>
        <div className="body-content">
            <div className="login-box">
                <div className="login-images">
                    <div className="login-image1"></div>
                    <div className="login-image2"></div>
                </div>
                <div className="create-account">
                    <b>Đăng nhập tài khoản {name}</b>
                    <div className="login-left">
                        <span><img src={phone} className="px-1"/></span>
                        <a className="login" >Đăng nhập</a>
                        <a className="register" >Đăng ký</a>
                    </div>
                    <hr className="custom-hr"/>

                    <div className="input-group">
                        
                       
                        <input type="text"  name="username" placeholder="Nhập số điện thoại" value={adress} onChange={(event)=>{handleInputAdreess(event)}}/>
                  
                    </div>
                    <div className="input-group">
                      
                        <input type="password" name="password" placeholder="Nhập mật khẩu"/>
                    </div>
                    <button type="submit" value={name} onClick={(event)=>{handleClickme(event)}}>Đăng nhập</button>
                </div>
            </div>
        </div>
    </main>

        </div>
    )


}

export default LoginFuta;