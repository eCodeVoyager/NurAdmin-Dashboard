import React from 'react'

const AvatarTwoLg = ({userImg}) => {
  return (
    <div class="relative h-12 w-full max-w-12 rounded-full">
    <img src={userImg} alt="user" />
    <span class="absolute -right-0.5 -top-0.5 h-4 w-full max-w-4 rounded-full border-[2.7px] border-white bg-[#219653]"></span>
  </div>
  )
}

export default AvatarTwoLg
