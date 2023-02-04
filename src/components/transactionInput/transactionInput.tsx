import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./transactionInputStyles";

export interface Props {
  type: "send" | "receive";
  amount: number;
  setAmount: any;
  disabled: boolean;
  defaultCurrency: string;
}

function TransactionInput(props: Props) {
  const { theme } = useContext(ThemeContext);
  const { amount, setAmount, disabled, type, defaultCurrency } = props;
  const classes = useStyles({ ...props, ...theme });
  const heading = type === "send" ? "From (est.)" : "To";

  const handleChange = (e: any) =>
    // TODO: must alter to parseFloat and change regex to accept decimal point

    setAmount({
      amount:
        parseInt(e.target.value.replace(/[^0-9]/g, "").replace(/^0+/, "")) || 0,
      currency: defaultCurrency,
    });

  return (
    <div className={classes.TransactionInput}>
      <div className={classes.heading}>{heading}</div>
      <input
        className={classes.input}
        type="text"
        value={amount}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
}

export default React.memo(TransactionInput);
