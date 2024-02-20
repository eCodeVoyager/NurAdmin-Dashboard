import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import ContactForm from '../../components/FormLayout/ContactForm/ContactForm'

const FormLayOut = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Form Layout"} />
      </div>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div class="rounded-sm border border-stroke bg-white shadow-default">
            <div class="border-b border-stroke px-6 py-4">
              <h3 class="font-medium text-black">
                Contact Form
              </h3>
            </div>
            <ContactForm />
          </div>

        </div>
        <div className="flex flex-col gap-9"></div>
      </div >
    </div >
  )
}

export default FormLayOut
