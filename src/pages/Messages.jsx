import React from 'react'
import BredCrumb from '../components/shared/Buredcrumb/BredCrumb'
import { Helmet } from 'react-helmet'

const Messages = () => {
  return (
    <>
      <Helmet>
        <title>NurAdmin | Messages</title>
      </Helmet>

      <div className='container_fluid'>
        <div className="mx-auto max-w-242.5">
          <BredCrumb pageName={"Messages"} />
        </div>
      </div>
    </>
  )
}

export default Messages
