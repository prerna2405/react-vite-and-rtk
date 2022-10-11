import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

// create slice automatically generates action creators with the same name as the reducers created for the slice

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;

// or the following way --
// export const { ordered, restocked } = cakeSlice.actions;
// export default cakeSlice.reducer;
