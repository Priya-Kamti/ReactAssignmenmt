import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./StoreSlices/cartSlice";
import registerUserReducer from './StoreSlices/registrationSlice';
import  loggedInUserReducer  from "./StoreSlices/loggedInSlice";

const store = configureStore({
reducer:{
    cart : cartReducer,
    registerUser : registerUserReducer,
    loggedInUser:loggedInUserReducer,

}
});

export default store ;