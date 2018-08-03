import axios from 'axios';

// action types
const GET_FUNDS = 'GET_FUNDS';
const GET_SINGLE_FUND = 'GET_SINGLE_FUND';
const ADD_FUND = 'ADD_FUND';
const EDIT_FUND = 'EDIT_FUND';
const REMOVE_FUND = 'REMOVE_FUND';

// action creators
const getFunds = funds => ({ type: GET_FUNDS, funds });
const getSingleFund = fund => ({ type: GET_SINGLE_FUND, fund });
const addFund = fund => ({ type: ADD_FUND, fund });
const editFund = (fund) => ({ type: EDIT_FUND, fund });
const removeFund = fund => ({ type: REMOVE_FUND, fund });

// thunk creators
export const fetchFunds = () => {
  return async dispatch => {
    const res = await axios.get('/api/fund');
    dispatch(getFunds(res.data));
  }
}

export const fetchSingleFund = fundId => {
  return async dispatch => {
    const res = await axios.get(`/api/${fundId}`);
    dispatch(getSingleFund(res.data));
  }
}

export const postFund = () => {
  return async dispatch => {
    const res = await axios.post('/api/fund');
    dispatch(addFund(res.data));
  }
}

export const editFundThunk = (fundId, fund) => {
  return async dispatch => {
    const res = await axios.put(`/api/${fundId}`, fund);
    dispatch(editFund(res.data));
  }
}

export const deleteFund = fundId => {
  return async dispatch => {
    const res = await axios.delete(`/api/${fundId}`);
    dispatch(removeFund(res.data));
  }
}

const initialState = {
  funds: [],
  singleFund: {},
}

//reducer
const fundReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FUNDS:
      return {
        ...state,
        funds: action.funds,
      };
    case GET_SINGLE_FUND:
      return {
        ...state,
        singleFund: action.fund
      }
    case ADD_FUND:
      return {
        funds: [...state, action.fund],
      };
    case EDIT_FUND:
      return {
        ...state,
        singleFund: action.fund,
      };
    case REMOVE_FUND:
      const fundsToKeep = state.funds.filter(fund => fund !== action.fund);
      return {
        ...state,
        funds: fundsToKeep
      }
    default:
      return state;
  }
}

export default fundReducer;



