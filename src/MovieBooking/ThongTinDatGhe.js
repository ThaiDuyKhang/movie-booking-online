import React, { Component } from "react";
import { huyGheAction } from "./../Redux/actions/MovieBookingAction";
import { connect } from "react-redux";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <table className="table text-center">
          <thead>
            <tr class="headerTable">
              <th>Số ghế</th>
              <th>Giá tiền</th>
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
                  <td>
                    <span className="giaTien">{gheDangDat.gia}</span>
                    <button
                      className="delete"
                      onClick={() => {
                        this.props.huyGhe(gheDangDat.soGhe);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Tổng cộng</td>
              <td>
              {this.props.danhSachGheDangDat.reduce(
                  (tongTien, gheDangDat, index) => {
                    return (tongTien += gheDangDat.gia);
                  },0).toLocaleString()}
              </td>
            </tr>
            <tr>
              
            </tr>
          </tfoot>
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
const mapDispatchToProps = (dispatch) => {
  return {
    huyGhe: (soGhe) => {
      dispatch(huyGheAction(soGhe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
