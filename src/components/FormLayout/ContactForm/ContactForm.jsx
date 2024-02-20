import React from 'react'
import DefaultInput from '../../FormElement/InputFields/DefaultInput'
import SelectInput1 from '../../FormElement/SelectInputs/SelectInput1/SelectInput1'
import DefaultTextAria from '../../FormElement/TextArias/DefaultTextAria'

const ContactForm = () => {
    return (
        <form action="#">
            <div class="p-6">
                <div class="mb-4 flex flex-col gap-6 xl:flex-row">
                    <div class="w-full xl:w-1/2">
                        <DefaultInput label={"First name"} placeholder={"Enter your first name"} type={"text"} isRequired={false} />
                    </div>

                    <div class="w-full xl:w-1/2">
                        <DefaultInput label={"Last name"} placeholder={"Enter your last name"} type={"text"} isRequired={false} />
                    </div>
                </div>

                <div class="mb-4">
                    <DefaultInput label={"Email *"} placeholder={"Enter your email address"} type={"email"} isRequired={true} />
                </div>

                <div class="mb-4">
                    <DefaultInput label={"Subject"} placeholder={"Enter subject"} type={"text"} isRequired={false} />
                </div>

                <div class="mb-4">
                    <SelectInput1 />
                </div>

                <div class="mb-6">
                    <DefaultTextAria label={"Message "} placeholder={"Type your message"} />
                </div>

                <button class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 text-white">
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default ContactForm
