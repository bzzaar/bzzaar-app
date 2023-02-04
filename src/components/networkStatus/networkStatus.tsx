import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { chainIdToNetwork } from "../../store/helpers/tokenHelpers";
import { StoreContext } from "../../store/store";
import useStyles from "./networkStatusStyles";
import { ReactComponent as NetBlue } from "../../media/network-dot-blue.svg";
import { ReactComponent as NetGreen } from "../../media/network-dot-green.svg";
import { ReactComponent as NetGrey } from "../../media/network-dot-grey.svg";
import { ReactComponent as NetOrange } from "../../media/network-dot-orange.svg";
import { ReactComponent as NetPurple } from "../../media/network-dot-purple.svg";
import { ReactComponent as NetRed } from "../../media/network-dot-red.svg";

export interface Props {
  isMediumScreen: boolean;
  isSmallScreen: boolean;
}

function NetworkStatus(props: Props) {
  const { state } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });

  const { chainId } = state;
  const networkName = chainIdToNetwork[chainId];

  const displayNetworkStatus = networkName ? (
    <div>Network: {networkName}</div>
  ) : (
    <div>Not connected</div>
  );

  function displayNetworkIcon(n: string) {
    switch (n) {
      case "mainnet":
        return <NetOrange className={`${classes.icon} ${classes.SvgOrange}`} />;
      case "ropsten":
        return <NetGreen className={`${classes.icon} ${classes.SvgGreen}`} />;
      case "rinkeby":
        return <NetPurple className={`${classes.icon} ${classes.SvgPurple}`} />;
      case "goerli":
        return <NetBlue className={`${classes.icon} ${classes.SvgBlue}`} />;
      case "hardhat":
        return <NetOrange className={`${classes.icon} ${classes.SvgYellow}`} />;
      case "":
        return <NetGrey className={`${classes.icon} ${classes.SvgGrey}`} />;
      default:
        return <NetRed className={`${classes.icon} ${classes.SvgRed}`} />;
    }
  }

  return (
    <div className={classes.networkStatusContainer}>
      <div className={classes.iconContainer}>
        {displayNetworkIcon(networkName)}
      </div>
      {props.isSmallScreen && (
        <div className={classes.networkStatusMessage}>
          {displayNetworkStatus}
        </div>
      )}
    </div>
  );
}

export default React.memo(NetworkStatus);
