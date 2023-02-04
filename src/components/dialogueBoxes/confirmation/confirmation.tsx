import React, { useContext } from 'react';
import { ThemeContext } from '../../../store/themeContext/themeContext';
import useStyles from './confirmationStyles';
import PopupModal from '../../popupModal/popupModal';
import { QuestionMark, InfoIcon } from '../../icons/icons';
import { defaultCurrencies } from '../../../containers/modalContainer/modalContainer';

export interface Props {
  closeModal: () => void;
  confirmationAction: () => void;
  sellToken: string;
  sellAmount: number;
  buyAmount: number;
  buyToken: string;
}

function Confirmation(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  const heading =
    props.sellToken === defaultCurrencies.buy
      ? 'Confirm your sale'
      : 'Confirm your purchase';
  const received = props.buyAmount
    ? Number(props.buyAmount).toFixed(4)
    : '0.00';
  const maxSold = props.buyAmount
    ? Number(props.sellAmount).toFixed(4)
    : '0.00';

  return (
    <PopupModal closeModal={props.closeModal}>
      <div className={classes.Confirmation}>
        <div className={classes.orangeStrip} />
        <div className={classes.container}>
          <h1 className={classes.title}>
            <span>
              <InfoIcon className={classes.infoIcon} />
            </span>
            {heading}
          </h1>
          <p className={classes.prompt}>
            By clicking approve you are confirming this transaction
          </p>

          <div className={classes.row}>
            <div className={classes.left}>
              <QuestionMark className={classes.questionIcon} />
              <p className={classes.paragraphBig}>Received:</p>
            </div>
            <div
              className={classes.right}
            >{`${received} ${props.buyToken}`}</div>
          </div>

          <div className={classes.row}>
            <div className={classes.left}>
              <QuestionMark className={classes.questionIcon} />
              <p className={classes.paragraphBig}>Maximum Sold:</p>
            </div>
            <div
              className={classes.right}
            >{`${maxSold} ${props.sellToken}`}</div>
          </div>

          <button
            className={classes.actionButton}
            onClick={props.confirmationAction}
          >
            Confirm
          </button>
        </div>
      </div>
    </PopupModal>
  );
}

export default React.memo(Confirmation);
