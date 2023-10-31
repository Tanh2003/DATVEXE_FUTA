import "../HeaderFuta/HeaderFutaMain.scss";
import person from "../image/person.svg";
import TrangChu from "../User/TrangChu";

const HeaderFutaMain = () => {
  return (
    <div>
      <div className="daune">
        <div className="box-ovan"></div>
        <div className="text-loginleft">
          <img src={person} /> <a>Đăng nhập/Đăng ký</a>
        </div>
        <div class="main-menu">
          <ul>
            <li>
              <a href="trangchu">Trang chủ</a>
            </li>
            <li>
              <a href="#">Kiểm tra vé</a>
            </li>
            <li>
              <a href="lienhe">Liên hệ</a>
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
