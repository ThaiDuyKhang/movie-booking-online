import React, { Component } from "react";
import {huyGheAction} from "./../Redux/actions/MovieBookingAction";
import { connect } from "react-redux";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <table className="table text-center">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-info-booking">
            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
              return (
                <tr key={index}>
                  <td>
                    <span className="soGheDangDat">{gheDangDat.soGhe}</span>
                    <img
                      src="./images/seat.svg"
                      alt="./images/seat.svg"
                      className="gheDangChon"
                      width={30}
                      height={30}
                    />
                  </td>
                  <td><span className="giaTien">{gheDangDat.gia}</span></td>
                  <td><button className="delete"
                  onClick={()=>{this.props.dispatch({
                    type: huyGheAction,
                    soGhe: gheDangDat.soGhe
                  })}}>
                    X
                    </button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.MovieBookingReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps, null)(ThongTinDatGhe);
