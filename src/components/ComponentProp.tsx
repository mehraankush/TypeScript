import React from 'react'
import  Login  from './Login'
import { ProfileType } from './Profile'

type ComponentProp = {
    isLoggedIn: boolean
    Component:React.ComponentType<ProfileType>
}

const ComponentProp = ({isLoggedIn, Component}: ComponentProp) => {
    if(isLoggedIn){
        return <Component name="Shalu Mehra"/>
    }
    else{
        return <Login/>
    }
}

export default ComponentProp