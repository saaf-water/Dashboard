import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  currentData: { data: [] },
  historyData: { data: [] },
  historyMax: { data: [] },
};

const swDataSlice = createSlice({
  name: "swData",
  initialState,
  reducers: {
    setCurrentData: (state, { payload }) => {
      // save current data to redux store.
      state.currentData.data = payload.data;
    },
    setHistoryData: (state, { payload }) => {
      // save history data to store.
      state.historyData.data = payload.data;
    },
    setHistoryMax: (state, { payload }) => {
      // save max history data to store.
      state.historyMax.data = payload.data;
    },
  },
  extraReducers: {},
});

export const {
  setHistoryData,
  setCurrentData,
  setHistoryMax,
} = swDataSlice.actions;

export default swDataSlice.reducer;
