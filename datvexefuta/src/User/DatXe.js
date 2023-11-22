import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./DatXe.scss";

import Footer from "../FooterFuta/Footer";
import HeaderFutaMain from "../HeaderFuta/HeaderFutaMain";

function Booking() {
  // Số lượng hàng và ghế trong mỗi hàng
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
                                <div className="seat-content">
                                  <img
                                    src="/image/ghe2.jpeg"
                                    alt="Occupied Seat"
                                    className="ds-img"
                                  />
                                </div>
                              ) : (
                                <div className="seat-content">
                                  <span className="seat-number">
                                    {seatName}
                                  </span>
                                  <img
                                    src="/image/ghe1.png"
                                    alt="Available Seat"
                                    className="ds-img"
                                  />
                                </div>
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
            <p> Tổng tiền: {formatPrice(selectedSeats.length * 255000)} </p>
            <p>
              {pickupLocation} <i className="fas fa-angle-double-right"> </i>
              {dropOffLocation}
            </p>
          </div>
          <div className="custom-box3 table-container2">
            <div className="">
              <p className="title3">Thông tin khách hàng</p>
              <div className="row">
                <input
                  type="text3"
                  className="custom-inp"
                  name="user_name"
                  placeholder="Họ và tên"
                />
              </div>
              <div className="row">
                <input
                  type="text3"
                  name="user_phonenumber"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="row">
                <input type="text3" name="user_email" placeholder="Email" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <button className="custom-btn2"> Đặt vé </button>
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
