import React from 'react'

const AvatarMD = ({userImg}) => {
    return (
        <div class="h-9 w-full max-w-9 rounded-full">
            <img src={userImg} alt="user" />
        </div>
    )
}

export default AvatarMD
