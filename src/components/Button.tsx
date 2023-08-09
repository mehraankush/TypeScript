import React, { HtmlHTMLAttributes } from 'react'

type buttonProp = {
    handleClick:(e:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}
const Button = (props:buttonProp) => {
  return (
    <div>
        <button onClick={(e)=>props.handleClick(e,1)}>Click</button>
    </div>
  )
}

export default Button