import './App.css'
import React from 'react'
import {Head, MainSection } from './container'
import { UserList, UserSearch } from './components'
import { UserListProvider } from './components/UserListContext'

const App = () => {
  
  return(

    <div className="app">
      <UserListProvider>
        <Head/>
        <UserList/>
      </UserListProvider>
    </div>
  )
}


export default App