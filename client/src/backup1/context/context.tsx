import React, {useReducer, useContext, createContext} from 'react'
import {ThemeProvider} from 'styled-components'

export type ThemeSettings = {
  bg: string,
  color: string
}

export interface ThemeObject {
  state: ThemeSettings,
  dispatch: React.Dispatch<any>
}

export const MainTheme = {
  light: {
    bg: '#ffffff',
    color: '#000000'
  },
  dark: {
    bg: '#000000',
    color: '#ffffff',
  },
}

const reducer = (state: ThemeSettings, action: any) => {
  switch (action.type) {
    case 'light':
      console.log('Light')
      return MainTheme.light;
    case 'dark':
      console.log('Dark')
      return MainTheme.dark;
    default:
      throw new Error();
  }
}

export const MyContext = createContext<ThemeObject>({
  state: MainTheme.light,
  dispatch: () => null
})

export const ContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, MainTheme.light)

  return <MyContext.Provider value={{state, dispatch}}>{props.children}</MyContext.Provider>
}

export const MyThemeProvider = (props: any) => {
  const theme = useContext(MyContext)

  return (
    <ThemeProvider theme={theme.state}>
      {props.children}
    </ThemeProvider>
  )
}

export const Providers = (props: any) => {
  return (
    <ContextProvider>
      <MyThemeProvider>
        {props.children}
      </MyThemeProvider>
    </ContextProvider>
  )
}