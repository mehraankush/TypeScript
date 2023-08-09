import React from 'react'

type Onchangeprop = {
    value: string
}
const Input = (props:Onchangeprop) => {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target)
    }
  return (
    <div>
        <input type="text" value={props.value} onChange={(e)=>handleChange(e)}/>
    </div>
  )
}

export default Input