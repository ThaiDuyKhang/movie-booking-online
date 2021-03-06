import React, { Component } from "react";
import "./assets/styles/style.css";
import danhSachGheData from "./../data/listSeat.json";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";

export default class MovieBooking extends Component {
  buttonFocus = () => {
    const [isClick, setIsFocus] = false;
    window.onclick = () => {
      setIsFocus(window.onclick ? true : false);
      return () => (window.onclick = null);
    };
  };

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
                    className="modal fade"
                    id="trailer"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
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
                    Creators: <span>Philipp K??ssbohrer, Matthias Murmann</span>
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
              <div className="row d-flex justify-content-center">
                <div className=" ngayChieu col-6 row d-flex justify-content-center align-items-center">
                  <div className="text col-4">Cho??n nga??y chi????u:</div>
                  <div className="col-8">
                    <button className="btn-ngayChieu">06/10</button>
                    <button className="btn-ngayChieu active">07/10</button>
                    <button className="btn-ngayChieu">08/10</button>
                    <button className="btn-ngayChieu">09/10</button>
                    <button className="btn-ngayChieu">10/10</button>
                    <button className="btn-ngayChieu">11/10</button>
                  </div>
                </div>
                <div className=" gioChieu col-6 row d-flex justify-content-center align-items-center">
                  <div className="text col-4">Cho??n su????t chi????u:</div>
                  <div className="col-8">
                    <button className="btn-gioChieu">8:30</button>
                    <button className="btn-gioChieu">11:30</button>
                    <button className="btn-gioChieu">13:30</button>
                    <button className="btn-gioChieu">15:30</button>
                    <button className="btn-gioChieu">17:30</button>
                    <button className="btn-gioChieu active">19:30</button>
                  </div>
                </div>
              </div>
              <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
                <div className="screen mt-1 d-flex flex-column justify-content-center align-items-center">
                  M??N H??NH
                </div>
                <div className="seatPlan mt-5">{this.renderHangGhe()}</div>
              </div>
              <div className="seatHint mt-4 d-flex justify-content-around">
                <div className="seatHint-1">
                  <img
                    src="./images/seat.svg"
                    alt="./images/seat.svg"
                    className="gheDuocChon"
                    width={15}
                    height={15}
                  />{" "}
                  <span>Gh??? ???? ?????t</span>
                </div>
                <div className="seatHint-2">
                  <img
                    src="./images/seat.svg"
                    alt="./images/seat.svg"
                    className="gheDangChon"
                    width={15}
                    height={15}
                  />{" "}
                  <span>Gh??? ??ang ch???n</span>
                </div>
                <div className="seatHint-3">
                  <img
                    src="./images/seat.svg"
                    alt="./images/seat.svg"
                    className="gheChuaChon"
                    width={15}
                    height={15}
                  />{" "}
                  <span>Gh??? tr???ng</span>
                </div>
              </div>
            </div>
            <div className="right col-2 align-self-end">
              <div className="info-booking d-flex flex-column ">
                <div className="title text-center mb-4">TH??NG TIN ??????T CH????</div>
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
