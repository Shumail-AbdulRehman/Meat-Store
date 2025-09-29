import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalQuantity: JSON.parse(localStorage.getItem("totalQuantity")) || 0,
  totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { product, quantity } = action.payload;

      const id = product.id || product.$id;

      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice += Number(product.price) * quantity;
      } else {
        state.items.push({
          id,
          title: product.title,
          price: Number(product.price), 
          unit: product.unit,
          quantity,
          totalPrice: Number(product.price) * quantity,
          image: product.image,
        });
      }

      state.totalQuantity += quantity;
      state.totalPrice += Number(product.price) * quantity;

      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    removeItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.items = state.items.filter(item => item.id !== id);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        item.quantity++;
        item.totalPrice += item.price;
        state.totalQuantity++;
        state.totalPrice += item.price;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        item.quantity--;
        item.totalPrice -= item.price;
        state.totalQuantity--;
        state.totalPrice -= item.price;

        if (item.quantity === 0) {
          state.items = state.items.filter(i => i.id !== id);
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      localStorage.removeItem("cartItems");
      localStorage.removeItem("totalQuantity");
      localStorage.removeItem("totalPrice");
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
