import React from 'react'

type childProp = {
    children:string
}
const Heading = (props:childProp) => {
  return (
    <div>{props.children}</div>
  )
}

export default Heading