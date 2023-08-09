import React,{ useState } from 'react'

const UseStateHook = () => {
  const [toggle, settoggle] = useState(false)

  const handleLogin = () => {
    settoggle(true)
  }
  const handleLogout = () => {
    settoggle(false)
  }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>LogOut</button>
        <div>User is  {toggle?"LoggedIn" : "LoggedOut"}</div>
    </div>
  )
}

export default UseStateHook