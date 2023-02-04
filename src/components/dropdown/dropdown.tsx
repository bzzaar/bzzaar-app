import React, { useContext, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./dropdownStyles";
import ClickAwayListener from "react-click-away-listener";
import MenuChip from "../menuChip/menuChip";
import AddressBar from "../addressBar/addressBar";
import { Transition } from "react-transition-group";
import { StoreContext } from "../../store/store";
import { ethers } from "ethers";

export interface Props {
  logoutOfWeb3Modal: any;
  web3Modal: any;
  address: string;
  showDropdown: boolean;
  toggleDropdown: any;
  setShowDropdown: any;
  pendingTransactions: number;
  dropdownLength: number;
}

function Dropdown(props: Props) {
  const {
    address,
    logoutOfWeb3Modal,
    toggleDropdown,
    showDropdown,
    setShowDropdown,
    pendingTransactions,
  } = props;

  const { theme } = useContext(ThemeContext);
  const { state } = useContext(StoreContext);

  const [copied, setCopied] = useState(false);
  const [chainEtherscan, setChainEtherscan] = useState("");

  const hasPending = () =>
    pendingTransactions > 0 && <MenuChip label={shortAddress} />;
  const classes = useStyles({ ...theme, ...props });
  const shortAddress = `${address.slice(0, 6)}...${address.slice(
    address.length - 4
  )}`;

  const copyHandler = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const handleClickAway = () => {
    setShowDropdown(false);
  };

  const duration = 400;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out 200ms`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  useEffect(() => {
    if (state.provider && state.chainId !== 0) {
      const provider = new ethers.providers.Web3Provider(state.provider);
      provider.getNetwork().then((network) => {
        if (network.name !== "homestead") {
          setChainEtherscan(network.name + ".");
        }
      });
    }
    // eslint-disable-next-line
  }, [state.chainId]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.Dropdown}>
        <AddressBar
          clickFunction={toggleDropdown}
          address={address}
          showDropdown={showDropdown}
        />
        <Transition in={showDropdown} timeout={duration}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <>
                {hasPending()}
                <CopyToClipboard onCopy={copyHandler} text={address}>
                  <div>
                    <MenuChip label={copied ? "Copied!" : "Copy Address"} />
                  </div>
                </CopyToClipboard>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://${chainEtherscan}etherscan.io/address/${address}`}
                >
                  <MenuChip label="Tx History" />
                </a>
                <MenuChip
                  label="Disconnect"
                  clickFunction={logoutOfWeb3Modal}
                />
              </>
            </div>
          )}
        </Transition>
      </div>
    </ClickAwayListener>
  );
}

export default React.memo(Dropdown);
