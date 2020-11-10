import React, {useReducer, useContext, createContext} from 'react'
import {ThemeProvider} from 'styled-components'

export type ThemeSettings = {
  bg: string,
  color: string
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
      return MainTheme.light;
    case 'dark':
      return MainTheme.dark;
    default:
      throw new Error();
  }
}

export const MyContext = createContext<ThemeSettings>(MainTheme.dark)

export const ContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, MainTheme.light)

  return <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
}

export const MyThemeProvider = (props: any) => {
  const theme = useContext(MyContext)

  return (
    <ThemeProvider theme={theme}>
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