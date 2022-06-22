import React, { useContext, useState} from 'react'
import { useFetch } from '..'
import { UserListContext } from '../UserListContext'
import './UserSearch.css'


const UserSearch = () => {
  
  const [language, setlanguage] = useState("enter programming language")
  const [query, setquery] = useState("assembly")
  const [userList, setuserList] = useContext(UserListContext)
  const {data, loading, error, refetch } = useFetch(query)

  let handleSubmit = (e) => {
      e.preventDefault()
      setquery(language)
      setuserList([])
      refetch()
      setuserList(data)
  } 

  return (
    <div className='app__userSearch'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="language" className='app__userSearch--SearchBar'  
        value={language} onChange={(e)=> setlanguage(e.target.value)} required/>

        <button type='submit'>Search</button>
      </form>
      <div>
      {loading && <p>loading query</p>}
      {error && <p>fetch failed</p>}
      </div>
    </div>
  )
}

export default UserSearch