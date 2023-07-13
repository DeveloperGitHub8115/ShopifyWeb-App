import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./Slice/userSlices";

const store = configureStore({
  reducer: {
    userPurchase: userSlices,
  },
});

export default store;
