import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import contract from './contract-status.reducer'
import { ACTIONS } from '../actions'
import { messagesProvider } from '../i18n'

const defaultState = {
  locale: 'en',
  messages: messagesProvider('en'),
}

const rootReducer = combineReducers({
  contract,
  router: routerReducer,
  localeData: (state = defaultState, action) => {
    switch (action.type) {
      case ACTIONS.CHANGE_LOCALE:
        return {
          locale: action.value,
          messages: messagesProvider(action.value),
        }
      default:
        return state
    }
  },
})

export default rootReducer
