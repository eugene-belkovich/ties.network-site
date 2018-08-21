import { createStructuredSelector } from 'reselect'
import { localeSelector } from '../../selectors/index'

export const languageMenuSelector = createStructuredSelector({
  locale: localeSelector,
})
