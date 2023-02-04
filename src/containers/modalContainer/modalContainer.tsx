import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../store/themeContext/themeContext';
import { StoreContext } from '../../store/store';
import useStyles from './modalContainerStyles';
import TransactionSwitch from '../../components/transactionSwitch/transactionSwitch';
import Send from '../send/send';
import Receive from '../receive/receive';
import ButtonGroup from '../../components/buttonGroup/buttonGroup';
import Message from '../../components/message/message';
import { ReactComponent as InfoIcon } from '../../media/info.svg';
import InfoBox from '../../components/infoBox/infoBox';
import ErrorModal from '../../components/errorModal/errorModal';
import web3 from 'web3';
import { Transition } from 'react-transition-group';
import { defaultStyle, transitionStyles } from './transitions';
import { ContractContext } from '../../store/contractContext/contractContext';
import { Confirmation, Failure, Success } from '../../components/dialogueBoxes';
import useInterval from '../../store/hooks/useInterval';

const getQuery = () => {
  if (typeof window !== 'undefined') {
    return new URLSearchParams(window.location.search);
  }

  return new URLSearchParams();
};

const getQueryParamValue = (key: string): string | null => {
  return getQuery().get(key);
};

const defaultSlippageOptions = [0.1, 0.5, 1];

export const defaultCurrencies = {
  sell: 'ETH',
  buy: 'BZZ',
};

