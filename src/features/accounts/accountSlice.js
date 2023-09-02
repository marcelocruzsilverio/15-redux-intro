// o createSlice nos permite usar o redux toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    //aqui é a parte que usava o switch
    // case "account/deposit":
    //   return {...state,  balance: state.balance + action.payload}
    // note que se juntar o name com o action creator temos exatamente o que tinhamos no outro código account/deposit
    deposit(state, action) {
      state.balance = state.balance + action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    requestLoan: {
      // para passar mais de um argumento na action creator precisamos fazer isso
      prepare(amount, purpose) {
        return {
          payload: {
            amount,
            purpose,
          },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        // primeiro argumento
        state.loan = action.payload.amount;
        // segundo argumento
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

console.log(accountSlice);

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amout, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amout };
  // está é a função assincrona que o redux vai executar antes de despachar a ação para a store porque primeiro precisamos converter o valor da moeda para o tipo tipo selecionado.

  return async function (dispatch, getState) {
    // API call
    dispatch({ type: "account/convertingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amout}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    // return action

    dispatch({ type: "account/deposit", payload: converted });
  };
}

export default accountSlice.reducer;
