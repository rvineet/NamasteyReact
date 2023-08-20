import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action) => {
            //mutating our state(directly modifying our state) here
            //Redux Toolkit uses IMMER behind the scene to make the state immutable
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart:  (state) => {
            //RTK- either mutate the exisiting state or return a ne w state.
            state.items.length = 0; //original state =>items:[] //either you can do this or
            // return {items: []};  //or you can do like this //original state =>items:[]
            //object will be replaced by the original state
        } 
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;