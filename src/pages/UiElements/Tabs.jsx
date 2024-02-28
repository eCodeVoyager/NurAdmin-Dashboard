import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import TabOne from '../../components/Tabs/TabOne'
import TabTwo from '../../components/Tabs/TabTwo'
import { Helmet } from 'react-helmet'

const Tabs = () => {
  return (
    <>
      <Helmet>
        <title>NurAdmin | Tabs</title>
      </Helmet>

      <div className='container_fluid'>
        <div className="mx-auto max-w-242.5">
          <BredCrumb pageName={"Tabs"} />

          <div className="flex flex-col gap-9">
            {/* Tab one  */}
            <div className="rounded-sm border border-stroke bg-white shadow-default">
              <div className="border-b border-stroke px-7 py-4">
                <h3 className="font-medium text-black">
                  Tab Style 1
                </h3>
              </div>
              <TabOne />
            </div>


            {/* Tab one  */}
            <div className="rounded-sm border border-stroke bg-white shadow-default">
              <div className="border-b border-stroke px-7 py-4">
                <h3 className="font-medium text-black">
                  Tab Style 2
                </h3>
              </div>
              <TabTwo />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabs
