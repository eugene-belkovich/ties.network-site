import { createStructuredSelector } from 'reselect'
import { contractSelector } from '../../selectors'

export const statsSelector = createStructuredSelector({
  contract: contractSelector,
})
