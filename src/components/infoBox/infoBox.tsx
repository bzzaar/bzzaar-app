import React, { useContext, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./infoBoxStyles";
import { ReactComponent as Exit } from "../../media/exit.svg";

export interface Props {
  closeFunction: (value: any) => void;
}

function InfoBox(props: Props) {
  const { theme } = useContext(ThemeContext);
  const [showTerms, setShowTerms] = useState(false);
  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.info}>
      <div
        className={classes.exitContainer}
        onClick={() => props.closeFunction(false)}
      >
        <Exit className={classes.exit} />
      </div>
      <div className={classes.heading}>Bzzaar</div>
      {showTerms ? (
        <>
          {" "}
          <div className={classes.subtitle}>
            Terms and Conditions (June 2021)
          </div>
          <div className={classes.paragraph}>
            This website is a simple user interface that is available as free,
            public, open-source or source-available software, and is only a
            possible way to display the decentralised peer-to-peer and
            peer-to-protocol Swarm bonding curve (“Bzzaar”), which can also be
            displayed directly by accessing the Ethereum blockchain or by any
            other user interface. Bzzaar is a smart contract deployed and
            running autonomously on the decentralized public Ethereum blockchain
            that can be used to swap BZZ ERC-20 utility tokens to DAI and ETH
            and vice versa. Your access and use of Bzzaar is at your own risk.
            Before engaging with Bzzaar, you should review the relevant
            documentation to make sure you understand how Bzzaar and the Swarm
            network works. Bzzaar does not have access to your private key and
            cannot initiate a transfer or otherwise access your tokens. We are
            not your brokers, intermediaries, agents, advisors, or custodians,
            and we do not have a fiduciary relationship or obligation to you
            regarding any other decisions or activities that you effect when
            using your wallet or a Bzzaar graphical user interface.
          </div>{" "}
          <div className={classes.paragraph}>
            Your engagement with the bonding curve involves various risks,
            including, but not limited to, the entire loss of your BZZ or
            DAI/ETH due to errors or defects in the code of the bonding curve or
            interruptions, attacks or disruptions of the bonding curve or the
            Swarm Network, losses while tokens are being supplied to Bzzaar and
            losses due to the fluctuation of prices of tokens in a trading pair
            or liquidity pool.
          </div>{" "}
          <div className={classes.paragraph}>
            This website, its content and any items obtained through Bzzaar are
            provided on an “as is” and “as available” basis, without any
            warranties of any kind, either express or implied.{" "}
          </div>{" "}
          <div className={classes.paragraph}>
            Although Swarm Association and its affiliated persons and entities
            contributed to some of the initial code for the bonding curve, they
            do not control or operate the bonding curve and have no access to or
            can interfere with the bonding curve, other than by stopping its
            operation which will lock its vault irreversibly, in case of
            critical events regarding the smart contract or the underlying
            assets (kill switch). To the fullest extent permitted by applicable
            law, in no event will any developer, person or entity involved
            creating Bzzaar the Swarm Project will be liable for damages of any
            kind, under any legal theory, arising out of or in connection with
            your use, or inability to use, the website, any other websites or
            app or dapps linked to it, any apps or dapps available, any content
            on the website or such other websites or apps or dapps or items
            obtained through the website or such other websites or apps or
            dapps, including any direct, indirect, special, incidental, or
            consequential damages, including but not limited to, loss of
            revenue, loss of profits, loss of business or anticipated savings,
            loss of use, loss of goodwill or loss of data, tokens, or anything
            else of value, even if foreseeable.
          </div>{" "}
        </>
      ) : (
        <>
          {" "}
          <div className={classes.subtitle}>What is Bzzaar</div>
          <div className={classes.paragraph}>
            Bzzaar is a gateway to exchange BZZ to ETH or DAI, or ETH and DAI to
            BZZ. Here you can find the Bzzaar documentation:
            <a
              className={classes.link}
              href="https://github.com/ethersphere/bzzaar-contracts"
            >
              {" "}
              https://github.com/ethersphere/bzzaar-contracts.
            </a>
          </div>
          <div className={classes.subtitle}>What is BZZ</div>
          <div className={classes.paragraph}>
            BZZ is the native token of Swarm network. See also
            <a className={classes.link} href="https://docs.ethswarm.org/">
              {" "}
              https://docs.ethswarm.org/.
            </a>
          </div>
          <div className={classes.subtitle}>
            What can I do to avoid a failed transaction
          </div>
          <div className={classes.paragraph}>
            - Check that the gas price is higher than average.
          </div>
          <div className={classes.paragraph}>
            - Raise the gas to speed up your transactions
          </div>
          <div className={classes.paragraph}>
            - Ensure that you set an appropriate slippage
          </div>
          <div className={classes.subtitle}>What is slippage</div>
          <div className={classes.paragraph}>
            The market is always moving. A delay exists between ordering the
            exchange of tokens and the actual execution of the order. In this
            delay, the exchange rate might change a bit. Slippage is the amount
            of change you allow.
          </div>
          <div className={classes.subtitle}>Is Bzzaar secure to use</div>
          <div className={classes.paragraph}>
            <a
              className={classes.link}
              href="https://github.com/ethersphere/bzzaar-contracts/tree/main/audit"
            >
              The code has been carefully tested, peer-reviewed and fully
              audited. Although this can be seen as a step forward in terms of
              security, it&apos;s recommended to use the protocol at your own
              risk.
            </a>
          </div>
        </>
      )}

      <div className={classes.buttonContainer}>
        <button
          className={classes.learnButton}
          onClick={() => setShowTerms(!showTerms)}
        >
          {showTerms ? "FAQs" : "T&Cs"}
        </button>
      </div>
    </div>
  );
}

export default React.memo(InfoBox);
