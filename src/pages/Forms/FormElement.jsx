import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import InputCard from '../../components/FormElement/Cards/InputCard'
import TextAriaCard from '../../components/FormElement/Cards/TextAriaCard'
import ToggleSwitch from '../../components/FormElement/Cards/ToggleSwitch'
import DateTimeCard from '../../components/FormElement/Cards/DateTimeCard'
import FileUpload from '../../components/FormElement/Cards/FileUpload'

const FormElement = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Form Elements"} />

        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
          <div className="flex flex-col gap-9">
            <InputCard/>
            <ToggleSwitch/>
            <DateTimeCard/>
            <FileUpload/>
          </div>
          <div className="flex flex-col gap-9">
            <TextAriaCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormElement
