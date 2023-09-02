//REDUX - TOOLKIT - VERSÃO MAIS MODERNA
// configureStore é utilizado com o redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import qualquerNome from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: qualquerNome,
    customer: customerReducer,
  },
});

export default store;
