import React from 'react'
import Greet  from './Greet'
const ComponentProps = (props:React.ComponentProps<typeof Greet>) => {
  return (
    <div>ComponentProps - {props.name}</div>
  )
}

export default ComponentProps