import React, { useState, useContext } from "react";
import { ReactComponent as Spinner } from "../../media/spinner2.svg";
import ClickAwayListener from "react-click-away-listener";
import { ReactComponent as Chevron } from "../../media/chevron-down-solid.svg";
import useStyles from "./pendingButtonStyles";
import PendingDropdown from "../pendingDropdown/pendingDropdown";
import { ThemeContext } from "../../store/themeContext/themeContext";

export interface Props {
  transactions: any;
}

function PendingButton(props: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { transactionsPending } = props.transactions;
  const classes = useStyles({ ...theme, ...props });

  const handleClick = () => setShowDropdown(!showDropdown);
  const handleClickAway = () => setShowDropdown(false);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <Spinner className={classes.spinner} />
        <p className={classes.pending}>
          {transactionsPending.length} x Pending
        </p>
        <button className={classes.dropdownBtn} onClick={handleClick}>
          <Chevron
            className={`${classes.chevron} ${showDropdown && "rotate"}`}
          />
        </button>
        {showDropdown && <PendingDropdown transactions={transactionsPending} />}
      </div>
    </ClickAwayListener>
  );
}

export default React.memo(PendingButton);
