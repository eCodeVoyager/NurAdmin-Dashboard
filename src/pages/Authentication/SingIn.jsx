import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import SignIn from '../../components/SignIn/SignIn'
import signInSvg from '../../assets/images/illustration-03.svg'
import logoDark from '../../assets/images/logo-dark.svg'
const SingIn = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Sing in"} />
      </div>

      <div className="rounded-sm border border-stroke bg-white shadow-md">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
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
          <SignIn />
        </div>
      </div>
    </div>
  )
}

export default SingIn
