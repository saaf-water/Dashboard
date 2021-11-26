import { configureStore } from "@reduxjs/toolkit";
import saafwaterReducer from "./reducers/saafwaterReducer";

export default configureStore({
  reducer: { swData: saafwaterReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
