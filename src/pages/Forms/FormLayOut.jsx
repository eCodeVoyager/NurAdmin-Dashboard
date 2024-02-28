import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import ContactForm from '../../components/FormLayout/ContactForm/ContactForm'
import SignInForm from '../../components/FormLayout/SignInForm/SignInForm'
import SignUpForm from '../../components/FormLayout/SignUpForm/SignUpForm'
import { Helmet } from 'react-helmet'

const FormLayOut = () => {
  return (
    <>
      <Helmet>
        <title>NurAdmin | Form layout</title>
      </Helmet>
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Form Layout"} />
      </div>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* Contact Form  */}
            <ContactForm />
        </div>
        <div className="flex flex-col gap-9">
           {/* Sign In Form  */}
           <SignInForm/>

           {/* Sign Up Form  */}
           <SignUpForm/>
        </div>
      </div >
    </div >
    </>
  )
}

export default FormLayOut
