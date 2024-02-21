import React from 'react'

const AvatarSM = ({userImg}) => {
  return (
    <div class="h-6 w-full max-w-6 rounded-full">
    <img src={userImg} alt="user" />
  </div>

  )
}

export default AvatarSM
