import { Contract } from "@ethersproject/contracts";
import types from "./actionTypes";

export interface IBalances {
  bzzBalance: number;
  daiBalance: number;
  ethBalance: number;
}

export interface IConversions {
  priceForOneInDAI: number;
  priceForOneInETH: number;
  rewardForOneInDAI: number;
  rewardForOneInETH: number;
}
export interface Flags {
  transactionSuccess: boolean;
  transactionFail: boolean;
  rejected: boolean;
  internalError: boolean;
  invalidParams: boolean;
  underflow: boolean;
}

export interface IState {
  gethPending: boolean;
  gethSuccess: boolean;
  gethFail: boolean;
  lockUI: boolean;
  loading: boolean;
  walletConnected: boolean;
  receiver: string;
  chainId: number;
  provider: any;
  approvalPending: boolean;
  approvalFailed: boolean;
  approvalDone: boolean;
  buyPending: boolean;
  sellPending: boolean;
  buyDone: boolean;
  sellDone: boolean;
  transactionInProgress: boolean;
  transactionFailure: boolean;
  daiAllowance: string;
  bzzAllowance: string;
  balances: IBalances;
  conversions: IConversions;
  userAddress: string;
  error: string;
  copied: boolean;
  transactions: {
    isPending: boolean;
    transactionsPending: any[];
  };
  contracts: {
    daiContract: Contract;
    curveContract: Contract;
    tokenContract: Contract;
    ethBrokerContract: Contract;
  };
  transactionData: any;
  flags: Flags;
}

