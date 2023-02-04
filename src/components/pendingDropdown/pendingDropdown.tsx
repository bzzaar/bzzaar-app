import React, { useContext } from "react";
import { ReactComponent as ExternalLink } from "../../media/external-link-alt-solid.svg";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./pendingDropdownStyles";
import Web3 from "web3";

export interface Props {
  transactions: any;
}

function PendingDropdown(props: Props) {
  const { transactions } = props;
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...theme, ...props });

  return (
    <div className={classes.root}>
      {transactions.map((transaction: any) => (
        <a
          key={transaction.hash}
          target="_blank"
          rel="noopener noreferrer"
          href={`https://etherscan.io/tx/${transaction.hash}`}
          className={classes.dropdownBtn}
        >
          <ExternalLink className={classes.icon} />
          <p className={classes.text}>
            {" "}
            {Web3.utils.fromWei(transaction.value, "ether")}
          </p>
        </a>
      ))}
    </div>
  );
}

export default React.memo(PendingDropdown);
