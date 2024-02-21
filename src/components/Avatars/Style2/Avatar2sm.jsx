import React from 'react'

const Avatar2sm = ({userImg}) => {
  return (
    <div class="relative h-6 w-full max-w-6 rounded-full">
    <img src={userImg} alt="user" />
    <span class="absolute -right-px -top-px h-2 w-full max-w-2 rounded-full border border-white bg-[#219653]"></span>
  </div>
  )
}

export default Avatar2sm
