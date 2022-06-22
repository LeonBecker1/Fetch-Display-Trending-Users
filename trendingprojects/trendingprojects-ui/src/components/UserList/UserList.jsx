import React, {useContext, useState} from 'react'
import { UserListContext } from '../UserListContext'
import './UserList.css'

const UserList = () => {

  const [users, setusers, renderusers] = useContext(UserListContext)
  
  return ( 
    <section className='app__userlist'>
      {renderusers}
    </section>     
  )

}

export default UserList