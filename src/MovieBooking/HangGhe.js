import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../Redux/actions/MovieBookingAction";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let cssSoGheDuocChon = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        cssSoGheDuocChon = "soGheDuocChon";
        disabled = true;
      }

      // console.log(this.props.danhSachGheDangDat);

      let cssGheDangDat = '';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat)=> gheDangDat.soGhe === ghe.soGhe);
      if (indexGheDangDat !== -1) {
        cssGheDangDat = 'gheDangChon';
      }
      
      return <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          disabled={disabled}
          className={`ghe`}
          key={index}
        >
          <span className={`soGhe ${cssSoGheDuocChon}`}>{ghe.soGhe}</span>
          <img
            src="./images/seat.svg"
            alt="./images/seat.svg"
            className={`img-ghe ${cssGheDaDat} ${cssGheDangDat}`}
            width={30}
            height={30}
          />
        </button>;
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rownumber" key={index}>{hang.soGhe}</button>;
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div>
          <span className="rowText">{this.props.hangGhe.hang}</span>
          {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div className="d-flex justify-content-center align-items-center">
          <span className="rowText">{this.props.hangGhe.hang}</span>
          {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return <div className="text-left mb-3">{this.renderHangGhe()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.MovieBookingReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
