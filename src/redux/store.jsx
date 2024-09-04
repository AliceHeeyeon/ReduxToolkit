import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./reducers/countSlice";
import todoSlice from "./reducers/todoSlice";

const store = configureStore({
    reducer: {
        count: countSlice.reducer,
        todo: todoSlice.reducer,
    }
})

export default store;