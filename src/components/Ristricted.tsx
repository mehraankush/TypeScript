import React from 'react'

type NumberProp = {
    value:number
}
type PositiveNum = NumberProp & {
    isPositive:boolean
    isNegative?:never
    isZero?:never
}
type NegativeNum = NumberProp & {
    isNegative:boolean
    isPositive?:never
    isZero?:never
}
type ZeroNum = NumberProp & {
    isZero:boolean
    isPositive?:never
    isNegative?:never
}

type PropType = PositiveNum | NegativeNum | ZeroNum 

const Ristricted = ({value,isNegative,isPositive,isZero}:PropType) => {
  return (
    <div>
        {value}
        {isPositive && "Positive"}
        {isNegative && "Negative"}
        {isZero && "Zero"}
    </div>
  )
}

export default Ristricted