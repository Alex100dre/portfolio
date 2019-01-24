import { createStore } from 'redux'
import rootReducer from '../reducers'

// const activateEasterEgg = {
//   type: 'EASTER_EGG_ENABLE',
//   payload: 'easterEgg',
// }


export default function configureStore() {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
  /* eslint-enable */

  // store.dispatch(activateEasterEgg)

  return store
}
