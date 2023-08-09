import React from 'react'

type childprop = {
    children:React.ReactNode
}
const Oscar = (props:childprop) => {
  return (
    <div>{props.children}</div>
  )
}

export default Oscar