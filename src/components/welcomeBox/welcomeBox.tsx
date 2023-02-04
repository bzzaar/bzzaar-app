import React, { useContext, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./welcomeBoxStyles";

export interface Props {
  closeFunction: (value: any) => void;
}

function WelcomeBox(props: Props) {
  const { theme } = useContext(ThemeContext);
  const [showTerms, setShowTerms] = useState(false);
  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.info}>
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
          <div className={classes.paragraph}>
            Welcome to Bzzaar🐝, a decentralised two-way token vending machine
            where you may obtain BZZ tokens for use in the Swarm network and
            return your BZZ at a value in DAI or ETH dictated by supply and
            demand and the bonding curve formula. You may use BZZ to purchase
            postage stamps in order to host your content in the Swarm network or
            to speed up your Swarm uploads and downloads.
          </div>{" "}
          <div className={classes.subtitle}>
            To use Bzzaar🐝 safely, always make sure that:
          </div>
          <div className={classes.paragraph}>
            - The URL in your menu bar is{" "}
            <a className={classes.link} href="https://bzz.exchange.">
              {" "}
              https://bzz.exchange.
            </a>{" "}
            Bookmark it to be safe.{" "}
          </div>{" "}
          <div className={classes.paragraph}>
            - To check all amounts including gas price. Transactions with DAI
            will cost less since BZZ transactions with ETH will first be routed
            through Uniswap V2. Check the faqs for more information.
          </div>{" "}
          <div className={classes.paragraph}>
            - You interact with the correct contracts, both deployed before
            Swarms official launch date - June 21st 2021:
            <div className={classes.paragraph}>
              <a
                className={classes.link}
                href="https://etherscan.io/address/0x4f32ab778e85c4ad0cead54f8f82f5ee74d46904"
              >
                - Curve Contract: 0x4f32ab778e85c4ad0cead54f8f82f5ee74d46904
              </a>
            </div>
            <div className={classes.paragraph}>
              <a
                className={classes.link}
                href="https://etherscan.io/address/0x1e1609e1d33701fedf80aa13d6c09bc29f334d82"
              >
                - Eth Broker Contract:
                0x1e1609e1d33701fedf80aa13d6c09bc29f334d82
              </a>
            </div>
          </div>
          <div className={classes.subtitle}>
            {" "}
            Bzzaar🐝 is provided as is. Use at your own risk. By proceeding, you
            agree to the terms and conditions.
          </div>
        </>
      )}

      <div className={classes.buttonContainer}>
        <button
          className={classes.learnButton}
          onClick={() => setShowTerms(!showTerms)}
        >
          {showTerms ? "Back" : "T&Cs"}
        </button>
        <button
          className={classes.learnButton}
          onClick={() => props.closeFunction(false)}
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export default React.memo(WelcomeBox);
