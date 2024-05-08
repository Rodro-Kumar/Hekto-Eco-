import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

export const Slice = createSlice({
  name: "productSlice",
  initialState: initialState,
  reducers: {
    setProducts: (state, payload) => {
      state.data = payload;
    },
  },
});

const fetchdata = () => {
  return async function getData(dispatch, getState) {
    try {
      const data = await fetch("https://dummyjson.com/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    fetchdata();
  };
};

export const { setProducts } = Slice.actions;

export default Slice.reducer;
