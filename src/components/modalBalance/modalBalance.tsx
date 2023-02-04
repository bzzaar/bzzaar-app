import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./modalBalanceStyles";

export interface Props {
  amount: string;
}

function ModalBalance(props: Props) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.ModalBalance}>
      <div className={classes.heading}>Balance</div>
      <p className={classes.balance}>{props.amount}</p>
    </div>
  );
}

export default React.memo(ModalBalance);
