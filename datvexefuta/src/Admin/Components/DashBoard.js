import React from "react";

import { useHistory } from 'react-router-dom';


// Bây giờ bạn có thể sử dụng useHistory trong file này

export const DashBoard = () => {
  const history = useHistory();

  const handleManagekhachhang = () => {
    history.replace("/admin/khachhang");
  };
  const handleManageNhanvien = () => {
    history.replace("/admin/nhanvien");
  };
  const handleManageQuyen = () => {
    history.replace("/admin/quyen"); // Sử dụng replace thay vì push
  };

  const handleManageXe = () => {
    history.replace("/admin/xe");
  };

  const handleManageTaikhoan = () => {

    history.replace("/admin/taikhoan");
  };

  return (
    <>
      <div className="sidebar">
        <div className="logo"></div>
        <ul className="menu">
          <li className="active">
            <i className="fa-solid fa-house"></i>
            <span>Trang chủ </span>
          </li>
          <li onClick={() => handleManageTaikhoan()}>
            <i className="fas fa-mobile-alt"></i>
            <span>Quản lý tài khoản</span>
          </li>
          <li onClick={() => handleManageNhanvien()}>
            <i className="fas fa-mobile-alt"></i>
            <span>Quản lý nhân viên</span>
          </li>
          <li onClick={() => handleManagekhachhang()}>
            <i className="fas fa-user"></i>
            <span>Quản lý khách hàng </span>
          </li>
          <li onClick={() => handleManageQuyen()}>
            <i className="fas fa-mobile-alt"></i>
            <span>Quản lý Quyền </span>
          </li>

          <li onClick={() => handleManageXe()}>
            <i className="fas fa-mobile-alt"></i>
            <span>Quản lý Xe</span>
          </li>
          

       
          <li className="logout">
            <i className="fas fa-sign-out-alt"></i>
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
    </>
  );
};
