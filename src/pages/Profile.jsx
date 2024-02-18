import React from 'react'
import Card from '../components/screen/Profile/Card'
import BredCrumb from '../components/shared/Buredcrumb/BredCrumb'

const Profile = () => {
    return (
        <div className='container_fluid'>
            <div className="mx-auto max-w-242.5">
                <BredCrumb pageName={"Profile"}/>
                <Card />
            </div>
        </div>
    )
}

export default Profile
