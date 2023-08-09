import React from 'react'

type styleComponent = {
    styles:React.CSSProperties
}
const Container = (props:styleComponent) => {
  return (
    <div style={props.styles}> This is Styles Component </div>
  )
}

export default Container