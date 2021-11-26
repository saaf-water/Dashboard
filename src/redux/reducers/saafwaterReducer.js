import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  dataLocation: { value: null },
  currentData: { data: [] },
  historyData: { data: [] },
};

const swDataSlice = createSlice({
  name: "swData",
  initialState,
  reducers: {
    setDataLocation: (state, { payload }) => {
      // save location in redux store.
      state.dataLocation.value = payload.value;
    },
    setCurrentData: (state, { payload }) => {
      // save current data to redux store.
      state.currentData.data = payload.data;
    },
    setHistoryData: (state, { payload }) => {
      // save history data to store.
      state.historyData.data = payload.data;
    },
  },
  extraReducers: {},
});

export const { setDataLocation, setHistoryData, setCurrentData } =
  swDataSlice.actions;

export default swDataSlice.reducer;
