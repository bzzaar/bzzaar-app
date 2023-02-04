import React, { useEffect, useState } from "react";
import { useTheme } from "../../../store/themeContext/themeContext";
import useStyles from "./successStyles";
import PopupModal from "../../popupModal/popupModal";
import { QuestionMark, ExternalLink, Check } from "../../icons/icons";
import { ethers } from "ethers";
import { useStore } from "../../../store/store";
import { useContracts } from "../../../store/contractContext/contractContext";

export interface Props {
  closeModal: () => void;
  newBalance: string;
  etherscanLink: string;
  data: any;
  sellToken: string;
  buyToken: string;
}

function Success(props: Props) {
  const { theme } = useTheme();
  const { state, actions } = useStore();
  const { contracts } = useContracts();
  const [amounts, setAmounts] = useState({ spent: "0.00", received: "0.00" });
  const classes = useStyles({ ...props, ...theme });
  const { newBalance, etherscanLink, data, sellToken, buyToken } = props;

  const tokenToDecimals = {
    dai: 16,
    eth: 18,
    bzz: 18,
  };

  const closeModal = () => {
    props.closeModal();
    actions.clearFlags();
  };

  const format = (amount: ethers.BigNumberish, decimals = 18): number => {
    return amount ? Number(ethers.utils.formatUnits(amount, decimals)) : 0;
  };

  const calculateSpentAndReceived = () => {
    if (data?.blockHash) {
      if (sellToken === "BZZ" && buyToken === "DAI") {
        const { amount, rewardReceived } =
          props.data.events.burnTokens.returnValues;

        return {
          spent: format(amount, 16).toFixed(3),

          received:
            format(
              rewardReceived,
              tokenToDecimals[sellToken.toLowerCase()]
            ).toFixed(3) || "0.00",
        };
      }

      if (sellToken === "BZZ" && buyToken === "ETH") {
        const { amount, ethReceivedForDai } =
          data.events.burnTokensWithEth.returnValues;

        return {
          spent: format(amount, 16).toFixed(3) || "0.00",
          received: format(ethReceivedForDai, 18).toFixed(3) || "0.00",
        };
      }

      if (sellToken === "DAI" && buyToken === "BZZ") {
        const { pricePaid, amount } = props.data.events.mintTokens.returnValues;

        return {
          spent: format(pricePaid, 18).toFixed(3) || "0.00",
          received: format(amount, 16).toFixed(3),
        };
      }

      if (sellToken === "ETH" && buyToken === "BZZ") {
        const { EthTradedForDai, amount } =
          data.events.mintTokensWithEth.returnValues;

        return {
          spent: format(EthTradedForDai, 18).toFixed(3) || "0.00",
          received: format(amount, 16).toFixed(3),
        };
      }
    } else {
      return {
        spent: "0.00",
        received: "0.00",
      };
    }
  };

  useEffect(() => {
    actions.loadBalances({
      ethAddress: state.userAddress,
      contracts,
      provider: state.provider,
    });
    const { spent, received } = calculateSpentAndReceived();
    setAmounts({ spent, received });
    // eslint-disable-next-line
  }, [data]);

  const gasUsed = data ? props.data?.gasUsed : "0";
  const { spent, received } = amounts;

  return (
    <PopupModal closeModal={closeModal}>
      <div className={classes.Success}>
        <div className={classes.strip}></div>
        <div className={classes.container}>
          <h1 className={classes.title}>
            <span>
              <Check className={classes.check} />
            </span>
            Success!
          </h1>

          <div className={classes.row}>
            <div className={classes.left}>
              <div className={classes.questionIcon} />
              <p className={classes.paragraphSmall}>
                Your transaction went through.
              </p>
            </div>
          </div>

          <div className={classes.row}>
            <div className={classes.left}>
              <QuestionMark className={classes.questionIcon} />
              <p className={classes.paragraphBig}>Gas Used:</p>
            </div>
            <div className={classes.right}>{`${gasUsed} wei`}</div>
          </div>

          <div className={classes.row}>
            <div className={classes.left}>
              <QuestionMark className={classes.questionIcon} />
              <p className={classes.paragraphBig}>Received:</p>
            </div>
            <div className={classes.right}>
              {received} {buyToken.toUpperCase()}
            </div>
          </div>

          <div className={classes.row}>
            <div className={classes.left}>
              <QuestionMark className={classes.questionIcon} />
              <p className={classes.paragraphBig}>Maximum Sold:</p>
            </div>
            <div className={classes.right}>
              {spent} {sellToken.toUpperCase()}
            </div>
          </div>

          <div className={`${classes.row} ${classes.bottom}`}>
            <div className={classes.left}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className={classes.link}
                href={etherscanLink}
              >
                Go check etherscan
                <ExternalLink className={classes.externalLink} />
              </a>
            </div>
            <div className={classes.right}>
              <p className={classes.paragraphBig}>New Balance: </p>
              {newBalance || "0.00"}
            </div>
          </div>
        </div>
      </div>
    </PopupModal>
  );
}

export default React.memo(Success);
