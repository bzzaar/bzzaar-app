import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import TransactionInput from "../transactionInput/transactionInput";
import TokenSwitcher from "../tokenSwitcher/tokenSwitcher";
import TokenChip from "../tokenChip/tokenChip";
import useStyles from "./transactionModalStyles";
import SlippageContainer from "../slippageContainer/slippageContainer";
import ModalBalance from "../modalBalance/modalBalance";
import ToastMessage from "../toastMessage/toastMessage";

export interface Props {
  type: "send" | "receive";
  isActive: boolean;
  amount: number;
  setAmount: any;
  slippageProps?: any;
  token: string;
  message: string;
  setToken: (token: string) => void;
}

function TransactionModal(props: Props) {
  const { state } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });
  const { setToken, amount, setAmount, isActive, type, slippageProps, token } =
    props;

  // if thhis amount is a BigInt (larger than (2^52 - 1) ), then the output will look incorrect due to scientific number notation. This will not realistically happen in production.
  const balanceForToken = parseFloat(
    state.balances[`${token.toLowerCase()}Balance`]
  ).toFixed(2);

  return (
    <div className={classes.TransactionModal}>
      <div className={classes.index}></div>
      <h2 className={classes.title}>{props.type}</h2>
      <div className={classes.tokenSwitcherContainer}>
        {isActive ? (
          <TokenChip collapsible={false} isActive={true} token="BZZ" />
        ) : (
          <TokenSwitcher
            amount={amount}
            setAmount={setAmount}
            activeToken={token}
            disabled={state.lockUI}
            setToken={setToken}
          />
        )}
      </div>
      <div className={classes.inputContainer}>
        <TransactionInput
          amount={amount}
          defaultCurrency={token}
          setAmount={setAmount}
          type={props.type}
          disabled={
            !props.isActive || state.transactionInProgress || state.lockUI
          }
        />
      </div>
      <div className={classes.toastContainer}>
        <ToastMessage message={props.message} />
      </div>

      <div className={classes.balanceContainer}>
        <ModalBalance amount={balanceForToken} />
      </div>

      {type === "send" && (
        <div className={classes.slippageContainerContainer}>
          <SlippageContainer slippageProps={slippageProps} />
        </div>
      )}
    </div>
  );
}

export default React.memo(TransactionModal);
