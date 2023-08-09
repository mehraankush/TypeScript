import React ,{ useContext } from 'react'
import { ThemeContext } from './ThemeontextProvider'

const ThemeBox = () => {
    const theme = useContext(ThemeContext)
  return (
    <div style={{background:theme.primary.main,color:theme.secondary.text}}> This is a Theme Box For useContext </div>
  )
}

export default ThemeBox