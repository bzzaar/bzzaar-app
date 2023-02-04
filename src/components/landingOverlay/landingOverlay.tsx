import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./landingOverlayStyles";
import Wallets from "../wallets/wallets";
import WelcomeBox from "../../components/welcomeBox/welcomeBox";
import { Transition } from "react-transition-group";
import Web3Modal from "web3modal";
import { defaultStyle, transitionStyles } from "./transitions";

// async function poll(fn, fnCondition, ms) {
//   let result = await fn();
//   while (fnCondition(result)) {
//     await wait(ms);
//     result = await fn();
//   }
//   return result;
// }

function wait(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const LandingOverlay = () => {
  const { theme } = useContext(ThemeContext);
  const [displayWelcome, setDisplayWelcome] = useState(false);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const classes = useStyles(theme);

  useEffect(() => {
    const hasAcceptedTerms = window.localStorage.getItem("hasAcceptedTerms");

    if (!hasShownWelcome && hasAcceptedTerms === null) {
      wait(3000).then(() => {
        const dateString = Date.now().toString();
        window.localStorage.setItem("hasAcceptedTerms", dateString);
        setDisplayWelcome(true);
        setHasShownWelcome(true);
      });
    }
    // eslint-disable-next-line
  }, []);

  const providerOptions = {
    // walletconnect: {
    // 	display: {
    // 		description: 'Scan with walletConnect',
    // 	},
    // 	package: WalletConnectProvider, // required
    // 	options: {
    // 		infuraId: `${process.env.REACT_APP_INFURA_ID}`, // required
    // 	},
    // },
    // torus: {
    //   package: Torus, // required
    //   options: {
    //     networkParams: {
    //       chainId: 5, // optional
    //     },
    //     config: {
    //       buildEnv: "development" // optional
    //     }
    //   }
    // }
    // fortmatic: {
    //   display: {
    //     description: "Connect your Fortmatic account",
    //   },
    //   package: Fortmatic, // required
    //   options: {
    //     key: `${process.env.REACT_APP_FORTMATIC_ID}`, // required
    //   },
    // },
    // portis: {
    //   display: {
    //     description: "Connect your Portis account",
    //   },
    //   //@ts-ignore
    //   package: portis, // required
    //   options: {
    //     id: `${process.env.REACT_APP_PORTIS_ID}`,// required
    //   }
    // },
    // "custom-Ledger": {
    //   display: {
    //     logo: LedgerIcon,
    //     name: "Ledger Provider",
    //     description: "Connect to your Ledger account",
    //   },
    //   package: ProviderEngine,
    //   options: {
    //     chainId: 5,
    //     rpcUrl: `${process.env.REACT_APP_INFURA_ENDPOINT}`,
    //     baseDerivationPath:  "44'/60'/0'/0'",
    //     pollingInterval: 12000,
    //     requestTimeoutMs: 5000
    //   },
    //   connector: async (ProviderPackage, options) => {
    //     try {
    //       var ledgerWalletSubProvider = await new LedgerWalletSubprovider();
    //       if(!ledgerWalletSubProvider.isSupported){
    //         console.log("Ledger is NOT supported in this browser")
    //       }
    //       else {
    //         var engine = new ProviderPackage(options);
    //         var web3 = new Web3(engine);
    //         var webProvider = new Web3(new Web3.providers.HttpProvider(options.rpcUrl));
    //         var ledgerAccounts = await poll(web3.eth.getAccounts, result => result === "", 5000)
    //         return { engine, currentProvider: web3.currentProvider, givenProvider: webProvider.currentProvider, isLedger : true, selectedAddress: ledgerAccounts[0]};
    //       }
    //     }catch(error){
    //       console.log("ERROR CONNECTING TO LEDGER: ", error)
    //     }
    //   },
    // }
  };

  const web3Modal = new Web3Modal({
    providerOptions,
    cacheProvider: true,
    theme: {
      background: theme.background1,
      main: theme.textColor,
      secondary: theme.textColor,
      border: theme.background2,
      hover: theme.background2,
    },
  });

  return (
    <div className={classes.LandingOverlay}>
      <Wallets web3Modal={web3Modal} />
      <Transition in={displayWelcome} timeout={200} unmountOnExit>
        {(stateWelcomeBox: any) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[stateWelcomeBox],
            }}
          >
            <WelcomeBox closeFunction={(value) => setDisplayWelcome(value)} />
          </div>
        )}
      </Transition>
    </div>
  );
};

export default React.memo(LandingOverlay);
