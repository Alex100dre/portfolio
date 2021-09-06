import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

// const activateEasterEgg = {
//   type: 'EASTER_EGG_ENABLE',
//   payload: 'easterEgg',
// }


export default function configureStore() {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
  )
  /* eslint-enable */

  // store.dispatch(activateEasterEgg)

  return store
}
