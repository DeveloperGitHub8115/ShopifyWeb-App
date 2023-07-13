import { createSlice } from "@reduxjs/toolkit";

const userSlice =createSlice({
       "name":"purchaselist",
       initialState:{
           userPurchase:[],
           addItem:[],
           isLoggedin:false,
           initialData :1

       },
       reducers:{
              setUserPurchase(state, action) {
                     state.userPurchase.push(action.payload);
                   },
                   
             login(state){
                    state.isLoggedin=true
                   
             },
             logout(state) {
                state.isLoggedin = false;
                state.userPurchase = [];
              }
              ,
              addItem(state, action) {
                    
                     state.addItem.push(action.payload);
                   },
               IncrementData(state,action){
                       state.initialData +=1; 

               } ,
               DicrementData(state,action){
                     state.initialData -=1; 

             }   
       }
})
export default userSlice.reducer;
export const { setUserPurchase, addItem,login, logout,IncrementData,DicrementData } = userSlice.actions;
