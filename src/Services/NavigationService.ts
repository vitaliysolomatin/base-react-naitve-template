import * as React from 'react'
import { StackActions, CommonActions } from '@react-navigation/native'

export const navigationRef: any = React.createRef()

/**
 * The navigation is implemented as a service so that it can be used outside of components, for example in sagas.
 *
 * @see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */

function navigate(routeName: string, params?: any) {
  if (navigationRef.current === null) {
    return
  }
  navigationRef.current?.navigate(routeName, params)
}

function navigateAndReset(routeName: string, params?: any) {
  if (navigationRef.current === null) {
    return
  }
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: routeName, params }],
    }),
  )
}

function replaceAndNavigate(routeName: string, params?: any) {
  if (navigationRef.current === null) {
    return
  }
  navigationRef.current?.dispatch(StackActions.replace(routeName, params))
}

function navigateBack() {
  navigationRef.current?.dispatch(StackActions.pop())
}

function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop())
}

function dismissModal() {
  popToTop()
  navigateBack()
}

export default {
  navigate,
  navigateAndReset,
  navigateBack,
  replaceAndNavigate,
  dismissModal,
  popToTop,
}
