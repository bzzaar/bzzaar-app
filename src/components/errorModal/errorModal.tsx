import React, { useContext, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import ClickAwayListener from "react-click-away-listener";
import { ReactComponent as InfoIcon } from "../../media/info.svg";
import { ReactComponent as Chevron } from "../../media/chevron-down-solid.svg";
import useStyles from "./errorModalStyles";
import { chainIdToNetwork } from "../../store/helpers/tokenHelpers";

function ErrorModal() {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles(theme);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => setShowDropdown(!showDropdown);
  const handleClickAway = () => setShowDropdown(false);

  const redDot = <div className={classes.redDot}></div>;

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.modal}>
        <div className={classes.overlay}></div>
        <div className={classes.modalContainer}>
          <div className={classes.index}></div>
          <div className={classes.header}>
            <div className={classes.icon}>
              <InfoIcon className={classes.info} />
              You are on an unsupported network.
            </div>
            <Chevron
              onClick={handleClick}
              className={`${classes.chevron} ${showDropdown && "rotate"}`}
            />
          </div>
          <div className={classes.subheader}>
            Please switch to{" "}
            <span className={classes.networkName}>
              {` ${chainIdToNetwork[process.env.REACT_APP_CHAIN_ID]} `}
            </span>{" "}
            to continue.
          </div>
          {showDropdown && (
            <div className={classes.dropdown}>
              <div className={classes.content}>
                Suggestions to avoid this error:
              </div>
              <div className={classes.list}>
                <div className={classes.smallContent}>
                  {redDot}Change network in your metamask wallet
                </div>
                <div className={classes.smallContent}>
                  {redDot}Use the Goerli test net to use gETH and test buying
                  gBZZ tokens
                </div>
                <div className={classes.smallContent}>
                  <span>{redDot}</span>To complete you transaction for getting
                  BZZ tokens, make sure you are connected to Mainnet
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default React.memo(ErrorModal);
