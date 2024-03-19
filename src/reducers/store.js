import { configureStore } from "@reduxjs/toolkit";
import bank from "./reducer/bank";


export const store = configureStore({
    reducer: bank
})