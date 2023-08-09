
type Person = {
    first:string 
    last:string
}

type personProp = {
  names:Person[]
}

const Group = (props:personProp) => {
  return (
    <div>
      {
        props.names.map(name =>(
          <ul>
            <li>{name.first}</li>
            <li>{name.last}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default Group