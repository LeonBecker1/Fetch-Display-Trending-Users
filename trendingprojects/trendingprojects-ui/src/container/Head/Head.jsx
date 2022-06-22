import React from 'react'
import {UserSearch} from '../../components'
import './Head.css'

const Head = () => {
  return (
    <header className='app__head'>
        <h1 className='app__head--heading'>Frontend for displaying popular GitHub Projects by Language</h1>
        <UserSearch></UserSearch>
    </header>
  )
}

export default Head