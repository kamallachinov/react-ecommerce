import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1; //cart quantity
            state.products.push(action.payload);  //action payload burda products arrayina elave elediyimiz productdi, hansi ki add btn'e basib edeceyik
            state.totalPrice += action.payload.price * action.payload.quantity
        }
    }
})

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
