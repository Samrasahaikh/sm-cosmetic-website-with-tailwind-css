import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    id: number;
    name: string;
    img: string;
    price: number;
    quantity: number;
}

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const existingIndex = state.findIndex(
                (pro) => pro.id === action.payload.id
            );

            if (existingIndex === -1) {
                // Naya product add karein
                state.push({ ...action.payload, quantity: action.payload.quantity || 1 });
            } else {
                // Existing product ki quantity barhayein
                state[existingIndex].quantity += action.payload.quantity || 1;
            }
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            return state.filter((item) => item.id !== id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
