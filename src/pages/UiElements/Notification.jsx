import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import NotificationStyle1 from '../../components/Notifications/NotificationStyle1'
import NotificationStyle2 from '../../components/Notifications/NotificationStyle2'

const Notification = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Notification"} />


        <div className="flex flex-col gap-7">
          {/* Notification style one  */}
          <div class="rounded-sm border border-stroke bg-white shadow-default ">
            <div class="border-b border-stroke px-4 py-4 md:px-6 xl:px-7">
              <h3 class="font-medium text-black">
                Notifications Style 1
              </h3>
            </div>

            <div class="p-4 sm:p-6 xl:p-10">
              <NotificationStyle1 />
            </div>
          </div>

          {/* Notification style two  */}
          <div class="rounded-sm border border-stroke bg-white shadow-default ">
            <div class="border-b border-stroke px-4 py-4 md:px-6 xl:px-7">
              <h3 class="font-medium text-black">
                Notifications Style two
              </h3>
            </div>

            <div class="p-4 sm:p-6 xl:p-10">
              <NotificationStyle2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification
