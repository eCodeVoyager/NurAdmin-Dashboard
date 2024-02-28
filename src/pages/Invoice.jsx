import React from 'react'
import BredCrumb from '../components/shared/Buredcrumb/BredCrumb'
import InvoiceOne from '../components/Invoice/InvoiceOne'
import { Helmet } from 'react-helmet'

const Invoice = () => {
  return (
    <>
      <Helmet>
        <title>NurAdmin | Invoice</title>
      </Helmet>


      <div className='container_fluid'>
        <div className="mx-auto max-w-242.5">
          <BredCrumb pageName={"Invoice"} />
        </div>

        <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default">
          <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-9">
            <h3 className="font-medium text-black">Style 1</h3>
          </div>
          <InvoiceOne />

        </div>
      </div>
    </>
  )
}

export default Invoice
