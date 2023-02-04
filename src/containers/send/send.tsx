import React, { useContext } from "react";
import { StoreContext } from "../../store/store";
import TransactionModal from "../../components/transactionModal/transactionModal";

export interface Props {
  isActive: boolean;
  token: string;
  amount: number;
  slippage: any;
  address: string;
  setSellAmount: any;
  setToken: (token: string) => void;
}

function Send(props: Props) {
  const { state } = useContext(StoreContext);

  return (
    <TransactionModal
      setToken={props.setToken}
      amount={props.amount}
      setAmount={props.setSellAmount}
      type="send"
      isActive={props.isActive}
      slippageProps={props.slippage}
      token={props.token}
      message={state.walletConnected ? "" : "No funds detected. Connect wallet"}
    />
  );
}

export default React.memo(Send);
