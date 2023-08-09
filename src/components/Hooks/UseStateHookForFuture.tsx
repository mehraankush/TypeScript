import React, { useState } from 'react'


type LogedInUser = {
  name:string 
  email:string
}
const UseStateForFuture = (props:LogedInUser) => {
    const [user, setuser] = useState<LogedInUser | null>(null);
    // const [user, setuser] = useState<LogedInUser>(//*{} as LogedInUser); type asseretion && don't need to use '?' for every check
    const handleLogin = () => {
      setuser(props)
    }
    const handleLogout = () => {
      setuser(null)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>LogOut</button>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
    </div>
  )
}

export default UseStateForFuture