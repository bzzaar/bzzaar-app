import types from "./actionTypes";
import { getBalances } from "./services/balances";
import getConversion, {
  burnToken,
  burnTokenEth,
  mintToken,
  approveMint,
  checkMintAllowance,
  approveBurn,
  mintTokenEth,
  mintToToken,
  mintToTokenEth,
} from "./services/token";
import getPendingTransactions from "./services/transactions";
import { getGeth } from "./services/faucet";

export const applyMiddleware = (dispatch) => (action) => {
  switch (action.type) {
    case types.Balances.BALANCES_REQUEST:
      return getBalances(action.payload)
        .then((res) => {
          dispatch({
            type: types.Balances.BALANCES_SUCCESS,
            payload: res,
          });
        })
        .catch((err) =>
          dispatch({
            type: types.Balances.BALANCES_FAIL,
            payload: err.response,
          })
        );
    case types.Conversions.LOAD_CONVERSION_REQUEST:
      return getConversion(action.payload)
        .then((res) => {
          dispatch({
            type: types.Conversions.LOAD_CONVERSION_SUCCESS,
            payload: res,
          });
        })
        .catch((err) =>
          dispatch({
            type: types.Conversions.LOAD_CONVERSION_FAIL,
            payload: err.response,
          })
        );
    case types.SetWalletConnected.SET_WALLET_CONNECTED_REQUEST:
      return dispatch({
        type: types.SetWalletConnected.SET_WALLET_CONNECTED_SUCCESS,
        payload: action.payload,
      });
    case types.SetProvider.SET_PROVIDER_REQUEST:
      return dispatch({
        type: types.SetProvider.SET_PROVIDER_SUCCESS,
        payload: action.payload,
      });
    case types.MintApprove.MINT_APPROVE_REQUEST:
      return approveMint(action.payload)
        .then((res) => {
          dispatch({
            type: types.MintApprove.MINT_APPROVE_SUCCESS,
            payload: res,
          });
        })
        .catch((err) => {
          if (err.code === "NUMERIC_FAULT") {
            dispatch({
              type: types.SetUnderflow.SET_UNDERFLOW,
              payload: err,
            });
          }

          if (err.code === 4001) {
            dispatch({
              type: types.SetRejected.SET_REJECTED,
              payload: err,
            });
          }

          if (err.code === -32603) {
            dispatch({
              type: types.SetInternalError.SET_INTERNAL_ERROR,
              payload: err,
            });
          }

          if (err.code === -32602) {
            dispatch({
              type: types.SetInvalidParams.SET_INVALID_PARAMS,
              payload: err,
            });
          }
          dispatch({
            type: types.MintApprove.MINT_APPROVE_FAIL,
            payload: err,
          });
        });
    case types.CheckMintAllowance.MINT_ALLOWANCE_REQUEST:
      return checkMintAllowance(action.payload)
        .then((res) => {
          dispatch({
            type: types.CheckMintAllowance.MINT_ALLOWANCE_SUCCESS,
            payload: res,
          });
        })
        .catch((err) =>
          dispatch({
            type: types.CheckMintAllowance.MINT_ALLOWANCE_FAIL,
            payload: err,
          })
        );
    case types.MintToken.MINT_TOKEN_REQUEST:
      return mintToken(action.payload)
        .then((res) => {
          dispatch({
            type: types.MintToken.MINT_TOKEN_SUCCESS,
            payload: res,
          });
        })
        .catch((err) => {
          if (err.code === "NUMERIC_FAULT") {
            dispatch({
              type: types.SetUnderflow.SET_UNDERFLOW,
              payload: err,
            });
          }

          if (err.code === 4001) {
            dispatch({
              type: types.SetRejected.SET_REJECTED,
              payload: err,
            });
          }

          if (err.code === -32603) {
            dispatch({
              type: types.SetInternalError.SET_INTERNAL_ERROR,
              payload: err,
            });
          }

          if (err.code === -32602) {
            dispatch({
              type: types.SetInvalidParams.SET_INVALID_PARAMS,
              payload: err,
            });
          }
          dispatch({
            type: types.MintToken.MINT_TOKEN_FAIL,
            payload: err,
          });
        });
    case types.MintToToken.MINT_TO_TOKEN_REQUEST:
      return mintToToken(action.payload)
        .then((res) => {
          dispatch({
            type: types.MintToToken.MINT_TO_TOKEN_SUCCESS,
            payload: res,
          });
        })
        .catch((err) => {
          if (err.code === "NUMERIC_FAULT") {
            dispatch({
              type: types.SetUnderflow.SET_UNDERFLOW,
              payload: err,
            });
          }

          if (err.code === 4001) {
            dispatch({
              type: types.SetRejected.SET_REJECTED,
              payload: err,
            });
          }

          if (err.code === -32603) {
            dispatch({
              type: types.SetInternalError.SET_INTERNAL_ERROR,
              payload: err,
            });
          }

          if (err.code === -32602) {
            dispatch({
              type: types.SetInvalidParams.SET_INVALID_PARAMS,
              payload: err,
            });
          }
          dispatch({
            type: types.MintToToken.MINT_TO_TOKEN_FAIL,
            payload: err,
          });
        });
    case types.MintTokenETH.MINT_ETH_REQUEST:
      return mintTokenEth(action.payload)
        .then((res) => {
          dispatch({
            type: types.MintTokenETH.MINT_ETH_SUCCESS,
            payload: res,
          });
        })
        .catch((err) => {
          if (err.code === "NUMERIC_FAULT") {
            dispatch({
              type: types.SetUnderflow.SET_UNDERFLOW,
              payload: err,
            });
          }

          if (err.code === 4001) {
            dispatch({
              type: types.SetRejected.SET_REJECTED,
              payload: err,
            });
          }

          if (err.code === -32603) {
            dispatch({
              type: types.SetInternalError.SET_INTERNAL_ERROR,
              payload: err,
            });
          }

          if (err.code === -32602) {
            dispatch({
              type: types.SetInvalidParams.SET_INVALID_PARAMS,
              payload: err,
            });
          }
          dispatch({
            type: types.MintTokenETH.MINT_ETH_FAIL,
            payload: err,
          });
        });
    case types.MintToTokenETH.MINT_TO_ETH_REQUEST:
      return mintToTokenEth(action.payload)
        .then((res) => {
          dispatch({
            type: types.MintToTokenETH.MINT_TO_ETH_SUCCESS,
            payload: res,
          });
        })
        .catch((err) => {
          if (err.code === "NUMERIC_FAULT") {
            dispatch({
              type: types.SetUnderflow.SET_UNDERFLOW,
              payload: err,
            });
          }

          if (err.code === 4001) {
            dispatch({
              type: types.SetRejected.SET_REJECTED,
              payload: err,
            });
          }

          if (err.code === -32603) {
            dispatch({
              type: types.SetInternalError.SET_INTERNAL_ERROR,
              payload: err,
            });
          }

          if (err.code === -32602) {
            dispatch({
              type: types.SetInvalidParams.SET_INVALID_PARAMS,
              payload: err,
            });
          }
          dispatch({
            type: types.MintToTokenETH.MINT_TO_ETH_FAIL,
            payload: err,
          });
        });
    case types.MintTokenETH.MINT_ETH_SUCCESS:
      return dispatch({
        type: types.Balances.BALANCES_REQUEST,
        payload: action.payload,
      });
    case types.BurnApprove.BURN_APPROVE_REQUEST:
      return approveBurn(action.payload)
        .then((res) => {
          dispatch({
            type: types.BurnApprove.BURN_APPROVE_SUCCESS,
            payload: res,
          });
        })
        .catch((err) => {
          if (err.code === "NUMERIC_FAULT") {
            dispatch({
              type: types.SetUnderflow.SET_UNDERFLOW,
              payload: err,
            });
          }

          if (err.code === 4001) {
            dispatch({
              type: types.SetRejected.SET_REJECTED,
              payload: err,
            });
          }

          if (err.code === -32603) {
            dispatch({
              type: types.SetInternalError.SET_INTERNAL_ERROR,
              payload: err,
            });
          }

          if (err.code === -32602) {
            dispatch({
              type: types.SetInvalidParams.SET_INVALID_PARAMS,
              payload: err,
            });
          }
          dispatch({
            type: types.BurnApprove.BURN_APPROVE_FAIL,
            payload: err,
          });
        });
    // case types.CheckBurnAllowance.BURN_ALLOWANCE_REQUEST:
    //   return checkBurnAllowance(action.payload)
    //     .then((res) => {
    //       dispatch({
    //         type: types.CheckBurnAllowance.BURN_ALLOWANCE_SUCCESS,
    //         payload: res,
    //       });
    //     })
    //     .catch((err) =>
    //       dispatch({
    //         type: types.CheckBurnAllowance.BURN_ALLOWANCE_FAIL,
    //         payload: err.response,
    //       })
    //     );
    case types.BurnToken.BURN_TOKEN_REQUEST:
      return burnToken(action.payload)
        .then((res) => {
          dispatch({
            type: types.BurnToken.BURN_TOKEN_SUCCESS,
            payload: res,
          });
        })
        .catch((err) => {
          if (err.code === "NUMERIC_FAULT") {
            dispatch({
              type: types.SetUnderflow.SET_UNDERFLOW,
              payload: err,
            });
          }

          if (err.code === 4001) {
            dispatch({
              type: types.SetRejected.SET_REJECTED,
              payload: err,
            });
          }

          if (err.code === -32603) {
            dispatch({
              type: types.SetInternalError.SET_INTERNAL_ERROR,
              payload: err,
            });
          }

          if (err.code === -32602) {
            dispatch({
              type: types.SetInvalidParams.SET_INVALID_PARAMS,
              payload: err,
            });
          }
          dispatch({
            type: types.BurnToken.BURN_TOKEN_FAIL,
            payload: err,
          });
        });
    case types.BurnTokenETH.BURN_ETH_REQUEST:
      return burnTokenEth(action.payload)
        .then((res) => {
          dispatch({
            type: types.BurnTokenETH.BURN_ETH_SUCCESS,
            payload: res,
          });
        })
        .catch((err) => {
          if (err.code === "NUMERIC_FAULT") {
            dispatch({
              type: types.SetUnderflow.SET_UNDERFLOW,
              payload: err,
            });
          }

          if (err.code === 4001) {
            dispatch({
              type: types.SetRejected.SET_REJECTED,
              payload: err,
            });
          }

          if (err.code === -32603) {
            dispatch({
              type: types.SetInternalError.SET_INTERNAL_ERROR,
              payload: err,
            });
          }

          if (err.code === -32602) {
            dispatch({
              type: types.SetInvalidParams.SET_INVALID_PARAMS,
              payload: err,
            });
          }
          dispatch({
            type: types.BurnTokenETH.BURN_ETH_FAIL,
            payload: err,
          });
        });
    case types.Transactions.GET_PENDING_TRANSACTIONS_REQUEST:
      return getPendingTransactions(action.payload)
        .then((res) => {
          dispatch({
            type: types.Transactions.GET_PENDING_TRANSACTIONS_SUCCESS,
            payload: res,
          });
        })
        .catch((err) => {
          dispatch({
            type: types.Transactions.GET_PENDING_TRANSACTIONS_FAIL,
            payload: err,
          });
        });
    case types.GetGETH.GET_GETH_REQUEST:
      return getGeth(action.payload)
        .then((res) => {
          dispatch({
            type: types.GetGETH.GET_GETH_SUCCESS,
            payload: res,
          });
        })
        .catch((err) => {
          dispatch({
            type: types.GetGETH.GET_GETH_FAIL,
            payload: err,
          });
        });
    default:
      dispatch(action);
  }
};
