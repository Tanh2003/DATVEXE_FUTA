import React, { useState, useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import "./DatXe.scss";

import Footer from "../FooterFuta/Footer";
import HeaderFutaMain from "../HeaderFuta/HeaderFutaMain";
import { useParams } from 'react-router-dom';
import {toast} from "react-toastify";
import {
  getAllChuyenxe,
  createNewVexe,
  getAllTTchuyenxe

} from "../userService";
import { getAllThongtintaikhoan } from "../userService";

function Booking() {
  // Số lượng hàng và ghế trong mỗi hàng
  const { id } = useParams(); // Lấy giá trị id từ Route Parameters

  console.log("xem id ne   ", id);


  const [chuyenxe,setchuyenxe]=useState("");

  const [state, setState] = useState({
    sdt:'',
    giave:'',
    soghe:'',
    machuyen:'',
    thoigianbatdau:'',
    thoigianmua:'',
    matk:'',
  });
  const handleOnChangeInput = (event, id) => {
    const copyState = { ...state };
    copyState[id] = event.target.value;
    setState({ ...copyState });
  };


  

  const buttonDatve = () => {

  

      datvexe({
        sdt:state.sdt,
        giave:totalPrice,
        soghe: selectedSeats.join(", "),
        machuyen:id,
        thoigianbatdau:'',
        thoigianmua: new Date(),
        matk:1
       
      });
  };


  const datvexe = async (data) => {
    try {
      const response = await createNewVexe(data);
      if (response && response.errcode !== 0) {
        toast.error('Đặt vé thất bại !');
        alert(response.errMessage);
      } else {
        toast.success('Đặt vé thành công!');
        setState({
          sdt:'',
          giave:'',
          soghe:'',
          machuyen:'',
          thoigianbatdau:'',
          thoigianmua:'',
          matk:'',
        });
      
      }
    } catch (e) {
      console.log(e);
    }
  };

























  useEffect(() => {
    getAllchuyenxeReact();


    getAllTaikhoanReact();
  }, [id]);



  const getAllchuyenxeReact = async () => {
    if (id) {  // Kiểm tra xem `id` có tồn tại không
      let response = await getAllTTchuyenxe(id);
      if (response && response.errcode === 0) {
        setchuyenxe(response.TTchuyenxe);
      }
    }
  };
  
  const getAllTaikhoanReact = async () => {
    if (id) {  // Kiểm tra xem `id` có tồn tại không
      const taiKhoanData = JSON.parse(localStorage.getItem('taikhoan'));
      if (taiKhoanData) {
        const sdt = taiKhoanData.sdt;
        if (sdt) {
          let response = await getAllThongtintaikhoan(sdt);
          if (response && response.errcode === 0) {
            setThongtin(response.info);
          }
        }
      }
    }
  };

  const [thongtin, setThongtin] = useState();


  

  
  const numRows = 6;
  const numSeatsPerRow = 7;

  // Số ghế tối đa có thể chọn
  const maxSeatsToSelect = 5;

  // Mảng các ghế với trạng thái ban đầu
  const [seats, setSeats] = useState(
    Array(numRows * numSeatsPerRow).fill(false)
  );
  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  // Số lượng ghế đã được chọn
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [dropOffLocation, setDropOffLocation] = useState("Bến Xe Miền Đông");
  const [pickupLocation, setPickupLocation] = useState("Phú Yên");

  // Hàm tính chỉ mục của ghế dựa trên hàng và vị trí của ghế trong hàng
  const calculateSeatIndex = (rowIndex, seatIndex) => {
    return rowIndex * numSeatsPerRow + seatIndex;
  };
  const [showError, setShowError] = useState(false);
  // Hàm xử lý khi người dùng chọn ghế
  const handleSeatClick = (rowIndex, seatIndex) => {
    const clickedSeatIndex = calculateSeatIndex(rowIndex, seatIndex);
    const newSeats = [...seats];
    const isOccupied = newSeats[clickedSeatIndex];
    const seatNumber = clickedSeatIndex + 1;
    const seatName = getSeatName(seatNumber);

    if (isOccupied && selectedSeats.includes(seatName)) {
      // Loại bỏ ghế khỏi danh sách nếu đã được chọn
      newSeats[clickedSeatIndex] = false;
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((selectedSeat) => selectedSeat !== seatName)
      );
    } else if (!isOccupied && selectedSeats.length < maxSeatsToSelect) {
      // Thêm ghế vào danh sách nếu chưa được chọn và chưa đạt đến giới hạn
      newSeats[clickedSeatIndex] = true;
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seatName]);
    } else if (selectedSeats.length >= maxSeatsToSelect) {
      // Hiển thị thông báo lỗi
      setShowError(true);
    }

    setSeats(newSeats);
  };

  const handleDropoffChange = (event) => {
    const newDropoffLocation = event.target.value;
    setDropOffLocation(newDropoffLocation);
  };

  const handlePickupChange = (event) => {
    const newPickupLocation = event.target.value;
    setPickupLocation(newPickupLocation);
  };

  if (showError) {
    return (
      <div className="error-message">
        <p>Bạn chỉ được chọn tối đa {maxSeatsToSelect} ghế.</p>
        <button onClick={() => setShowError(false)}> Đóng </button>
      </div>
    );
  }

  const totalPrice = selectedSeats.length * (chuyenxe && chuyenxe.idmachuyenData.gia ? chuyenxe.idmachuyenData.gia : 0);
  return (
    <main>
    <div className="dsmain">
      <div className="custom-box table-container2">
        {/* Bảng thứ nhất */}
        <div className="table-container2">
          <div className="titleDV">
            <p> Chọn ghế để đặt vé </p>
          </div>
          <div className="row tt2">
            <div className="col">
              <p> Tầng dưới </p>
            </div>
            <div className="col">
              <p> Tầng trên </p>
            </div>
          </div>
          <div className="custom-dv">
            <div className="row ds">
              {Array(numRows)
                .fill()
                .map((_, rowIndex) => (
                  <div className="seats col" key={rowIndex}>
                    {Array(numSeatsPerRow)
                      .fill()
                      .map((_, index) => {
                        const seatIndex = calculateSeatIndex(rowIndex, index);
                        const isOccupied = seats[seatIndex];
                        const seatNumber = seatIndex + 1;
                        const seatName = getSeatName(seatNumber);
                        return (
                          <div
                            key={seatIndex}
                            className={`seat ${
                              isOccupied ? "occupied" : "available"
                            }`}
                            onClick={() => handleSeatClick(rowIndex, index)}
                          >
                            {isOccupied ? (
                              <i class="fas fa-couch"> </i>
                            ) : (
                              seatName
                            )}
                          </div>
                        );
                      })}
                  </div>
                ))}
            </div>
            <div className="dsghe">
              <p> Ghế chưa chọn </p> <br />
              <p> Ghế đang chọn </p> <br />
              <p> Đã bán </p>
            </div>
          </div>
        </div>

        {/* Bảng thứ hai */}
        <div>
          <div className="pickup-dropoff">
            <div className="pickup">
              <label> Điểm đón: </label>
              <select onChange={handleDropoffChange} value={pickupLocation}>
                <option value="Phú Yên"> Phú Yên </option>
              </select>
            </div>
            <div className="dropoff">
              <label> Điểm trả khách: </label>
              <select onChange={handleDropoffChange} value={dropOffLocation}>
                <option value="Bến Xe Miền Đông"> Bến Xe Miền Đông </option>
                <option value="Bến Xe Miền Tây"> Bến Xe Miền Tây </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="table-container2">
        <div className="selected-seats dstable">
          <p> Danh sách ghế đã chọn: {selectedSeats.join(", ")} </p>
          <p> Tổng số ghế đã chọn: {selectedSeats.length} </p>
          <p> Tổng tiền: {formatPrice(totalPrice)} </p>
          <p>
            {pickupLocation} <i className="fas fa-angle-double-right"> </i>
            {dropOffLocation}
          </p>
        </div>
        <div className="custom-box3 table-container2">
        
          <div className=""><p className="title3">Thông tin khách hàng</p>
            <div className="row">
            {thongtin&&thongtin.hoten !== " " ? (
               <input
               type="text3"
               className="custom-inp"
               value={thongtin.hoten}
               disabled
             />
               
                   
               
                ) : (
                  <input
                  type="text3"
                  className="custom-inp"
                  name="user_name"
                  placeholder="Họ và tên"
                />
                )}
             
            </div>
            <div className="row">
            {thongtin&&thongtin.hoten !== " " ? (
               <input
               type="text3"
               className="custom-inp"
               value={thongtin.sdt}
               disabled
             />
               
                   
               
                ) : (
                  <input
                  type="text3"
                  className="custom-inp"
                  name="user_name"
                  placeholder="Số điện thoại"
                  onChange={(event) => {
                    handleOnChangeInput(event, 'sdt');
                  }}
                  value={state.sdt}
                />
                )}
             
            </div>
            <div className="row">
            {thongtin&&thongtin.hoten !== " " ? (
               <input
               type="text3"
               className="custom-inp"
               value={thongtin.email}
               disabled
             />
               
                   
               
                ) : (
                  <input
                  type="text3"
                  className="custom-inp"
                  name="user_name"
                  placeholder="Email"
                />
                )}
             
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div className="col">
        <button className="custom-btn2" onClick={buttonDatve}> Đặt vé </button>
    </div>
    </main>

  );
}

function getSeatName(seatNumber) {
  if (seatNumber >= 1 && seatNumber <= 21) {
    // Ghế từ 1 đến 21 sẽ có tên "A1" đến "A21"
    return "A" + seatNumber;
  } else if (seatNumber >= 22 && seatNumber <= 42) {
    // Ghế từ 22 đến 42 sẽ có tên "B1" đến "B22"
    return "B" + (seatNumber - 21);
  } else {
    // Trường hợp khác, bạn có thể xử lý theo ý muốn, ví dụ "Unknown"
    return "Unknown";
  }
}

const DatXe = () => {
  return (
    <div>
      <HeaderFutaMain />
      <Booking />
      <Footer />
    </div>
  );
};

export default DatXe;