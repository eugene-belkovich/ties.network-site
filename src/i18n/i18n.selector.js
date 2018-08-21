import { createStructuredSelector } from 'reselect'
import { localeSelector, messagesSelector } from '../selectors'

export const selector = createStructuredSelector({
  locale: localeSelector,
  messages: messagesSelector,
})
