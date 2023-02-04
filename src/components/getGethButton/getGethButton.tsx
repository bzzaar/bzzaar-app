import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import useStyles from "./getGethButtonStyles";

function GetGethButton() {
  const { state, actions } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);
  const [label, setLabel] = useState("");

  const classes = useStyles(theme);

  const handleClick = () => {
    getForConnectedWallet().then(() => getForReceiver());
  };

  const getForReceiver = async () => {
    if (state.receiver !== "") {
      await actions.getGeth(state.receiver);
    }
  };

  const getForConnectedWallet = async () => {
    const receiver = state.userAddress;
    await actions.getGeth(receiver);
  };
  // const network = chainIdToNetwork[state.chainId];
  const { gethPending, gethSuccess, gethFail } = state;

  useEffect(() => {
    if (gethPending === true) {
      setLabel("pending...");
    } else if (gethSuccess === true) {
      setLabel("success!");
      setTimeout(() => {
        actions.clearGethStatus();
        setLabel("Get G-ETH");
      }, 2000);
    } else if (gethFail === true) {
      setLabel("fail");
      setTimeout(() => {
        actions.clearGethStatus();
        setLabel("Try Again?");
      }, 2000);
    } else {
      setLabel("Get G-ETH");
    }
    // eslint-disable-next-line
  }, [gethPending, gethFail, gethSuccess]);

  return (
    <>
      <button
        disabled={state.lockUI}
        onClick={handleClick}
        className={classes.GetGethButton}
      >
        {label}
      </button>
    </>
  );
}

export default React.memo(GetGethButton);
