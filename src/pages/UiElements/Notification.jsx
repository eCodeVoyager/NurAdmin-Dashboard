import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import NotificationStyle1 from '../../components/Notifications/NotificationStyle1'
import NotificationStyle2 from '../../components/Notifications/NotificationStyle2'
import NotificationStyle3 from '../../components/Notifications/NotificationStyle3'
import NotificationStyle4 from '../../components/Notifications/NotificationStyle4'
import userImg1 from '../../assets/images/user-03.png'
import userImg2 from '../../assets/images/user-22.png'
import userImg3 from '../../assets/images/user-23.png'
import userImg4 from '../../assets/images/user-24.png'
import userImg5 from '../../assets/images/user-25.png'

const Notification = () => {
  const userData = [
    {
      assignedTo: "Dwayne Bero",
      project: "Project assigned by the manager",
      timestamp: "5 min ago",
      date: "24, Nov 2027",
      image: userImg1
    },
    {
      assignedTo: "Talan Curtis ",
      project: "Approved date for sanction of load is verified ",
      timestamp: "22, Feb 2027 ",
      date: "24, Nov 2027",
      image: userImg2
    },
    {
      assignedTo: "Talan Rhiel Madsen  ",
      project: "Admin and other team accepted your work request",
      timestamp: "12 min ago  ",
      date: "12, Jan 2027 ",
      image: userImg3
    },
    {
      assignedTo: "Charlie Botosh",
      project: "Temporarily your account has been suspended ",
      timestamp: "1 year ago",
      date: "09, Dec 2026 ",
      image: userImg4
    },
    {
      assignedTo: "Jordyn Torff",
      project: "You have changed your password successfully  ",
      timestamp: "1 year ago",
      date: "30, Mar 2026 ",
      image: userImg5
    },
  ]

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


          {/* Notification style three  */}
          <div class="rounded-sm border border-stroke bg-white shadow-default ">
            <div class="border-b border-stroke px-4 py-4 md:px-6 xl:px-7">
              <h3 class="font-medium text-black">
                Notifications Style three
              </h3>
            </div>

            <div class="p-4 sm:p-6 xl:p-10">
              <NotificationStyle3 />
            </div>
          </div>


          {/* Notification style four  */}
          <div class="rounded-sm border border-stroke bg-white shadow-default ">
            <div class="border-b border-stroke px-4 py-4 md:px-6 xl:px-7">
              <h3 class="font-medium text-black">
                Notifications Style three
              </h3>
            </div>

            <div class="p-4 sm:p-6 xl:p-10">
              <div className="flex flex-col gap-5">
                {
                  userData.map((user, idx) => <NotificationStyle4 mainBoxClass={idx === 3 ? "border-red-500" : ""} activeSignClass={idx === 3? "bg-red-500":""} user={user} />)
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification
