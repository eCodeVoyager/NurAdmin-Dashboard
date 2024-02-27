import React from 'react'
import DefaultInput from '../../FormElement/InputFields/DefaultInput'
import FormButton from '../FormButton/FormButton'

const SignUpForm = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="border-b border-stroke px-6 py-4">
                <h3 className="font-medium text-black">
                    Sign Up Form
                </h3>
            </div>
            <form action="#">
                <div className="p-6">
                    <div className="mb-4">
                        <DefaultInput label={"Name "} placeholder={"Enter your Full name"} type={"text"} isRequired={false} />
                    </div>

                    <div className="mb-4">
                        <DefaultInput label={"Email "} placeholder={"Enter your Email address"} type={"email"} isRequired={true} />
                    </div>

                    <div className="mb-4">
                        <DefaultInput label={"Password"} placeholder={"Enter your Password"} type={"Password"} isRequired={true} />
                    </div>

                    <div className="mb-5">
                        <DefaultInput label={"Re-type Password "} placeholder={"Re-type Password "} type={"Password"} isRequired={true} />
                    </div>

                    <FormButton name={"Sign Up"} />
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
