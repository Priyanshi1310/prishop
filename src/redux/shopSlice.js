import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  products: [],
  wishProducts:[],
};

export const shopSlice = createSlice({
  name: "Prishop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        console.log("hii1");
        item.quantity += action.payload.quantity;
      } else {
        console.log("hii2");
        state.products.push(action.payload);
      }
    },

    addToWishlist: (state, action) => {
      const item = state.wishProducts.find(
        (item) => item._id === action.payload._id
      );

      if (item) {
        alert('Product Already Exist');
      } else {
        state.wishProducts.push(action.payload);
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },

    deleteWishItem: (state, action) => {
      state.wishProducts = state.wishProducts.filter(
        (item) => item._id !== action.payload
      );
    },

    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  addToWishlist,
  deleteWishItem,
} = shopSlice.actions;
export default shopSlice.reducer;
