import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore() {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  )
  /* eslint-enable */

  // store.dispatch(activateEasterEgg)

  return store
}
