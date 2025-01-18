import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
import CardContextProvider from '../context/CardContextProvider'
import Card from './Card'

function Profile() {

  const {user} = useContext(UserContext)
  
  if (!user) return <div>Login Please</div>

  return (
    <>
      <div>Username : {user.username}</div>
      <div>Password : {user.password}</div>
      
    </>
  )
}

export default Profile
