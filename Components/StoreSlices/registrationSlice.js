import { createSlice } from "@reduxjs/toolkit";


const registrationSlice = createSlice({
    name:'RegisteredUser',
    initialState:{
        users:[{name:"Priya", phone:"567868",email:"kamti@gmail.com",password:"hello",cpassword:'hello',register:false}]
    },
    reducers:{
        registerUser:(state,action)=>{
                state.users.push(action.payload)
        }
    }
})

export const {registerUser } = registrationSlice.actions;

export default registrationSlice.reducer;