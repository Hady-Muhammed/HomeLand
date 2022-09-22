import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "ALL",
  type: "ALL",
  price: "ALL",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    SET_COUNTRY(state, { type, payload }) {
      state.country = payload;
    },
    SET_TYPE(state, { type, payload }) {
      state.type = payload;
    },
    SET_PRICE(state, { type, payload }) {
      state.price = payload;
    },
  },
});

export const { SET_COUNTRY, SET_TYPE, SET_PRICE } = filterSlice.actions;

export default filterSlice.reducer;
