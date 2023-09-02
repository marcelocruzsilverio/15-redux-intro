import { useSelector } from "react-redux";

function Customer() {
  // para ler dados que estão na store usamos o useSelector
  const customer = useSelector((state) => state.customer.fullName);

  // state.customer.fullName => vem do customerSlice que foi colocado na store e recebeu o nome de customer

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
