import { datGheType, huyGheType } from "../types/MovieBookingType"

export const datGheAction = (ghe) =>{
    return {
        type: datGheType,
        ghe,
    }
}
export const huyGheAction = (soGhe) =>{
    return {
        type: huyGheType,
        soGhe,
    }
}