/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as Sun } from '../../icons/Sun.svg';
import { ReactComponent as Moon } from '../../icons/Moon.svg';
import { ReactComponent as Refresh } from '../../media/refresh.svg';
import useStyles from './navbarStyles';
import Dropdown from '../../components/dropdown/dropdown';
import { StoreContext } from '../../store/store';
import { ThemeContext } from '../../store/themeContext/themeContext';
import { ContractContext } from '../../store/contractContext/contractContext';
import NetworkStatus from '../../components/networkStatus/networkStatus';
import RollingPrices from '../../components/rollingPrices/rollingPrices';
import { getPrices } from '../../store/services/graph';
import { useQuery } from '@apollo/client';
import { useViewport } from '../../store/themeContext/viewportContext';
import { amountToFixedNumber } from '../../store/helpers/tokenHelpers';
import Web3Modal from 'web3modal';
import Connect from '../../components/dialogueBoxes/connect/connect';

export interface Props {
  web3Modal: Web3Modal;
  connectToWallet: any;
  logoutOfWeb3Modal: any;
}

const Navbar = (props: Props) => {
  const { state, actions } = useContext(StoreContext);
  const { contracts } = useContext(ContractContext);
  const { theme, toggleLightAndDarkTheme } = useContext(ThemeContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const { logoutOfWeb3Modal, connectToWallet, web3Modal } = props;
  const classes = useStyles({ ...theme, ...props });
  const { width } = useViewport();
  const isMediumScreen = width > 1200;
  const isSmallScreen = width > 600;

  const { loading, data, refetch } = useQuery(getPrices, {
    pollInterval:
      parseInt(process.env.REACT_APP_GRAPH_POLLING_INTERVAL as string) || 10000,
  });

  const pendingTransactions = state.transactions.transactionsPending.length;
  const dropdownLength = pendingTransactions ? 5 : 4;

  useEffect(() => {
    if (state.provider && !state.transactionInProgress && state.userAddress) {
      actions.loadBalances({
        ethAddress: state.userAddress,
        contracts,
        provider: state.provider,
      });

      if (
        state.transactionFailure ||
        state.approvalFailed ||
        state.buyDone ||
        state.sellDone
      ) {
        setTimeout(() => {
          actions.clear();
        }, 3000);
      }
    }
    // eslint-disable-next-line
  }, [
    state.transactionFailure,
    state.approvalFailed,
    state.buyDone,
    state.sellDone,
    state.userAddress,
    state.chainId,
  ]);

  useEffect(() => {
    actions.loadConversions(contracts);

    if (state.provider && state.userAddress) {
      actions.loadBalances({
        ethAddress: state.userAddress,
        contracts,
        provider: state.provider,
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <nav className={classes.root}>
      <NetworkStatus
        isSmallScreen={isSmallScreen}
        isMediumScreen={isMediumScreen}
      />
      <div className={classes.balanceBar}>
        {loading && <p className={classes.loadingText}>Loading Prices...</p>}
        {!loading && data && (
          <RollingPrices
            EthPrice={
              data ? amountToFixedNumber(data?.ethPrices[0]?.price, 18, 6) : 0
            }
            DaiPrice={
              data ? amountToFixedNumber(data?.daiPrices[0]?.price, 18, 6) : 0
            }
          />
        )}

        <button className={classes.refreshButton} onClick={() => refetch()}>
          <Refresh className={classes.themeIcon} />
        </button>
        {theme.name !== "goerli" && (
          <div onClick={toggleLightAndDarkTheme}>
            {theme.name === 'light' ? (
              <Moon className={classes.themeIcon} />
            ) : (
              <Sun className={classes.themeIcon} />
            )}
          </div>
        )}
      </div>

      {web3Modal.cachedProvider && (
        <div className={classes.dropdownWrapper}>
          <Dropdown
            showDropdown={showDropdown}
            toggleDropdown={toggleDropdown}
            setShowDropdown={setShowDropdown}
            logoutOfWeb3Modal={logoutOfWeb3Modal}
            web3Modal={web3Modal}
            address={state.userAddress}
            pendingTransactions={pendingTransactions}
            dropdownLength={dropdownLength}
          />
        </div>
      )}
      {!state.userAddress && !web3Modal.cachedProvider && (
        <button className={classes.button} onClick={connectToWallet}>
          Connect Wallet
        </button>
      )}
      {!state.walletConnected && <Connect connectToWallet={connectToWallet} />}
    </nav>
  );
};

export default React.memo(Navbar);
