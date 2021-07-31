import React, { Component } from "react";
import "./assets/styles/style.css";
import danhSachGheData from "./../data/listSeat.json";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";

export default class MovieBooking extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="body"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
        }}
      >
        <div
          className="header"
          style={{
            position: "fixed",
            backgroundImage: "url('./images/background.png')",
            backgroundSize: "cover",
            height: "750px",
            width: "100%",
            opacity: ".3",
          }}
        ></div>
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="left col-2">
              <div
                style={{ width: "100%", margin: "0 auto" }}
                className="info-movie d-flex flex-column justify-content-center"
              >
                <div className="poster">
                  <img
                    className="poster-img"
                    src="./images/poster.jpg"
                    alt="poster"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <img
                    data-toggle="modal"
                    data-target="#trailer"
                    src="./images/play.svg"
                    alt="./images/play.svg"
                    className="icon-play" 
                    width={60}
                    height={60}
                  />
                  <div
                    class="modal fade"
                    id="trailer"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <iframe
                          width="1280"
                          height="720"
                          src="https://www.youtube.com/embed/3sxg1xXmd0I"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info">
                  <p className="movie-title">HOW TO SELL DRUGS ONLINE (FAST)</p>
                  <p className="time">
                    <img
                      src="./images/clock.svg"
                      alt="./images/clock.svg"
                      width={14}
                      height={14}
                    />{" "}
                    2 hours 59 mins
                  </p>
                  <p>
                    Creators: <span>Philipp Kässbohrer, Matthias Murmann</span>
                  </p>
                  <p>
                    Cast:{" "}
                    <span>
                      Maximilian Mundt, Danilo Kamperidis, Lena Klenke, Damian
                      Hardung, Lena Urzendowsky, Leonie Wesselow,...
                    </span>
                  </p>
                  <p>
                    Genres:{" "}
                    <span>
                      German, Crime TV Shows,Teen TV Shows, TV Dramas, TV
                      Comedies
                    </span>
                  </p>
                  <p>
                    Marurity rating: <span className="eighteenUpper">18+</span>
                    <span> Violence, sex, nudity, language, substances</span>
                  </p>
                  <p className="recommend">Recommended for ages 18 and up</p>
                </div>
              </div>
            </div>
            <div className="middle col-8 mt-4">
              <div className="mt-1 d-flex flex-column justify-content-center align-items-center">
                <div className="screen mt-1 d-flex flex-column justify-content-center align-items-center">
                  MÀN HÌNH
                </div>
                <div className="seatPlan mt-5">{this.renderHangGhe()}</div>
              </div>
              <div className="seatHint mt-5 d-flex justify-content-around">
                <div className="seatHint-1">
                  <img
                    src="./images/seat.svg"
                    alt="./images/seat.svg"
                    className="gheDuocChon"
                    width={15}
                    height={15}
                  />{" "}
                  <span>Ghế đã đặt</span>
                </div>
                <div className="seatHint-2">
                  <img
                    src="./images/seat.svg"
                    alt="./images/seat.svg"
                    className="gheDangChon"
                    width={15}
                    height={15}
                  />{" "}
                  <span>Ghế đang chọn</span>
                </div>
                <div className="seatHint-3">
                  <img
                    src="./images/seat.svg"
                    alt="./images/seat.svg"
                    className="gheChuaChon"
                    width={15}
                    height={15}
                  />{" "}
                  <span>Ghế trống</span>
                </div>
              </div>
            </div>
            <div className="right col-2">
              <div className="info-booking d-flex flex-column ">
                <div className="title text-center mb-4">Thông tin đặt chỗ</div>
                <div className="billing">
                  <ThongTinDatGhe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
