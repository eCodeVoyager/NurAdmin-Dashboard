import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import NormalButton from '../../components/Buttons/NormalButtons/NormalButton'
import ButtonWithIcon from '../../components/Buttons/ButtonWithIcon/ButtonWithIcon'
import { MdOutlineMail } from "react-icons/md";
const Buttons = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Buttons"} />

        {/* Normal Buttons  */}
        <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default">
          <div className="border-b border-stroke px-7 py-4">
            <h3 className="font-medium text-black">
              Normal Button
            </h3>
          </div>
          <div className="p-4 md:p-6 xl:p-9">
            <div className="mb-7 flex flex-wrap gap-5 xl:gap-20">
              <NormalButton />
              <NormalButton className={"rounded-md"} />
              <NormalButton className={"rounded-full"} />
              <NormalButton className={"border-primary bg-transparent rounded-md text-primary border"} />
            </div>
            <div className="mb-7 flex flex-wrap gap-5 xl:gap-20">
              <NormalButton className={"bg-lightGreen"} />
              <NormalButton className={"rounded-md bg-lightGreen"} />
              <NormalButton className={"rounded-full bg-lightGreen"} />
              <NormalButton className={"border-lightGreen bg-transparent rounded-md text-lightGreen border"} />
            </div>
            <div className="mb-7 flex flex-wrap gap-5 xl:gap-20">
              <NormalButton className={"bg-dark"} />
              <NormalButton className={"rounded-md bg-dark"} />
              <NormalButton className={"rounded-full bg-dark"} />
              <NormalButton className={"border-dark bg-transparent rounded-md text-dark border"} />
            </div>
          </div>
        </div>

        {/* Buttons with Icon  */}
        <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default">
          <div className="border-b border-stroke px-7 py-4">
            <h3 className="font-medium text-black">
              Button With Icon
            </h3>
          </div>
          <div className="p-4 md:p-6 xl:p-9">
            <div className="mb-7 flex flex-wrap gap-5 xl:gap-20">
              <ButtonWithIcon icon={<MdOutlineMail className='text-2xl' />} className={""} />
              <ButtonWithIcon icon={<MdOutlineMail className='text-2xl' />} className={"bg-lightGreen"} />
              <ButtonWithIcon icon={<MdOutlineMail className='text-2xl' />} className={"bg-dark"} />
              <ButtonWithIcon icon={<MdOutlineMail className='text-2xl' />} className={"border-primary bg-transparent text-primary border"} />
            </div>
            <div className="mb-7 flex flex-wrap gap-5 xl:gap-20">
            <ButtonWithIcon icon={<MdOutlineMail className='text-2xl' />} className={" rounded-md"} />
              <ButtonWithIcon icon={<MdOutlineMail className='text-2xl' />} className={"bg-lightGreen rounded-md"} />
              <ButtonWithIcon icon={<MdOutlineMail className='text-2xl' />} className={"bg-dark rounded-md"} />
              <ButtonWithIcon icon={<MdOutlineMail className='text-2xl' />} className={"border-primary bg-transparent text-primary border rounded-md"} />
            </div>
            <div className="mb-7 flex flex-wrap gap-5 xl:gap-20">
            <ButtonWithIcon icon={<MdOutlineMail className='text-2xl' />} className={" rounded-full"} />
              <ButtonWithIcon icon={<MdOutlineMail className='text-2xl' />} className={"bg-lightGreen rounded-full"} />
              <ButtonWithIcon icon={<MdOutlineMail className='text-2xl' />} className={"bg-dark rounded-full"} />
              <ButtonWithIcon icon={<MdOutlineMail className='text-2xl' />} className={"border-primary bg-transparent text-primary border rounded-full"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buttons
