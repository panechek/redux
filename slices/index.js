import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '..slices/counterSlices.js';

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});