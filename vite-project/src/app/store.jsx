import { configureStore } from "@reduxjs/toolkit";
import sliceResult from './reduce/Slice';


const store = configureStore({
  reducer : {

    searching : sliceResult,
  }
});

export default store;