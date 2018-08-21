import {
    FETCH_CONTRACT_STATUS, FETCH_CONTRACT_STATUS_SUCCESS, FETCH_CONTRACT_STATUS_FAILED,
  } from '../actions'

const defaultState = {
  isFetching: false,
  data: null,
}

export default function (state = defaultState, { type, payload }) {
  switch (type) {
    case FETCH_CONTRACT_STATUS: {
      return {
        ...state,
        isFetching: true,
      }
    }

    case FETCH_CONTRACT_STATUS_SUCCESS: {
      return {
        ...state,
        data: payload,
        isFetching: false,
      }
    }

    default:
      return state
  }
}
