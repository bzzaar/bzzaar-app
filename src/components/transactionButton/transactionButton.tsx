import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./transactionButtonStyles";

export interface Props {
  transactionType?: string;
  isActive: boolean;
  isGlowing: boolean;
  isEthMintTransaction: boolean;
}

function TransactionButton(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return <button className={classes.TransactionButton}>Exchange</button>;
}

export default React.memo(TransactionButton);
