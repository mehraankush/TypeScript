import React from 'react'

type personProp = { 
    name: { 
        first: string
        last: string
     }
}

const Person = (props:personProp) => {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}

export default Person