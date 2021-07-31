import { datGheType, huyGheType } from "../types/MovieBookingType";

const stateDefault = {
  danhSachGheDangDat:[],
};

const MovieBookingReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case datGheType: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      state.danhSachGheDangDat = state.danhSachGheDangDatUpdate;
      return { ...state };
    }

    case huyGheType: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = state.danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default MovieBookingReducer;
