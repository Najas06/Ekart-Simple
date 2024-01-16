import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        // function logics or actions are defines here
        addtoWishList:(state,action)=>{
            state.push(action.payload)
        } 
    }
})

export const {addtoWishList} = wishListSlice.actions;
export default wishListSlice.reducer; 