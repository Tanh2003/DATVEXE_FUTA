import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./ThongTinCaNhan.scss";

import Footer from "../FooterFuta/Footer";
import HeaderFutaMain from "../HeaderFuta/HeaderFutaMain";

function CapNhapProfile() {
  const [profileData, setProfileData] = useState({
    fullName: "",
    phoneNumber: "",
    gender: "",
    email: "",
    dob: "",
    address: "",
    occupation: "",
    avatar: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "avatar" && files.length > 0) {
      const file = files[0];
      setProfileData((prevData) => ({
        ...prevData,
        [name]: file.name,
      }));

      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProfileData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile data updated:", profileData);
  };

  return (
    <main>
      <div className="custom-box-profile">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-5">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleChange}
              />
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected Avatar"
                  className="selected-image"
                />
              )}
            </div>
            <div className="col ds-profilt">
              <div className="row">
                <div className="col">
                  <label>Họ và tên:</label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="fullName"
                    value={profileData.fullName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Số điện thoại:</label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="phoneNumber"
                    value={profileData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Giới tính:</label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="gender"
                    value={profileData.gender}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Email:</label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Ngày sinh:</label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="dob"
                    value={profileData.dob}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Địa chỉ:</label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Nghề nghiệp:</label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="occupation"
                    value={profileData.occupation}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <button type="submit2">Cập nhật</button>
          </div>
        </form>
      </div>
    </main>
  );
}

const LienHe = () => {
  return (
    <div>
      <HeaderFutaMain />
      <CapNhapProfile />
      <Footer />
    </div>
  );
};

export default LienHe;
