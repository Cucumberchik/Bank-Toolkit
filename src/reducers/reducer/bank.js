import { createSlice } from "@reduxjs/toolkit";
let State ={
    balance: JSON.parse(localStorage.getItem('balance')) || "1000", 
    history: JSON.parse(localStorage.getItem('history')) || [],
    get: JSON.parse(localStorage.getItem('get')) || [],
    set: JSON.parse(localStorage.getItem("set")) || []
}
let initialState = {
    ...State,
    alert:State.balance < 200 ? true: false,
}
export const BankAction = createSlice({
    name: "Bank",
    initialState,
    reducers: {
        addMoney: (state, action)=>{
            let balance = (+state.balance+ +action.payload.replenish) + "";
            if(state.history.find(el=> el.date.slice(0, 19) === action.payload.date.slice(0, 19))){
              let history = state.history.map(el=> el.date.slice(0, 19) == action.payload.date.slice(0, 19) ?
               {...el, price: !!el.price ? el.price : "0", replenish: (+el.replenish + +action.payload.replenish)+''}
                :el );
              localStorage.setItem("history", JSON.stringify(history));
              state.history = history;
            }else{
              let history = [...state.history, { ...action.payload, price: "0" }];
              localStorage.setItem("history", JSON.stringify(history));
              state.history = history;
            }
            let data = [...state.get, action.payload];
            localStorage.setItem("set", JSON.stringify(data));
            localStorage.setItem("balance", JSON.stringify(balance));
            state.balance = balance;
            state.alert = state.balance < 200? true: false;
        },
        getMoneyContent: (state, action) => {
            const price = +action.payload.price; 
            let balance = (+state.balance - price) + "";
          
            if (state.history.find(el => el.date.slice(0, 19) === action.payload.date.slice(0, 19))) {
              let history = state.history.map(el =>
                el.date.slice(0, 19) == action.payload.date.slice(0, 19) ?
                { ...el, price: (+el.price + price) + "", replenish: !!el.replenish ? el.replenish : "0" }
                : el
              );
          
              localStorage.setItem("history", JSON.stringify(history));
              state.history = history;
            } else {
              let history = [...state.history, { ...action.payload, replenish: "0" }];
              localStorage.setItem("history", JSON.stringify(history));
              state.history = history;
            }
          
            let data = [...state.get, action.payload];
            localStorage.setItem("get", JSON.stringify(data));
            localStorage.setItem("balance", JSON.stringify(balance));
            state.balance = balance;
            state.get = data;
            state.alert = state.balance < 200? true: false;
          }
    }
})
export const {addMoney, getMoneyContent} =  BankAction.actions;
export default BankAction.reducer