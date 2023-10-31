import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Slider from "react-slick";
import Select from "react-select";

import Footer from "../FooterFuta/Footer";
import HeaderFutaMain from "../HeaderFuta/HeaderFutaMain";
import "./TrangChu.scss";
import "./setup.scss";

import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TimKiem() {
  const [selectedDate, setSelectedDate] = useState(null);

  //Địa chỉ
  const options = [
    { value: "hcm", label: "TP.Hồ Chí Minh" },
    { value: "qn", label: "Quảng Ngãi" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  const options2 = [
    { value: "hcm", label: "TP.Hồ Chí Minh" },
    { value: "qn", label: "Quảng Ngãi" },
  ];
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
                  options={options}
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
                  options={options2}
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
          <button type="submit">Tìm Vé</button>
        </div>
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
