import React from 'react'

const Avatar2md = ({userImg}) => {
  return (
    <div class="relative h-9 w-full max-w-9 rounded-full">
    <img src={userImg} alt="user" />
    <span class="absolute -right-0.5 -top-0.5 h-3 w-full max-w-3 rounded-full border-2 border-white bg-[#219653]"></span>
  </div>
  )
}

export default Avatar2md
