import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        // function logics or actions are defines here
        addtoWishList:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishList:(state,action)=>{
            return state.filter(item=>item.id != action.payload)
        } 
    }
})

export const {addtoWishList,removeFromWishList} = wishListSlice.actions;
export default wishListSlice.reducer; 
