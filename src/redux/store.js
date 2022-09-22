import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import loadSlice from "./slices/loadSlice";

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        load: loadSlice,
    },
})