import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Cookies from 'universal-cookie'
import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import reducers, { appReducer } from './reducers'
import { About, Platform, Database, Team, IcoDetails, NotFound } from './routes'
import { messageProvider, ConnectedIntlProvider } from './i18n'
import { getUrlParameter } from './utils'
import './styles/index.css'
import './styles/app.css'

const from = getUrlParameter('from')
if (from) {
  const cookies = new Cookies()
  cookies.set('from', from, {
    domain: `.${window.location.hostname}`,
    path: '/',
    expires: new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)),
  })
}


const history = createHistory()
history.listen(() => window.scrollTo(0, 0))
const reduxRouterMiddleware = routerMiddleware(history)

const store = createStore(
  reducers,
  applyMiddleware(thunk, reduxRouterMiddleware),
)

render(
  <MuiThemeProvider theme={createMuiTheme()}>
    <Provider store={store}>
      <ConnectedIntlProvider>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/tge" component={About} />
            <Route path="/platform" component={Platform} />
            <Route path="/database" component={Database} />
            <Route path="/team" component={Team} />
            <Route path="/ico-details" component={IcoDetails} />
            <Route path="/TGE-details" component={IcoDetails} />
            <Route component={NotFound} />
          </Switch>
        </ConnectedRouter>
      </ConnectedIntlProvider>
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root'),
)
