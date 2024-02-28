import React from 'react'
import BredCrumb from '../components/shared/Buredcrumb/BredCrumb'
import { Helmet } from 'react-helmet'

const Inbox = () => {
  return (
    <>
      <Helmet>
        <title>NurAdmin | Inbox</title>
      </Helmet>


      <div className='container_fluid'>
        <div className="mx-auto max-w-242.5">
          <BredCrumb pageName={"Inbox"} />
        </div>
      </div>
    </>
  )
}

export default Inbox
