
type Greetprop = {
    name: string
    age?: number
    isLoggedIn: boolean
}

const Greet = (prop:Greetprop) => {
  return (
    <div>
        {
            prop.isLoggedIn? `Hello ${prop.name} welcome! you are ${prop.age}`:"Welome User"
        }
    </div>
  )
}

export default Greet