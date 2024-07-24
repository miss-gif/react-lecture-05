import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slices/loginSlice";
// reducer 를 철자를 조심하세요.
export default configureStore({
  reducer: {
    loginSlice,
  },
});
