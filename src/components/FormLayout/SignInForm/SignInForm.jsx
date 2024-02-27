import React from 'react'
import DefaultInput from '../../FormElement/InputFields/DefaultInput'
import FormButton from '../FormButton/FormButton'
import RememberMe from '../RememberMe/RememberMe'

const SignInForm = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="border-b border-stroke px-6 py-4">
                <h3 className="font-medium text-black">
                    Sign In Form
                </h3>
            </div>
            <form action="#">
                <div className="p-6">
                    <div className="mb-4">
                        <DefaultInput label={"Email "} placeholder={"Enter your email address"} type={"email"} isRequired={true} />
                    </div>

                    <div>
                        <DefaultInput label={"Password"} placeholder={"Enter your Password"} type={"password"} isRequired={true} />
                    </div>

                    <div className="mb-5 mt-5 flex items-center justify-between">
                        <RememberMe />
                    </div>

                    <FormButton name={"Sign In"} />
                </div>
            </form>
        </div>
    )
}

export default SignInForm
