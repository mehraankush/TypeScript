import { createContext ,useState} from "react";

type UserType = {
    username: string
    email: string
}

type UserChildrenType = {
    children:React.ReactNode
}

type UserConetxtType = {
    user: UserType | null
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>
}

export const UserConetxt = createContext({} as UserConetxtType)

export const UserContextProvider = ({children}:UserChildrenType)=>{
  const [user, setUser] = useState<UserType|null>(null);
  return (
    <UserConetxt.Provider value={{user,setUser}}>
        {children}
    </UserConetxt.Provider>
  )
}