import { getContractStatus } from '../utils'
import { setCognitoUser } from './'

export const FETCH_CONTRACT_STATUS = 'FETCH_CONTRACT_STATUS'
export const FETCH_CONTRACT_STATUS_SUCCESS = 'FETCH_CONTRACT_STATUS_SUCCESS'
export const FETCH_CONTRACT_STATUS_FAILED = 'FETCH_CONTRACT_STATUS_FAILED'

export const fetchContractStatus = () => (dispatch) => {
  dispatch({ type: FETCH_CONTRACT_STATUS })
  return getContractStatus()
    .then((res) => {
      dispatch({ type: FETCH_CONTRACT_STATUS_SUCCESS, payload: res })
      return res
    })
    .catch((err) => {
      dispatch({ type: FETCH_CONTRACT_STATUS_FAILED })
      return Promise.reject(err)
    })
}