const initialState: IState = {
  gethPending: false,
  gethSuccess: false,
  gethFail: false,
  lockUI: false,
  copied: false,
  loading: false,
  walletConnected: false,
  receiver: "",
  chainId: 0,
  provider: {},
  approvalDone: false,
  approvalPending: false,
  approvalFailed: false,
  buyPending: false,
  sellPending: false,
  buyDone: false,
  sellDone: false,
  transactionInProgress: false,
  transactionFailure: false,
  daiAllowance: "",
  bzzAllowance: "",
  transactions: {
    isPending: true,
    transactionsPending: [],
  },
  balances: {
    bzzBalance: 0,
    daiBalance: 0,
    ethBalance: 0,
  },
  conversions: {
    priceForOneInDAI: 0,
    priceForOneInETH: 0,
    rewardForOneInDAI: 0,
    rewardForOneInETH: 0,
  },
  userAddress: "",
  error: "",
  contracts: {
    daiContract: null,
    curveContract: null,
    tokenContract: null,
    ethBrokerContract: null,
  },
  transactionData: null,
  flags: {
    transactionSuccess: null,
    transactionFail: null,
    rejected: false,
    internalError: false,
    invalidParams: false,
    underflow: false,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SetUnderflow.SET_UNDERFLOW:
      return {
        ...state,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          invalidParams: true,
        },
      };
    case types.SetInvalidParams.SET_INVALID_PARAMS:
      return {
        ...state,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          invalidParams: true,
        },
      };
    case types.SetInternalError.SET_INTERNAL_ERROR:
      return {
        ...state,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          internalError: true,
        },
      };
    case types.ClearFlags.CLEAR_FLAGS_REQUEST:
      return {
        ...state,
        flags: {
          ...state.flags,
          transactionSuccess: null,
          transactionFail: null,
          rejected: false,
          invalidParams: false,
          internalError: false,
        },
      };
    case types.Clear.CLEAR_REQUEST:
      return {
        ...state,
        approvalDone: false,
        approvalPending: false,
        approvalFailed: false,
        buyPending: false,
        sellPending: false,
        buyDone: false,
        sellDone: false,
        transactionInProgress: false,
        transactionFailure: false,
        loading: false,
      };
    case types.ClearBalance.CLEAR_BALANCE:
      return {
        ...state,
        userAddress: "",
        chainId: 0,
        contracts: null,
        provider: null,
        walletConnected: false,
        loading: false,
        balances: {
          bzzBalance: 0,
          daiBalance: 0,
          ethBalance: 0,
        },
      };
    case types.SetContracts.SET_CONTRACTS_SUCCESS:
      return { ...state, contracts: action.payload, loading: false };
    case types.SetRejected.SET_REJECTED:
      return {
        ...state,
        flags: {
          ...state.flags,
          rejected: true,
        },
      };
    case types.SetReceiver.SET_RECEIVER:
      return { ...state, receiver: action.payload };
    case types.Balances.BALANCES_SUCCESS:
      return { ...state, balances: action.payload, loading: false };
    case types.Balances.BALANCES_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.Balances.BALANCES_PENDING:
      return { ...state, loading: true };
    case types.Conversions.LOAD_CONVERSION_SUCCESS:
      return { ...state, conversions: action.payload, loading: false };
    case types.Conversions.LOAD_CONVERSION_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.Conversions.LOAD_CONVERSION_PENDING:
      return { ...state, loading: true };
    case types.SetWalletAddress.SET_WALLET_ADDRESS_SUCCESS:
      return { ...state, userAddress: action.payload, loading: false };
    case types.SetWalletAddress.SET_WALLET_ADDRESS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.SetWalletConnected.SET_WALLET_CONNECTED_SUCCESS:
      return { ...state, walletConnected: true, loading: false };
    case types.SetWalletConnected.SET_WALLET_CONNECTED_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.SetWalletConnected.SET_WALLET_CONNECTED_PENDING:
      return { ...state, loading: true };
    case types.SetChainId.SET_CHAIN_ID:
      return { ...state, chainId: action.payload };
    case types.SetProvider.SET_PROVIDER_SUCCESS:
      return { ...state, provider: action.payload, loading: false };
    case types.SetProvider.SET_PROVIDER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.SetProvider.SET_PROVIDER_PENDING:
      return { ...state, loading: true };
    case types.Interface.ADDRESS_COPIED:
      return { ...state, copied: true };
    case types.Interface.ADDRESS_UNCOPIED:
      return { ...state, copied: false };
    case types.MintApprove.MINT_APPROVE_SUCCESS:
      return {
        ...state,
        loading: false,
        approvalPending: false,
        approvalDone: true,
      };
    case types.MintApprove.MINT_APPROVE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        approvalFailed: true,
        approvalPending: false,
        transactionInProgress: false,
      };
    case types.MintApprove.MINT_APPROVE_PENDING:
      return {
        ...state,
        loading: true,
        approvalPending: true,
        transactionInProgress: true,
        flags: {
          ...state.flags,
          rejected: false,
        },
      };
    case types.CheckMintAllowance.MINT_ALLOWANCE_SUCCESS:
      return { ...state, daiAllowance: action.payload, loading: false };
    case types.CheckMintAllowance.MINT_ALLOWANCE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.CheckMintAllowance.MINT_ALLOWANCE_PENDING:
      return { ...state, loading: true };
    // MINTS
    case types.MintToken.MINT_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        buyPending: false,
        approvalDone: false,
        transactionInProgress: false,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          transactionFail: false,
          transactionSuccess: true,
        },
      };
    case types.MintToken.MINT_TOKEN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        transactionFailure: true,
        approvalDone: false,
        buyPending: false,
        transactionInProgress: false,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          transactionSuccess: false,
          transactionFail: true,
        },
      };
    case types.MintToken.MINT_TOKEN_PENDING:
      return {
        ...state,
        loading: true,
        buyPending: true,
        transactionInProgress: true,
        flags: {
          ...state.flags,
          rejected: false,
        },
      };
    case types.MintTokenETH.MINT_ETH_SUCCESS:
      return {
        ...state,
        loading: false,
        buyPending: false,
        transactionInProgress: false,
        buyDone: true,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          transactionFail: false,
          transactionSuccess: true,
        },
      };
    case types.MintTokenETH.MINT_ETH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        transactionFailure: true,
        buyPending: false,
        transactionInProgress: false,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          transactionSuccess: false,
          transactionFail: true,
        },
      };
    case types.MintTokenETH.MINT_ETH_PENDING:
      return {
        ...state,
        loading: true,
        buyPending: true,
        transactionInProgress: true,
        flags: {
          ...state.flags,
          rejected: false,
        },
      };
    // MINT TO
    case types.MintToToken.MINT_TO_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        buyPending: false,
        approvalDone: false,
        transactionInProgress: false,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          transactionFail: false,
          transactionSuccess: true,
        },
      };
    case types.MintToToken.MINT_TO_TOKEN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        transactionFailure: true,
        approvalDone: false,
        buyPending: false,
        transactionInProgress: false,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          transactionSuccess: false,
          transactionFail: true,
        },
      };
    case types.MintToToken.MINT_TO_TOKEN_PENDING:
      return {
        ...state,
        loading: true,
        buyPending: true,
        transactionInProgress: true,
        flags: {
          ...state.flags,
          rejected: false,
        },
      };
    case types.MintToTokenETH.MINT_TO_ETH_SUCCESS:
      return {
        ...state,
        loading: false,
        buyPending: false,
        transactionInProgress: false,
        buyDone: true,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          transactionFail: false,
          transactionSuccess: true,
        },
      };
    case types.MintToTokenETH.MINT_TO_ETH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        transactionFailure: true,
        buyPending: false,
        transactionInProgress: false,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          transactionSuccess: false,
          transactionFail: true,
        },
      };
    case types.MintToTokenETH.MINT_TO_ETH_PENDING:
      return {
        ...state,
        loading: true,
        buyPending: true,
        transactionInProgress: true,
        flags: {
          ...state.flags,
          rejected: false,
        },
      };
    // END OF MINT TO
    case types.BurnApprove.BURN_APPROVE_SUCCESS:
      return {
        ...state,
        loading: false,
        approvalPending: false,
        approvalDone: true,
        transactionData: action.payload,
      };
    case types.BurnApprove.BURN_APPROVE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        approvalFailed: true,
        approvalPending: false,
        transactionInProgress: false,
        transactionData: action.payload,
      };
    case types.BurnApprove.BURN_APPROVE_PENDING:
      return {
        ...state,
        loading: true,
        approvalPending: true,
        transactionInProgress: true,
        flags: {
          ...state.flags,
          rejected: false,
        },
      };
    case types.CheckBurnAllowance.BURN_ALLOWANCE_SUCCESS:
      return { ...state, allowanceChecked: action.payload, loading: false };
    case types.CheckBurnAllowance.BURN_ALLOWANCE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.CheckBurnAllowance.BURN_ALLOWANCE_PENDING:
      return { ...state, loading: true };
    // BURNS
    case types.BurnToken.BURN_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        sellPending: false,
        approvalDone: false,
        transactionInProgress: false,
        sellDone: true,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          transactionFail: false,
          transactionSuccess: true,
        },
      };
    case types.BurnToken.BURN_TOKEN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        transactionFailure: true,
        approvalDone: false,
        sellPending: false,
        transactionInProgress: false,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          transactionSuccess: false,
          transactionFail: true,
        },
      };
    case types.BurnToken.BURN_TOKEN_PENDING:
      return {
        ...state,
        loading: true,
        sellPending: true,
        transactionInProgress: true,
        flags: {
          ...state.flags,
          rejected: false,
        },
      };
    case types.BurnTokenETH.BURN_ETH_SUCCESS:
      return {
        ...state,
        loading: false,
        sellPending: false,
        approvalDone: false,
        transactionInProgress: false,
        sellDone: true,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          transactionFail: false,
          transactionSuccess: true,
        },
      };
    case types.BurnTokenETH.BURN_ETH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        transactionFailure: true,
        approvalDone: false,
        sellPending: false,
        transactionInProgress: false,
        transactionData: action.payload,
        flags: {
          ...state.flags,
          transactionSuccess: false,
          transactionFail: true,
        },
      };
    case types.BurnTokenETH.BURN_ETH_PENDING:
      return {
        ...state,
        loading: true,
        sellPending: true,
        transactionInProgress: true,
        flags: {
          ...state.flags,
          rejected: false,
        },
      };

    // END OF BURNS
    case types.Transactions.GET_PENDING_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: {
          isPending: true,
          transactionsPending: [...action.payload],
        },
      };
    case types.Transactions.GET_PENDING_TRANSACTIONS_FAIL:
      return {
        ...state,
        transactions: { ...state.transactions, isPending: false },
      };
    case types.Transactions.GET_PENDING_TRANSACTIONS_REQUEST:
      return { ...state, transactions: { ...state.transactions } };
    case types.LockUI.LOCK_UI_SUCCESS:
      return { ...state, lockUI: true };
    case types.UnlockUI.UNLOCK_UI_SUCCESS:
      return { ...state, lockUI: false };
    //
    case types.GetGETH.GET_GETH_PENDING:
      return {
        ...state,
        gethPending: true,
        gethSuccess: false,
        gethFail: false,
      };
    case types.GetGETH.GET_GETH_SUCCESS:
      return {
        ...state,
        gethPending: false,
        gethSuccess: true,
        gethFail: false,
      };
    case types.GetGETH.GET_GETH_FAIL:
      return {
        ...state,
        gethPending: false,
        gethSuccess: false,
        gethFail: true,
      };
    case types.ClearGethStatus.CLEAR_GETH_STATUS_SUCCESS:
      return {
        ...state,
        gethPending: false,
        gethSuccess: false,
        gethFail: false,
      };
    default:
      return state;
  }
}

export { initialState, reducer };
