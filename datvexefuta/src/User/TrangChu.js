import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import Slider from "react-slick";
import Select from "react-select";
import {
  getAllChuyenxe,
} from "../userService";

import Footer from "../FooterFuta/Footer";
import HeaderFutaMain from "../HeaderFuta/HeaderFutaMain";
import "./TrangChu.scss";
import "./setup.scss";

import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TimKiem() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [danhsachchuyenxe, setdanhsachchuyenxe] = useState({});



  useEffect(() => {
    const getAllTaikhoanReact = async () => {
      let response = await getAllChuyenxe("ALL");   
      if (response && response.errcode === 0) {
       
        setdanhsachchuyenxe(response.chuyenxe);
      }
    };
  
    getAllTaikhoanReact();
  }, []);
  



  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  
  const [selectedOption2, setSelectedOption2] = useState(null);
  const handleChange2 = (selected) => {
    setSelectedOption2(selected);
  };

  //So Ve
  const num = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];
  const [selectedNum, setSelectedNum] = useState(null);
  const handleNumChange = (selected) => {
    setSelectedNum(selected);
  };

  //CHọn loại vé
  const [selectedType, setSelectedType] = useState(null);

  const typeOptions = [
    { value: "1", label: "Một chiều" },
    { value: "2", label: "Khứ hồi" },
  ];

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  const [chuyenXe, setChuyenXe] = useState([]);

  
  const handleTimVe = () => {
    // Lấy giá trị điểm đi và điểm đến từ selectedOption và selectedOption2
    const diemDi = selectedOption.value; // Sử dụng optional chaining để xử lý trường hợp giá trị null
    const diemDen = selectedOption2.value;
    const ngayDi = selectedDate;

    console.log("diemDi:", diemDi);
  console.log("diemDen:", diemDen);
  console.log("ngayDi:", ngayDi);
  console.log("hello",danhsachchuyenxe);
    // Lọc danh sách chuyến xe dựa trên các thông tin đã nhập
    const danhSachChuyenXeDaLoc = danhsachchuyenxe.filter((chuyenDi) => {
      return (
        chuyenDi.diemdi === diemDi &&
        chuyenDi.diemden === diemDen 
      );
    });
    
    console.log("chuyenxe da loc",danhSachChuyenXeDaLoc);

    // Cập nhật danh sách chuyến xe trong trạng thái chuyenXe
    setChuyenXe(danhSachChuyenXeDaLoc);
  };

  return (
    <div>
      <main>
        <div className="body-content">
          <div className="banner-box">
            <div className="banner"></div>
          </div>
        </div>
        <div className="body-content">
          <div className="search-box row datve">
            <div className="type row customer-row">
              <div className="row">
                {typeOptions.map((option) => (
                  <div key={option.value}>
                    <input
                      type="radio"
                      name="type"
                      value={option.value}
                      checked={selectedType === option.value}
                      onChange={handleTypeChange}
                    />
                    {option.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="col">
              <div className="col-6">
                <label className="col text-main" for="go-adr">
                  Điểm đi
                </label>
                <Select
  value={selectedOption}
  onChange={handleChange}
  options={danhsachchuyenxe && danhsachchuyenxe.length > 0 ? danhsachchuyenxe.map(item => ({
    value: item.diemdi, // Replace with the correct key for the value
    label: item.diemdi, // Replace with the correct key for the label
  })) : []}
  className="customselect"
/>
              </div>
            </div>
            <div className="col">
              <div className="col-6">
                <label className="col text-main" for="arri-adr">
                  Điểm đến
                </label>
                <Select
  value={selectedOption2}
  onChange={handleChange2}
  options={danhsachchuyenxe && danhsachchuyenxe.length > 0 ? danhsachchuyenxe.map(item => ({
    value: item.diemden, // Replace with the correct key for the value
    label: item.diemden, // Replace with the correct key for the label
  })) : []}
  className="customselect"
/>

              </div>
            </div>
            <div className="col">
              <div className="col-6">
                <label className="col text-main" for="arri-adr">
                  Ngày đi
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>
            <div className="col">
              <div className="col-6">
                <label className="col text-main" for="arri-adr">
                  Số vé
                </label>
                <Select
                  value={selectedNum}
                  onChange={handleNumChange}
                  options={num}
                  className="customselect"
                />
              </div>
            </div>
          </div>
          <button type="submit"onClick={handleTimVe}>Tìm Vé</button>
        </div>
        {chuyenXe.length> 0 && (
          <div className="danh-sach-chuyen-xe">
            <h2>Danh sách chuyến xe:</h2>
            <ul>
              {chuyenXe.map((item, index) => (
                <li key={index}>
                  Chuyến xe {item.tenchuyen} - Điểm đi: {item.diemdi}, Điểm đến:{" "}
                  {item.diemden}, Ngày đi: {item.dodai}, Số vé:{" "}
                  {item.gia}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

function SildeKM() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // Đặt thời gian chuyển slide tự động (1.5 giây)
  };

  const groups = [
    ["/image/slide31.png"],
    ["/image/slide21.png"],
    ["/image/slide33.png"],
    ["/image/slide23.png"],
    ["/image/slide13.png"],
    ["/image/slide12.png"],
  ];

  return (
    <div>
      <div className="title">
        <b>KHUYẾN MÃI NỔI BẬT</b>
      </div>
      <div className="customerSlide">
        <Slider {...settings}>
          {groups.map((group, index) => (
            <div key={index} className="image-group">
              {group.map((image, i) => (
                <div key={i} className="image-container">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}, Image ${i + 1}`}
                    className="image-slide"
                  />
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const TrangChu = () => {
  return (
    <div>
      <HeaderFutaMain />
      <TimKiem />
      <SildeKM />
      <Footer />
    </div>
  );
};

export default TrangChu;
