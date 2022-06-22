import React from 'react'
import './User.css'

const User = ({name, userName, avatar, description, url, repoName}) => {
  return (
    <div className='app__user'>
        <h3 className={`app__userlist--name`}>creator: {name}  username: {userName} </h3>
        <img src={avatar} alt="white.png" />
        <div>
          <p className='app__userlist--description'>description: {description}</p>
          <a href={url}>
           <p className='app__userlist--repo'>repository name: <span>{repoName}</span></p>
          </a>
        </div>
    </div>
  )
}

export default User