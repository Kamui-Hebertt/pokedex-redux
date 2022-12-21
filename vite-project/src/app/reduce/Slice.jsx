import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
    value: "",
  
}

export const  Slice = createSlice({
  name: 'searching',
  initialState,
  reducers : {
 
      searchAction : (state, action) => {
          state.value = action.payload;
        },
     
    }
  }
);

export const { searchAction } = Slice.actions;

export default Slice.reducer;