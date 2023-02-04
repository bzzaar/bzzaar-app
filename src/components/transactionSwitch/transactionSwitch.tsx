import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { ReactComponent as Icon } from "../../media/switcher.svg";
import useStyles from "./transactionSwitchStyles";

export interface Props {
  clickFunction: () => void;
}

function TransactionSwitch(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <button className={classes.TransactionSwitch} onClick={props.clickFunction}>
      <Icon className={classes.icon} />
    </button>
  );
}

export default React.memo(TransactionSwitch);
