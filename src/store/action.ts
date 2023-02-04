import types from "./actionTypes";
import { getWeb3Contracts } from "./helpers/contractBooter";
import { BalancesPayload } from "./services/balances";

export const useActions = (state, dispatch) => ({
  clear: () => {
    dispatch({ type: types.Clear.CLEAR_REQUEST });
  },
  clearFlags: () => {
    dispatch({ type: types.ClearFlags.CLEAR_FLAGS_REQUEST });
  },
  clearBalance: () => {
    dispatch({ type: types.ClearBalance.CLEAR_BALANCE });
  },
  setReceiver: (data) => {
    dispatch({ type: types.SetReceiver.SET_RECEIVER, payload: data });
  },
  getPendingTransactions: (data) => {
    dispatch({
      type: types.Transactions.GET_PENDING_TRANSACTIONS_REQUEST,
      payload: data,
    });
  },
  setContracts: (data) => {
    dispatch({
      type: types.SetContracts.SET_CONTRACTS_SUCCESS,
      payload: getWeb3Contracts(data),
    });
  },
  copyToClipboard: () => {
    dispatch({ type: types.Interface.ADDRESS_COPIED });
  },
  uncopyToClipboard: () => {
    dispatch({ type: types.Interface.ADDRESS_UNCOPIED });
  },
  loadBalances: (data: BalancesPayload) => {
    dispatch({ type: types.Balances.BALANCES_PENDING });
    dispatch({ type: types.Balances.BALANCES_REQUEST, payload: data });
  },
  setWalletAddress: (data) => {
    dispatch({
      type: types.SetWalletAddress.SET_WALLET_ADDRESS_SUCCESS,
      payload: data,
    });
  },
  setProvider: (data) => {
    dispatch({ type: types.SetProvider.SET_PROVIDER_PENDING });
    dispatch({ type: types.SetProvider.SET_PROVIDER_REQUEST, payload: data });
  },
  setWalletConnected: (data) => {
    dispatch({ type: types.SetWalletConnected.SET_WALLET_CONNECTED_PENDING });
    dispatch({
      type: types.SetWalletConnected.SET_WALLET_CONNECTED_REQUEST,
      payload: data,
    });
  },
  setChainId: (data) => {
    dispatch({
      type: types.SetChainId.SET_CHAIN_ID,
      payload: data,
    });
  },
  loadConversions: (data) => {
    dispatch({ type: types.Conversions.LOAD_CONVERSION_PENDING });
    dispatch({
      type: types.Conversions.LOAD_CONVERSION_REQUEST,
      payload: data,
    });
  },
  approveMint: (data) => {
    dispatch({ type: types.MintApprove.MINT_APPROVE_PENDING });
    dispatch({
      type: types.MintApprove.MINT_APPROVE_REQUEST,
      payload: data,
    });
  },
  checkMintAllowance: (data) => {
    dispatch({ type: types.CheckMintAllowance.MINT_ALLOWANCE_PENDING });
    dispatch({
      type: types.CheckMintAllowance.MINT_ALLOWANCE_REQUEST,
      payload: data,
    });
  },
  mintToken: (data) => {
    dispatch({ type: types.MintToken.MINT_TOKEN_PENDING });
    dispatch({
      type: types.MintToken.MINT_TOKEN_REQUEST,
      payload: data,
    });
  },
  mintTokenToReceiver: (data) => {
    dispatch({ type: types.MintToToken.MINT_TO_TOKEN_PENDING });
    dispatch({
      type: types.MintToToken.MINT_TO_TOKEN_REQUEST,
      payload: data,
    });
  },
  mintTokenETH: (data) => {
    dispatch({ type: types.MintTokenETH.MINT_ETH_PENDING });
    dispatch({
      type: types.MintTokenETH.MINT_ETH_REQUEST,
      payload: data,
    });
  },
  mintTokenETHToReceiver: (data) => {
    dispatch({ type: types.MintToTokenETH.MINT_TO_ETH_PENDING });
    dispatch({
      type: types.MintToTokenETH.MINT_TO_ETH_REQUEST,
      payload: data,
    });
  },
  approveBurn: (data) => {
    dispatch({ type: types.BurnApprove.BURN_APPROVE_PENDING });
    dispatch({
      type: types.BurnApprove.BURN_APPROVE_REQUEST,
      payload: data,
    });
  },
  checkBurnAllowance: (data) => {
    dispatch({ type: types.CheckBurnAllowance.BURN_ALLOWANCE_PENDING });
    dispatch({
      type: types.CheckBurnAllowance.BURN_ALLOWANCE_REQUEST,
      payload: data,
    });
  },
  burnToken: (data) => {
    dispatch({ type: types.BurnToken.BURN_TOKEN_PENDING });
    dispatch({
      type: types.BurnToken.BURN_TOKEN_REQUEST,
      payload: data,
    });
  },
  burnTokenETH: (data) => {
    dispatch({ type: types.BurnTokenETH.BURN_ETH_PENDING });
    dispatch({
      type: types.BurnTokenETH.BURN_ETH_REQUEST,
      payload: data,
    });
  },
  lockUI: () => {
    dispatch({ type: types.LockUI.LOCK_UI_SUCCESS });
  },
  unlockUI: () => {
    dispatch({
      type: types.UnlockUI.UNLOCK_UI_SUCCESS,
    });
  },
  getGeth: (data) => {
    dispatch({ type: types.GetGETH.GET_GETH_PENDING });
    dispatch({
      type: types.GetGETH.GET_GETH_REQUEST,
      payload: data,
    });
  },
  clearGethStatus: () => {
    dispatch({ type: types.ClearGethStatus.CLEAR_GETH_STATUS_SUCCESS });
  },
});
