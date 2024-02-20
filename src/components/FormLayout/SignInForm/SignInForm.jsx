import React from 'react'
import DefaultInput from '../../FormElement/InputFields/DefaultInput'
import FormButton from '../FormButton/FormButton'
import RememberMe from '../RememberMe/RememberMe'

const SignInForm = () => {
    return (
        <div class="rounded-sm border border-stroke bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div class="border-b border-stroke px-6 py-4">
                <h3 class="font-medium text-black">
                    Sign In Form
                </h3>
            </div>
            <form action="#">
                <div class="p-6">
                    <div class="mb-4">
                        <DefaultInput label={"Email "} placeholder={"Enter your email address"} type={"email"} isRequired={true} />
                    </div>

                    <div>
                        <DefaultInput label={"Password"} placeholder={"Enter your Password"} type={"password"} isRequired={true} />
                    </div>

                    <div class="mb-5 mt-5 flex items-center justify-between">
                        <RememberMe />
                    </div>

                    <FormButton name={"Sign In"} />
                </div>
            </form>
        </div>
    )
}

export default SignInForm
