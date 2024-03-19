import { createSlice } from "@reduxjs/toolkit";

let initialState ={
    balance: JSON.parse(localStorage.getItem('balance')) || "1000", 
    history: JSON.parse(localStorage.getItem('history')) || [],
}

export const BankAction = createSlice({
    name: "Bank",
    initialState,
    reducers: {
        addMoney: (state, action)=>{
            let balance = (+state.balance+ +action.payload) + "";
            let history = [...state.history, action.payload];
            localStorage.setItem("balance", JSON.stringify(balance));
            localStorage.setItem("history", JSON.stringify(history));
            state.balance = balance;
            state.history = history;
        },
        getMoneyContent: (state, action)=>{
            let balance = (+state.balance- +action.payload.price) + "";
            let history = [...state.history, action.payload];
            localStorage.setItem("balance", JSON.stringify(balance));
            localStorage.setItem("history", JSON.stringify(history));
            state.balance = balance;
            state.history = history;
        }
    }
})
export const {addMoney, getMoneyContent} =  BankAction.actions;
export default BankAction.reducer