import React from 'react'

const AvatarLG = ({userImg}) => {
  return (
    <div className="h-12 w-full max-w-12 rounded-full">
    <img src={userImg} alt="user" />
  </div>
  )
}

export default AvatarLG
