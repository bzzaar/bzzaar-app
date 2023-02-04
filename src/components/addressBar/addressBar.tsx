import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import useStyles from "./addressBarStyles";
import Jazzicon from "react-jazzicon";
import { ReactComponent as Chevron } from "../../media/chevron-down-solid.svg";
import { ReactComponent as Spinner } from "../../media/spinner2.svg";

export interface Props {
  address: string;
  showDropdown: boolean;
  clickFunction: any;
}

function AddressBar(props: Props) {
  const { address, showDropdown, clickFunction } = props;
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(StoreContext);

  const classes = useStyles({ ...theme, ...props });
  const shortAddress = `${address.slice(0, 6)}...${address.slice(
    address.length - 4
  )}`;

  const pending =
    (state.transactionInProgress && state.approvalPending) ||
    (state.transactionInProgress && state.sellPending) ||
    (state.transactionInProgress && state.buyPending);

  const hasPending = () => (pending ? `1 Pending` : shortAddress);

  const snippet = parseInt(address.slice(2, 10), 16);
  const showSpinner = <Spinner className={classes.spinner} />;
  const showJazzIcon = (
    <Jazzicon
      className={classes.icon}
      diameter={
        3.5 *
        parseFloat(
          window.getComputedStyle(document.body).getPropertyValue("font-size")
        )
      }
      seed={snippet}
    />
  );

  return (
    <button onClick={clickFunction} className={classes.AddressBar}>
      <div className={classes.iconContainer}>
        {pending ? showSpinner : showJazzIcon}
      </div>
      <p className={classes.address}>{hasPending()}</p>
      <div className={classes.dropdownBtn}>
        <Chevron className={`${classes.chevron} ${showDropdown && "rotate"}`} />
      </div>
    </button>
  );
}

export default React.memo(AddressBar);
