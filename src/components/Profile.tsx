import React from 'react'

export type ProfileType = {
    name:string
}
const Profile = (props:ProfileType) => {
  return (
    <div>Profile {props.name}</div>
  )
}

export default Profile