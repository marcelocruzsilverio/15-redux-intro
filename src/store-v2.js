// importando as reducersfunction para dentro da store

import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

//passando os reducers para o rootReducer
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// aplicando o middleware dentro da store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
