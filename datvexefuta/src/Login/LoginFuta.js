
import "./LoginFuta.scss"
import phone from "../image/phone.svg";




const handleClickme=(event)=>{
    console.log("click  me+>>>",event.target.value);
}






const LoginFuta=()=>{
    let tennguoidung="tuan anh neee";

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
                    <b>Đăng nhập tài khoản</b>
                    <div className="login-left">
                        <span><img src={phone} className="px-1"/></span>
                        <a className="login" >Đăng nhập</a>
                        <a className="register" >Đăng ký</a>
                    </div>
                    <hr className="custom-hr"/>

                    <div className="input-group">
                        
                       
                        <input type="text"  name="username" placeholder="Nhập số điện thoại"/>
                  
                    </div>
                    <div className="input-group">
                      
                        <input type="password" name="password" placeholder="Nhập mật khẩu"/>
                    </div>
                    <button type="submit" value={tennguoidung} onClick={(event)=>{handleClickme(event)}}>Đăng nhập</button>
                </div>
            </div>
        </div>
    </main>

        </div>
    )


}

export default LoginFuta;