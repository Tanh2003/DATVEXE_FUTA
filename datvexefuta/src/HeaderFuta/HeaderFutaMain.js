import "../HeaderFuta/HeaderFutaMain.scss";
import person from "../image/person.svg";
import { getAllThongtintaikhoan } from "../userService";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
};

const HeaderFutaMain = () => {
  const [thongtin, setThongtin] = useState();
  useEffect(() => {
    const getAllTaikhoanReact = async () => {
      const taiKhoanData = JSON.parse(localStorage.getItem('taikhoan'));
      if(taiKhoanData){
        const sdt = taiKhoanData.sdt;
        if (sdt) {
          let response = await getAllThongtintaikhoan(sdt);
          if (response && response.errcode === 0) {
            setThongtin(response.info);
          }
        }
      }
    
     
    };

    getAllTaikhoanReact();
  }, []);

  console.log("thongtinm",thongtin);
  return (
    <div>
      <div className="daune">
        <div className="box-ovan"></div>
        <div className="text-loginleft">
        {thongtin&&thongtin.hoten !== " " ? (
  <div>
    <img src={person} className="mr-2" />
    {thongtin.hoten}
  </div>
) : (
  <Link to="/Login" style={linkStyle}>
    <img src={person} className="mr-2" />
    <a>Đăng nhập/Đăng ký</a>
  </Link>
)}
        </div>
        <div className="main-menu">
          <ul>
            <li>
              <a href="trangchu">Trang chủ</a>
            </li>
            <li>
              <a href="#">Kiểm tra vé</a>
            </li>
            <li>
             <Link to="/lienhe"> <a>Liên hệ</a></Link>
            </li>
            <li>
              <a href="#">Giới thiệu</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderFutaMain;
