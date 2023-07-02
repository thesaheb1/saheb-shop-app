import { createSlice } from "@reduxjs/toolkit";


const WishListSlice = createSlice({
    name:"wish",
    initialState:[],
    reducers:{
        addtowish:(state,action)=>{
            state.push(action.payload);
        },
        removefromwish:(state,action)=>{
            return state.filter((item)=>item.id !== action.payload);
        }
    }
})

export const {addtowish,removefromwish} = WishListSlice.actions;
export default WishListSlice.reducer;