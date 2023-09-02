import { useState } from "react";
import { useDispatch } from "react-redux";
// esse importe veio das actions creators funcitons
import { createCustomer } from "./customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  // para dispachar uma ação no react, para criar um cliente, precisamos do useDipatch hook
  const dispatch = useDispatch();

  function handleClick() {
    // se não houver fullName ou nationalID termine a função
    if (!fullName || !nationalId) return;
    // aqui estamos dispachando a ação de criar um cliente através de uma action creator function
    dispatch(createCustomer(fullName, nationalId)); // fullName e nationalID vem do useState
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
