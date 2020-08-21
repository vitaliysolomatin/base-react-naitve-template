import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true,
  diff: true,
})

export default (rootReducer: any, rootSaga: any) => {
  const middleware = []
  const enhancers = []
  let composeEnhancers = compose

  if (__DEV__) {
    if (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    } else {
      middleware.push(logger)
    }
  }

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, composeEnhancers(...enhancers))

  sagaMiddleware.run(rootSaga)

  return { store }
}
