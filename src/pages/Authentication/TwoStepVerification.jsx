import React from 'react'
import darkLogo from '../../assets/images/logo-dark.svg'
import TwoStepVerificationCard from '../../components/TwoStepVerificationCard/TwoStepVerificationCard'
import { Helmet } from 'react-helmet'
const TwoStepVerification = () => {
  return (
    <>
      <Helmet>
        <title>NurAdmin | Two step verification</title>
      </Helmet>
      <section className="overflow-hidden px-4 md:px-8">
        <div className="flex h-full flex-col items-center justify-center overflow-hidden">
          <div className="no-scrollbar overflow-y-auto py-20">
            <div className="mx-auto w-full max-w-[500px]">
              <div className="text-center">
                <a href="index.html" className="mx-auto mb-10 inline-flex">
                  <img src={darkLogo} alt="logo" className="" />
                </a>
                <TwoStepVerificationCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TwoStepVerification
