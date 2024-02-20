import React from 'react'
import DefaultInput from '../../FormElement/InputFields/DefaultInput'
import SelectInput1 from '../../FormElement/SelectInputs/SelectInput1/SelectInput1'
import DefaultTextAria from '../../FormElement/TextArias/DefaultTextAria'
import FormButton from '../FormButton/FormButton'

const ContactForm = () => {
    return (

        <div class="rounded-sm border border-stroke bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div class="border-b border-stroke px-6 py-4">
                <h3 class="font-medium text-black">
                    Contact Form
                </h3>
            </div>
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

                    <FormButton name={" Send Message"}/>
                </div>
            </form>

        </div>

    )
}

export default ContactForm
