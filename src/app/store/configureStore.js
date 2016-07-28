//import storage from 'electron-json-storage';
import {compose, createStore} from 'redux';
import persistState from 'redux-localstorage'
import rootReducer from '../reducers'

const enhancer = compose(
  persistState()
)

export default function configureStore(preloadedState = enhancer) {
  const store = createStore(rootReducer, preloadedState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
