import React from 'react';
import { useTheme } from '../../../store/themeContext/themeContext';
import { InfoIcon } from '../../icons/icons';
import PopupModal from '../../popupModal/popupModal';
import useStyles from './connectStyles';

export interface Props {
  connectToWallet: any;
}

function Connect({ connectToWallet }: Props) {
  const { theme } = useTheme();
  const classes = useStyles(theme);

  const handleClick = () => {
    connectToWallet();
  };

  return (
    <PopupModal>
      <div className={classes.Connect}>
        <div className={classes.orangeStrip} />
        <div className={classes.container}>
          <h1 className={classes.title}>
            <span>
              <InfoIcon className={classes.infoIcon} />
            </span>
            Connect your wallet
          </h1>
          <p className={classes.paragraph}>
            In order to use this website to trade assets, please connect to a
            wallet that supports Ethereum network (Metamask preferably).
          </p>
          <button className={classes.actionButton} onClick={handleClick}>
            Connect Wallet
          </button>
        </div>
      </div>
    </PopupModal>
  );
}

export default Connect;
