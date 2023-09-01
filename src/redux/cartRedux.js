import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addCart: (state, action) => {
      if (state.products.find((p) => p._id === action.payload.id)) {
        state.products = state.products.map((p) => {
          if (p._id === action.payload.id) {
            p.quantity += action.payload.product.quantity;
            return p;
          }
          return p;
        });
      } else {
        state.products.push(action.payload.product);
        state.quantity += 1;
        state.total = state.products
          .map((p) => p.price * p.quantity)
          .reduce((first, sum) => (sum += first));
      }
    },

    remove: (state, action) => {
      state.products = state.products.filter(
        (p) => p._id !== action.payload.id
      );
      state.quantity -= 1;
      if (state.products.length != 0) {
        state.total = state.products
          .map((p) => p.price * p.quantity)
          .reduce((first, sum) => (sum += first));
      } else {
        state.total = 0;
      }
    },
    removeCart:(state)=>{
      state.products=[];
      state.total=0;
      state.quantity=0
    },
    decrease:(state,action)=>{
      state.products.map(p=> {
        if(p._id===action.payload && p.quantity!==1){
          p.quantity-=1;
          return p; 
        }
        return p;
       })
       state.total = state.products
       .map((p) => p.price * p.quantity)
       .reduce((first, sum) => (sum += first));
    },
    increase:(state,action)=>{
      state.products.map(p=> {
        if(p._id===action.payload ){
          p.quantity+=1;
          return p; 
        }
        return p;
       })
       state.total = state.products
       .map((p) => p.price * p.quantity)
       .reduce((first, sum) => (sum += first));
    },
  },
});

export const { addCart, remove, removeCart, decrease, increase } = cartSlice.actions;
export default cartSlice.reducer;
