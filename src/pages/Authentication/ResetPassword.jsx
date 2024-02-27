import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import signInSvg from '../../assets/images/illustration-03.svg'
import logoDark from '../../assets/images/logo-dark.svg'
import ResetPasswordForm from '../../components/ResetPasswordForm/ResetPasswordForm'
const ResetPassword = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Reset Password"} />
      </div>

      <div className="rounded-sm border border-stroke bg-white shadow-md">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full border-stroke xl:block xl:w-1/2 xl:border-r-2">
            <div className="px-24 py-20 text-center">
              <a className="mb-5 inline-block" href="index.html">
                <img className="" src={logoDark} alt="Logo" />
              </a>

              <p className="font-medium 2xl:px-20 text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>

              <span className="mt-16 inline-block">
                <img src={signInSvg} alt="illustration" />
              </span>
            </div>
          </div>
          {/* reset password form  */}
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
