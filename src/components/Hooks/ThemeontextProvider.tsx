import { Children, createContext } from 'react'
import { theme } from './theme'

type themeContextProp ={
    children:React.ReactNode
}
export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({children}:themeContextProp) =>{
   return (<ThemeContext.Provider value={theme}> {children} </ThemeContext.Provider>)
}
