import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./slippageChipStyle";
import { StoreContext } from "../../store/store";

export interface Props {
  value: number;
  isActive: boolean;
  clickFunction: any;
}

function SlippageChip(props: Props) {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(StoreContext);

  const classes = useStyles({ ...props, ...theme });
  const handleClick = () =>
    props.clickFunction &&
    !state.transactionInProgress &&
    props.clickFunction(props.value);

  return (
    <button
      onClick={handleClick}
      className={classes.SlippageChip}
    >{`${props.value}%`}</button>
  );
}

export default React.memo(SlippageChip);
