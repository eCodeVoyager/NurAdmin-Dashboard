import React from 'react'
import { Helmet } from 'react-helmet'
import BredCrumb from '../components/shared/Buredcrumb/BredCrumb'

const Charts = () => {
  return (
    <>
      <Helmet>
        <title>NurAdmin | Charts</title>
      </Helmet>

      <div className='container_fluid'>
        <div className="mx-auto max-w-242.5">
          <BredCrumb pageName={"Charts"} />
        </div>
      </div>
    </>
  )
}

export default Charts