function ModalContainer() {
  const { theme, changeNetworkTheme } = useContext(ThemeContext);
  const { state, actions } = useContext(StoreContext);
  const { contracts } = useContext(ContractContext);
  const [transaction, setTransaction] = useState('Buy');
  const [sellToken, setSellToken] = useState({
    amount: 0.0,
    currency: defaultCurrencies.sell,
  });
  const [buyToken, setBuyToken] = useState({
    amount: 0.0,
    currency: defaultCurrencies.buy,
  });
  const [address, setAddress] = useState(null);
  const [slippage, setSlippage] = useState(defaultSlippageOptions[0]);
  const [loadedQueryParams, setLoadedQueryParams] = useState(false);
  const slippageProps = { defaultSlippageOptions, slippage, setSlippage };
  const [statusMessage, setStatusMessage] = useState('');
  const [displayInfo, setDisplayInfo] = useState(false);

  const [showFailPopup, setShowFailPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  const chainId = parseInt(process.env.REACT_APP_CHAIN_ID);
  const setQueryStringParams = () => {
    if (getQuery().toString().length > 0 && !loadedQueryParams) {
      setLoadedQueryParams(true);
      let sellAmount = 0.0,
        buyAmount = 0.0;
      let token = getQueryParamValue('token')
        ? getQueryParamValue('token').toUpperCase()
        : 'ETH';

      if (token !== 'ETH' && token !== 'DAI') {
        token = 'ETH';
      }

      if (getQueryParamValue('transaction') === 'sell') {
        setTransaction('Sell');
        sellAmount = Number(getQueryParamValue('amount'));
        prefillValues(sellAmount, 'BZZ', buyAmount, token, 'sell');
      } else {
        setTransaction('Buy');
        buyAmount = Number(getQueryParamValue('amount'));
        prefillValues(sellAmount, token, buyAmount, 'BZZ', 'buy');
      }

      setSlippage(Number(getQueryParamValue('slippage')));

      if (getQueryParamValue('receiver')) {
        const address = getQueryParamValue('receiver');
        const isAddress = web3.utils.isAddress(address);

        if (!isAddress) {
          return;
        } else {
          actions.setReceiver(address);
          setAddress(address);
        }
      }
      // transaction === "Buy" ? setBzzBuy(buyToken) : setBzzSell(sellToken);
    }
  };

  const prefillValues = (
    sellAmount: number,
    sellToken: string,
    buyAmount: number,
    buyToken: string,
    transaction: string
  ) => {
    if (transaction === 'buy') {
      const convertedAmount =
        buyAmount *
        (sellToken === 'ETH'
          ? state.conversions.priceForOneInETH
          : state.conversions.priceForOneInDAI);
      setSellToken({ amount: convertedAmount, currency: sellToken });
      setBuyToken({ amount: buyAmount, currency: buyToken });
    } else {
      const convertedAmount =
        sellAmount *
        (buyToken === 'ETH'
          ? state.conversions.priceForOneInETH
          : state.conversions.priceForOneInDAI);
      setSellToken({ amount: sellAmount, currency: sellToken });
      setBuyToken({ amount: convertedAmount, currency: buyToken });
    }
  };

  useEffect(() => {
    state.walletConnected && setQueryStringParams();
    // eslint-disable-next-line
  }, [state.walletConnected]);

  useEffect(() => {
    if (state.walletConnected) {
      changeNetworkTheme(chainId.toString());
    }

    if (!state.walletConnected) {
      changeNetworkTheme('1');
    }
  }, [state.walletConnected, changeNetworkTheme, chainId]);

  useEffect(() => {
    if (state.walletConnected && state.chainId) {
      setShowErrorModal(state.chainId !== chainId);
    }

    if (!state.walletConnected) {
      setShowErrorModal(false);
    }
  }, [state.walletConnected, state.chainId, chainId]);

  useInterval(() => {
    if (state.walletConnected && state.chainId === chainId) {
      actions.loadConversions(contracts);
    }
  }, 6000);

  useEffect(() => {
    state.approvalPending
      ? setStatusMessage('Approving')
      : state.approvalDone && (state.buyPending || state.sellPending)
      ? setStatusMessage('Exchanging')
      : state.approvalDone
      ? setStatusMessage('Approved and waiting for exchange confirmation')
      : state.buyPending
      ? setStatusMessage('Exchanging')
      : state.sellPending
      ? setStatusMessage('Exchanging')
      : state.sellDone || state.buyDone
      ? setStatusMessage('Exchange complete')
      : state.approvalFailed
      ? setStatusMessage('Approval failed')
      : state.transactionFailure
      ? setStatusMessage('Exchange failed')
      : setStatusMessage('');
    // eslint-disable-next-line
  }, [state, sellToken.currency, buyToken.currency]);

  useEffect(() => {
    if (transaction === 'Buy') {
      setBzzBuy({ amount: buyToken.amount, currency: 'BZZ' }, false);
    } else {
      setBzzSell({ amount: sellToken.amount, currency: 'BZZ' }, false);
    }
    // eslint-disable-next-line
  }, [sellToken.currency, buyToken.currency]);

  const classes = useStyles({ ...theme, ...state });

  const setToken = (token: string) => {
    if (transaction === 'Buy') {
      setSellToken({ ...buyToken, currency: token });
    } else {
      setBuyToken({ ...sellToken, currency: token });
    }
  };
  const toggleTransaction = () => {
    if (state.transactionInProgress) return;
    // On toggle switch transfer values from sell to buy vice versa
    const tempBuyTokenHolder = buyToken;
    setBuyToken(sellToken);
    setSellToken(tempBuyTokenHolder);
    // transaction === "Sell" ? setTransaction("Buy") : setTransaction("Sell");

    if (transaction === 'Sell') {
      setTransaction('Buy');
      setBzzBuy({ amount: sellToken.amount, currency: 'BZZ' }, true);
    } else {
      setTransaction('Sell');
      setBzzSell({ amount: buyToken.amount, currency: 'BZZ' }, true);
    }
  };

  const setBzzBuy = async (data, alternate = false, token = '') => {
    let tokenCurr = alternate ? buyToken.currency : sellToken.currency;

    if (token !== '') {
      tokenCurr = token;
    }

    setBuyToken({ amount: data.amount, currency: data.currency });

    const amount =
      data.amount *
      (tokenCurr === 'ETH'
        ? state.conversions.priceForOneInETH
        : state.conversions.priceForOneInDAI);

    setSellToken({ amount: amount, currency: tokenCurr });
  };

  const setBzzSell = async (data, alternate = false, token = '') => {
    let tokenCurr = alternate ? sellToken.currency : buyToken.currency;

    if (token !== '') {
      tokenCurr = token;
    }
    setSellToken({ amount: data.amount, currency: data.currency });
    setBuyToken({
      amount:
        data.amount *
        (tokenCurr === 'ETH'
          ? state.conversions.rewardForOneInETH
          : state.conversions.rewardForOneInDAI),
      currency: tokenCurr,
    });
  };

  async function approveDai() {
    if (buyToken.amount === 0) return;

    if (sellToken.amount > state.balances.daiBalance) return;
    const options = {
      contracts: state.contracts,
      amount: buyToken.amount,
      slippage: slippage,
      ethAddress: state.userAddress,
      sender: state.userAddress,
    };
    await actions.approveMint(options);
  }

  async function approveBurn() {
    if (sellToken.amount === 0) return;

    if (sellToken.amount > state.balances.bzzBalance) return;
    const options = {
      contracts: state.contracts,
      amount: sellToken.amount,
      slippage: slippage,
      currency: buyToken.currency,
      ethAddress: state.userAddress,
      sender: state.userAddress,
    };
    await actions.approveBurn(options);
  }

  async function mintTokens() {
    if (buyToken.amount === 0) return;
    const options = {
      contracts: state.contracts,
      amount: buyToken.amount,
      slippage: slippage,
      ethAddress: state.userAddress,
      sender: state.userAddress,
      receiver: state.receiver,
    };

    return sellToken.currency === 'DAI'
      ? sellToken.amount <= state.balances.daiBalance
        ? state.receiver !== ''
          ? await actions.mintTokenToReceiver(options)
          : await actions.mintToken(options)
        : null
      : sellToken.amount < state.balances.ethBalance
      ? state.receiver !== ''
        ? await actions.mintTokenETHToReceiver(options)
        : await actions.mintTokenETH(options)
      : null;
  }

  async function burnTokens() {
    if (sellToken.amount === 0) return;
    const options = {
      contracts: state.contracts,
      amount: sellToken.amount,
      slippage: slippage,
      ethAddress: state.userAddress,
      sender: state.userAddress,
    };
    buyToken.currency === 'DAI'
      ? await actions.burnToken(options)
      : await actions.burnTokenETH(options);
  }

  const approveAction = async () =>
    transaction === 'Buy'
      ? sellToken.currency === 'DAI'
        ? await approveDai()
        : null
      : await approveBurn();

  const finalAction = async () => {
    transaction === 'Buy' ? await mintTokens() : await burnTokens();
  };

  const confirmationAction = () => {
    finalAction();
    setShowConfirmationPopup(false);
  };

  const linkModifiers = {
    1: '',
    4: 'rinkeby.',
    5: 'goerli.',
    42: 'kovan.',
  };

  const failureEtherscanLink = state.flags.rejected
    ? ''
    : (state.approvalFailed || state.flags.transactionFail) &&
      state?.transactionData?.receipt?.blockHash
    ? `https://${linkModifiers[state.chainId] || ''}etherscan.io/tx/${
        state.transactionData?.receipt?.transactionHash || ''
      }`
    : '';

  const successEtherscanLink = state.transactionData
    ? `https://${linkModifiers[state.chainId] || ''}etherscan.io/tx/${
        state.transactionData?.transactionHash || ''
      }`
    : `https://${linkModifiers[state.chainId] || ''}etherscan.io/address/${
        state.userAddress
      }`;

  useEffect(() => {
    state.flags.transactionSuccess
      ? setShowSuccessPopup(true)
      : setShowSuccessPopup(false);
  }, [state.flags.transactionSuccess]);

  useEffect(() => {
    state.flags.transactionFail || state.flags.rejected
      ? setShowFailPopup(true)
      : setShowFailPopup(false);
  }, [state.flags.rejected, state.flags.transactionFail]);

  const amountPlusSlippage = sellToken.amount * (1 + slippage / 100);

  useEffect(() => {
    if (showFailPopup) {
      actions.clear();
    }
    // eslint-disable-next-line
  }, [showFailPopup]);

  useEffect(() => {
    if (showFailPopup) {
      actions.clear();
    }
    // eslint-disable-next-line
  }, [showFailPopup]);

  return (
    <>
      {showFailPopup && (
        <Failure
          closeModal={() => setShowFailPopup(false)}
          etherscanLink={failureEtherscanLink}
          reason={
            state.flags.rejected ? 'rejected' : 'Your transaction failed.'
          }
        />
      )}
      {showSuccessPopup && (
        <Success
          sellToken={sellToken.currency}
          buyToken={buyToken.currency}
          closeModal={() => setShowSuccessPopup(false)}
          newBalance={state.balances.bzzBalance.toString()}
          etherscanLink={successEtherscanLink}
          data={state.transactionData}
        />
      )}
      {showConfirmationPopup && (
        <Confirmation
          buyToken={buyToken.currency}
          buyAmount={buyToken.amount}
          sellAmount={amountPlusSlippage}
          sellToken={sellToken.currency}
          confirmationAction={confirmationAction}
          closeModal={() => setShowConfirmationPopup(false)}
        />
      )}
      {showErrorModal && <ErrorModal />}

      <Transition in={displayInfo} timeout={0} unmountOnExit>
        {(stateInfoBox) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[stateInfoBox],
            }}
          >
            <InfoBox closeFunction={(value) => setDisplayInfo(value)} />
          </div>
        )}
      </Transition>

      <Transition in={!displayInfo} timeout={0}>
        {(stateModalContainer) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[stateModalContainer],
            }}
          >
            <div className={classes.ModalContainer}>
              <div className={classes.infoIconContainer}>
                <InfoIcon
                  className={classes.info}
                  onClick={() => setDisplayInfo(true)}
                />
              </div>
              <h1 className={classes.heading}>{`${transaction} BZZ Tokens`}</h1>
              {transaction === 'Buy' && state.receiver !== '' ? (
                <h3
                  className={classes.receiverNotifier}
                >{`You are minting to receiver - ${state.receiver}`}</h3>
              ) : (
                <></>
              )}
              <div className={classes.bottomContainer}>
                <ButtonGroup
                  isActionGlowing={state.approvalDone}
                  isApproveGlowing={state.approvalPending}
                  isApproveActive={
                    state.walletConnected &&
                    !state.transactionInProgress &&
                    !state.buyPending &&
                    !state.sellPending
                  }
                  isActionActive={
                    state.walletConnected &&
                    ((transaction === 'Buy' &&
                      sellToken.currency === 'ETH' &&
                      !state.buyPending) ||
                      (state.approvalDone &&
                        !state.buyPending &&
                        !state.sellPending &&
                        !state.approvalPending))
                  }
                  transactionType={transaction}
                  isEthMintTransaction={
                    transaction === 'Buy' && sellToken.currency === 'ETH'
                  }
                  finalFunction={() => setShowConfirmationPopup(true)}
                  approveFunction={approveAction}
                />
                {statusMessage !== '' && <Message message={statusMessage} />}
              </div>
              <div className={classes.switchContainer}>
                <TransactionSwitch clickFunction={toggleTransaction} />
              </div>
              <div className={classes.topContainer}>
                <Send
                  isActive={transaction === 'Sell'}
                  token={sellToken.currency}
                  setToken={setToken}
                  amount={sellToken.amount}
                  slippage={slippageProps}
                  address={address}
                  setSellAmount={
                    transaction === 'Sell' ? setBzzSell : setSellToken
                  }
                />
                <Receive
                  isActive={transaction === 'Buy'}
                  token={buyToken.currency}
                  setToken={setToken}
                  amount={buyToken.amount}
                  slippage={slippageProps}
                  address={address}
                  setBuyAmount={transaction === 'Buy' ? setBzzBuy : setBuyToken}
                />
              </div>{' '}
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}

export default React.memo(ModalContainer);
