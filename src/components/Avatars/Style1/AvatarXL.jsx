import React from 'react'

const AvatarXL = ({ userImg }) => {
    return (
        <div className="h-20 w-full max-w-20 rounded-full">
            <img src={userImg} alt="user" />
        </div>
    )
}

export default AvatarXL
