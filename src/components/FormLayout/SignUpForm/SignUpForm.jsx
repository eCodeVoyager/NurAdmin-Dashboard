import React from 'react'
import DefaultInput from '../../FormElement/InputFields/DefaultInput'
import FormButton from '../FormButton/FormButton'

const SignUpForm = () => {
    return (
        <div class="rounded-sm border border-stroke bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div class="border-b border-stroke px-6 py-4">
                <h3 class="font-medium text-black">
                    Sign Up Form
                </h3>
            </div>
            <form action="#">
                <div class="p-6">
                    <div class="mb-4">
                        <DefaultInput label={"Name "} placeholder={"Enter your Full name"} type={"text"} isRequired={false} />
                    </div>

                    <div class="mb-4">
                        <DefaultInput label={"Email "} placeholder={"Enter your Email address"} type={"email"} isRequired={true} />
                    </div>

                    <div class="mb-4">
                        <DefaultInput label={"Password"} placeholder={"Enter your Password"} type={"Password"} isRequired={true} />
                    </div>

                    <div class="mb-5">
                        <DefaultInput label={"Re-type Password "} placeholder={"Re-type Password "} type={"Password"} isRequired={true} />
                    </div>

                    <FormButton name={"Sign Up"} />
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
