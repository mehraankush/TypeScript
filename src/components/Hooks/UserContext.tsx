import React,{ useContext } from 'react'
import { UserConetxt } from './UserContextForFuture'

const UserContext = () => {
    const user = useContext(UserConetxt)

    const handleLogin = () => {
        user.setUser({
            username:"Ankush",
            email:"ankush@gmail.com",
        })
    }
    const handleLogOut = () => {
            user.setUser(null)
        }
        
  return (
    <div>
        <button onClick={handleLogin}>LogIn</button>
        <button onClick={handleLogOut}>LogOut</button>
        <p>{user.user?.username}</p>
        <p>{user.user?.email}</p>
    </div>
  )
}

export default UserContext