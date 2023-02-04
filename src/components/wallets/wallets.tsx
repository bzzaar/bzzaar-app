import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../store/store";
import Navbar from "../../containers/navbar/navbar";
import { useContracts } from "../../store/contractContext/contractContext";
import Web3 from "web3";
import Blur from "../blur/blur";
import Web3Modal from "web3modal";

interface WalletProps {
  web3Modal: Web3Modal;
}

const Wallets = (props: WalletProps) => {
  const { actions, state } = useContext(StoreContext);
  const { contracts, updateContractsWeb3 } = useContracts();
  const { web3Modal } = props;

  const logoutOfWeb3Modal = async () => {
    await web3Modal.clearCachedProvider();

    // Fully reset state here to unconnected and flush it
    actions.clearBalance();
  };

  useEffect(() => {
    state.chainId === parseInt(process.env.REACT_APP_CHAIN_ID)
      ? actions.unlockUI()
      : actions.lockUI();
    // eslint-disable-next-line
  }, [state.chainId]);

  const connectToWallet = async () => {
    web3Modal.connect().then((w3mProvider: any) => {
      if (w3mProvider) {
        let web3: any;

        if (w3mProvider.isPortis) {
          web3 = new Web3(w3mProvider._portis.provider);
          w3mProvider._portis.changeNetwork("goerli");
          actions.setContracts(web3);
          updateContractsWeb3(web3);
          w3mProvider._portis.provider.enable().then(() => {
            w3mProvider._portis.onLogin(() => {
              setConnectedState(
                w3mProvider._portis.provider,
                w3mProvider._portis._selectedAddress
              );
            });
            w3mProvider._portis.isLoggedIn().then(() => {
              setConnectedState(
                w3mProvider._portis.provider,
                w3mProvider._portis._selectedAddress
              );
            });
          });
        } else {
          web3 = new Web3(w3mProvider);
          actions.setContracts(web3);
          updateContractsWeb3(web3);
          w3mProvider.enable().then(() => {
            setConnectedState(w3mProvider, w3mProvider.selectedAddress);
          });
        }

        let provider = null;

        if (w3mProvider.isLedger) provider = w3mProvider.currentProvider;
        else provider = w3mProvider;

        provider.on("accountsChanged", async (accounts: string[]) => {
          // Fully reset state here
          await web3Modal.clearCachedProvider();

          if (accounts.length === 0) {
            actions.clearBalance();

            return;
          }

          if (provider.isPortis) {
            provider._portis.provider.enable().then(() => {
              provider._portis.isLoggedIn().then(() => {
                setConnectedState(
                  provider._portis.provider,
                  provider._portis._selectedAddress
                );
              });
            });
          } else {
            provider.enable().then(() => {
              setConnectedState(provider, provider.selectedAddress);
            });
          }
        });

        // Subscribe to chainId change
        provider.on("chainChanged", () => {
          setConnectedState(provider, provider.selectedAddress);
        });

        // Subscribe to provider connection
        provider.on("connect", () => {
          setConnectedState(provider, provider.selectedAddress);
        });

        // Subscribe to provider disconnection
        provider.on("disconnect", async () => {
          await web3Modal.clearCachedProvider();
          // Fully reset state here to unconnected and flush it
          actions.clearBalance();
        });
      }
    });

    //TODO make sure if it's ok to use window.ethereum
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectToWallet();
    }
  }, []);
  const setConnectedState = async (provider: any, address: string) => {
    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    updateContractsWeb3(web3);
    actions.setProvider(provider);
    actions.setChainId(chainId);
    actions.setWalletAddress(address);
    actions.loadBalances({
      ethAddress: address,
      contracts,
      provider: provider,
    });
    actions.setWalletConnected(true);
  };

  return (
    <>
      <Navbar
        connectToWallet={connectToWallet}
        logoutOfWeb3Modal={logoutOfWeb3Modal}
        web3Modal={web3Modal}
      />
      <Blur locked={state.lockUI} />
    </>
  );
};

export default React.memo(Wallets);
