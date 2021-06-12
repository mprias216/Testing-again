import { createSlice } from '@reduxjs/toolkit';

//trying to make image and info appear after searching up something

export const resultsBarSlice = createSlice({
  name: 'resultsBar',
  initialState: {
    results: 0
  },
  reducers: {
    //use action to make things happen and appear
    setnewInfo: (state, action) => {
      state.value += action.newInfo;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setnewInfo } = resultsBarSlice.actions;

export default resultsBarSlice.reducer;