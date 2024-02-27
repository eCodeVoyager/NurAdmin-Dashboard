import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import PersonalInfo from '../../components/Setting/PersonalInfo'
import AddPhoto from '../../components/Setting/AddPhoto'

const Setting = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Settings "} />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <PersonalInfo/>
          </div>
          <div className="col-span-5 xl:col-span-2">
            <AddPhoto/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
