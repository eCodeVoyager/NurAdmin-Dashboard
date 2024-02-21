import React from 'react'

const Avatar2xl = ({userImg}) => {
  return (
    <div class="relative h-20 w-full max-w-20 rounded-full">
    <img src={userImg} alt="user" />
    <span class="absolute right-0 top-0 h-5 w-full max-w-5 rounded-full border-[3px] border-white bg-[#219653]"></span>
  </div>
  )
}

export default Avatar2xl
