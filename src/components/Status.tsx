import React from 'react'

type statusProp = {
    status:'loading' | 'success' | 'error'
}
const Status = (props:statusProp) => {
  return (
    <div>{props.status}</div>
  )
}

export default Status