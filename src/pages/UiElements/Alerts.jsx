import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import AttentionNeeded from '../../components/Alerts/AttentionNeeded'
import MessageSentSuccessfully from '../../components/Alerts/MessageSentSuccessfully'
import ErrorMessage from '../../components/Alerts/ErrorMessage'

const Alerts = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Alerts"} />
        <div className="rounded-sm border border-stroke bg-white p-4 shadow-default md:p-6 xl:p-9">
          <div className="flex flex-col gap-7">
            {/* Alerts Item  */}
            <AttentionNeeded />
            {/* Alerts Item  */}
            <MessageSentSuccessfully />
            {/* Alerts Item  */}
           <ErrorMessage/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alerts
