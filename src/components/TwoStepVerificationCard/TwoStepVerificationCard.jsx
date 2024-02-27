import React from 'react'

const TwoStepVerificationCard = () => {
    return (
        <div className="rounded-xl bg-white p-4 shadow-md lg:p-7 xl:p-12">
            <h1 className="mb-2.5 text-3xl font-black leading-[48px] text-black">
                Verify Your Account
            </h1>

            <p className="mb-7 font-medium text-secondary">
                Enter the 4 digit code sent to the registered email id.
            </p>

            <form>
                <div className="flex items-center gap-5">
                    <input type="text" className="w-full rounded-md border-[1.5px] border-stroke bg-transparent p-3 font-medium text-2xl text-center text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" />

                    <input type="text" className="w-full rounded-md border-[1.5px] border-stroke bg-transparent p-3 font-medium text-2xl text-center text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" />

                    <input type="text" className="w-full rounded-md border-[1.5px] border-stroke bg-transparent p-3 font-medium text-2xl text-center text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" />

                    <input type="text" className="w-full rounded-md border-[1.5px] border-stroke bg-transparent p-3 font-medium text-2xl text-center text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" />
                </div>

                <p className="mb-5 mt-4 text-left font-medium text-black">
                    Did not receive a code?
                    <button className="text-primary">Resend</button>
                </p>

                <button className="flex w-full justify-center rounded-md bg-primary p-[13px] font-bold text-gray hover:bg-opacity-90">
                    Verify
                </button>

                <span className="mt-5 block text-red-500">
                    Don’t share the verification code with anyone!
                </span>
            </form>
        </div>
    )
}

export default TwoStepVerificationCard
