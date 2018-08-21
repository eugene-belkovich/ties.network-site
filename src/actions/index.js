export const ACTIONS = {
  CHANGE_LOCALE: 'CHANGE_LOCALE',
}

export const changeLocale = (locale = 'en') => ({
  type: ACTIONS.CHANGE_LOCALE,
  value: locale,
})
export * from './contract.status.action'
