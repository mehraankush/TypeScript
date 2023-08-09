import React from 'react'

type ListItem<T> = {
    item:T[]
}

// we can pass any ristrictions in {} ex {id:number} now wvwey object should contain id prop

// export const GenericType = <T extends string|number}>({item }:ListItem<T>) => {
  
export const GenericType = <T extends {}>({item }:ListItem<T>) => {
  return (
    <div>
        {/* {
         item.map((it, index) =>(
            <p key={index}>{it}</p>
         ))
        } */}
    </div>
  )
}
