import React, { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import createStore from './Stores/RootReducer'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackNavigator } from './Navigator'
import { navigationRef } from './Services/NavigationService'

const { store } = createStore()

const getActiveRouteName = (state) => {
  const route = state.routes[state.index]
  if (route.state) {
    return getActiveRouteName(route.state)
  }

  return route.name
}

const App = () => {
  const routeNameRef = useRef()

  useEffect(() => {
    let node = navigationRef.current
    const state = node?.getRootState()

    // Save the initial route name
    node = getActiveRouteName(state)
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        onStateChange={(state) => {
          const previousRouteName = routeNameRef.current
          const currentRouteName = getActiveRouteName(state)

          if (previousRouteName !== currentRouteName) {
            console.log('NAVIGATE', currentRouteName)
          }

          routeNameRef.current = currentRouteName
        }}
      >
        {RootStackNavigator()}
      </NavigationContainer>
    </Provider>
  )
}

export default App
