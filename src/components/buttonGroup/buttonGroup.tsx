import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import ApproveButton from "../approveButton/approveButton";
import TransactionButton from "../transactionButton/transactionButton";
import useStyles from "./buttonGroupStyles";

export interface Props {
  transactionType: string;
  isEthMintTransaction: boolean;
  isApproveActive: boolean;
  isActionActive: boolean;
  isActionGlowing: boolean;
  isApproveGlowing: boolean;
  approveFunction: () => void;
  finalFunction: () => void;
}

function ButtonGroup(props: Props) {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(StoreContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.buttonGroup}>
      <div
        className={classes.transaction}
        onClick={props.isActionActive ? props.finalFunction : null}
      >
        <TransactionButton
          isActive={props.isActionActive && !state.lockUI}
          isGlowing={props.isActionGlowing}
          transactionType={props.transactionType}
          isEthMintTransaction={props.isEthMintTransaction}
        />
      </div>
      <div
        className={classes.approve}
        onClick={props.isApproveActive ? props.approveFunction : null}
      >
        <ApproveButton
          isGlowing={props.isApproveGlowing}
          isActive={props.isApproveActive && !state.lockUI}
        />
      </div>
    </div>
  );
}

export default React.memo(ButtonGroup);
