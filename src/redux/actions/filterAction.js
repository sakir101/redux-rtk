import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes"

export const toggleBrand = (brand) => {
    return {
        type: TOGGLE_BRAND,
        payload: brand,
    }
}

export const toggleStock = ()=>{
    return {
        type: TOGGLE_STOCK,
        
    }
}