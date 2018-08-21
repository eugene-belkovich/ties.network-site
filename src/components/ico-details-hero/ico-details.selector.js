import { createStructuredSelector } from 'reselect'
import { contractSelector } from '../../selectors'

export const icoDetailsSelector = createStructuredSelector({
  contract: contractSelector,
})
