import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./walletConnectButtonStyles";

export interface Props {
  label: string;
  description: string;
  Icon: any;
  clickFunction: any;
}

function WalletConnectButton(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const { Icon } = props;

  return (
    <button
      onClick={props.clickFunction}
      className={classes.WalletConnectButton}
    >
      <div className={classes.iconContainer}>
        <Icon classname={classes.icon} />
      </div>
      <div className={classes.textContainer}>
        <h3 className={classes.label}>{props.label}</h3>
        <h4 className={classes.description}>{props.description}</h4>
      </div>
    </button>
  );
}

export default React.memo(WalletConnectButton);
