import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((state) => state.account.balance);

  return (
    <div className="balance">
      <div>{formatCurrency(balance)}</div>
    </div>
  );
}

export default BalanceDisplay;
