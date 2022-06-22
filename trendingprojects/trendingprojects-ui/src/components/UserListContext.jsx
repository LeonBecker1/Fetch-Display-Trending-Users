import React, {useState, createContext} from 'react'
import User from './User/User';

export const UserListContext = createContext()

export const UserListProvider = ({children}) => {

  const [users, setusers] = useState([]);

  const renderusers = (
    <div className='renderUsers'>
      {users.map(user => (
        <User name={user.name} userName={user.userName} description={user.description} avatar={user.avatar} url={user.url} repoName={user.repoName} key={user.id}/>  
      ))}
    </div>
  )

  return (
      <UserListContext.Provider value={[users, setusers, renderusers]}>
          {children}
      </UserListContext.Provider>
  )
}

