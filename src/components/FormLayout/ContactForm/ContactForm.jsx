import React from 'react'
import DefaultInput from '../../FormElement/InputFields/DefaultInput'
import SelectInput1 from '../../FormElement/SelectInputs/SelectInput1/SelectInput1'
import DefaultTextAria from '../../FormElement/TextArias/DefaultTextAria'
import FormButton from '../FormButton/FormButton'

const ContactForm = () => {
    return (

        <div className="rounded-sm border border-stroke bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="border-b border-stroke px-6 py-4">
                <h3 className="font-medium text-black">
                    Contact Form
                </h3>
            </div>
            <form action="#">
                <div className="p-6">
                    <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <DefaultInput label={"First name"} placeholder={"Enter your first name"} type={"text"} isRequired={false} />
                        </div>

                        <div className="w-full xl:w-1/2">
                            <DefaultInput label={"Last name"} placeholder={"Enter your last name"} type={"text"} isRequired={false} />
                        </div>
                    </div>

                    <div className="mb-4">
                        <DefaultInput label={"Email *"} placeholder={"Enter your email address"} type={"email"} isRequired={true} />
                    </div>

                    <div className="mb-4">
                        <DefaultInput label={"Subject"} placeholder={"Enter subject"} type={"text"} isRequired={false} />
                    </div>

                    <div className="mb-4">
                        <SelectInput1 />
                    </div>

                    <div className="mb-6">
                        <DefaultTextAria label={"Message "} placeholder={"Type your message"} />
                    </div>

                    <FormButton name={" Send Message"}/>
                </div>
            </form>

        </div>

    )
}

export default ContactForm
