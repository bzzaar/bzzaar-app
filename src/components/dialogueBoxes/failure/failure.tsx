import React, { useContext } from "react";
import { ThemeContext } from "../../../store/themeContext/themeContext";
import useStyles from "./failureStyles";
import PopupModal from "../../popupModal/popupModal";
import {
  QuestionMark,
  ExternalLink,
  Close,
  Dot,
  Chevron,
} from "../../icons/icons";
import { useStore } from "../../../store/store";

export interface Props {
  closeModal: () => void;
  etherscanLink?: string;
  reason?: string;
}

function Failure(props: Props) {
  const { state, actions } = useStore();
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });

  const closeModal = () => {
    props.closeModal();
    actions.clearFlags();
  };
  const {
    flags: { internalError, rejected, invalidParams, underflow },
  } = state;

  //? only show etherscan link if tx was mined.
  const showEtherscanLink = !(
    internalError ||
    rejected ||
    invalidParams ||
    underflow
  );

  return (
    <PopupModal closeModal={closeModal}>
      <div className={classes.Failure}>
        <div className={classes.redStrip}></div>
        <div className={classes.container}>
          <h1 className={classes.title}>
            <span>
              <Close className={classes.close} />
            </span>
            Failure!
          </h1>

          <button
            onClick={props.closeModal}
            className={classes.closeButtonContainer}
          >
            <Chevron className={classes.chevron} />
          </button>

          <div className={classes.row}>
            <div className={classes.left}>
              <QuestionMark className={classes.questionIcon} />

              <p className={classes.paragraphSmall}>
                {props.reason === "rejected"
                  ? "You rejected the transaction."
                  : "Your transaction did not go through."}
              </p>
            </div>
          </div>

          <div className={classes.row}>
            <div className={classes.left}>
              <div className={classes.questionIcon} />
              {showEtherscanLink && (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className={`${classes.link} ${classes.paragraphSmall}`}
                  href={props.etherscanLink}
                >
                  Go check etherscan
                  <ExternalLink className={classes.externalLink} />
                </a>
              )}
            </div>
          </div>

          <div className={classes.column}>
            <div className={classes.questionIcon} />
            <p className={classes.paragraphBig}>
              Suggestions to avoid a failed transaction:
            </p>
            <ul>
              <li className={classes.listItem}>
                <Dot className={classes.dot} />
                <p>
                  Check minimum gas limit is higher than average (at the time)
                </p>
              </li>
              <li className={classes.listItem}>
                <Dot className={classes.dot} />
                <p>
                  Provide more gas to speed up transactions if they are taking
                  long
                </p>
              </li>
              <li className={classes.listItem}>
                <Dot className={classes.dot} />
                <p>
                  Increase slippage percentage before confirming transaction
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PopupModal>
  );
}

export default React.memo(Failure);
