import React from 'react'

type TextOwnProp<E extends React.ElementType> = {
    size?:'sm'|'lg'|'md'
    color?:'primary'|'secondary'
    children:React.ReactNode
    as?:E
}

type TextProp<E extends React.ElementType> = TextOwnProp<E> & Omit<React.ComponentProps<E>,keyof TextOwnProp<E>>

const Polymorphism = <E extends React.ElementType='div'>({children,as,size,color} : TextProp<E>) => {
    const Component = as || 'div'
  return (
    <Component>{children}</Component>
  )
}

export default Polymorphism