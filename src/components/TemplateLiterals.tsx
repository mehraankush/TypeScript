import React from 'react'

type Horizontal = 'left' |'center'|'right'
type Vertical = 'top' |'center'|'bottom'

type Templit  = {
    positions: Exclude<`${Horizontal}-${Vertical}`,"center-center">|'center'
}

const TemplateLiterals = (props:Templit) => {
  return (
    <div>TemplateLiterals - {props.positions}</div>
  )
}

export default TemplateLiterals