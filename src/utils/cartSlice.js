import { createSlice } from "@reduxjs/toolkit";

const CartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addProduct(state,action){
            state.items.push(action.payload);
        },
        clearCart(state){
            state.items=[];
        },
        removeProduct(state){
            state.items.pop();
        }

    }

   
})
export const {addProduct,clearCart,removeProduct}=CartSlice.actions;
export default CartSlice.reducer;