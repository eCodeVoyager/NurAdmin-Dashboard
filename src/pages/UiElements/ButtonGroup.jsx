import React from 'react'
import NormalButtonGroup from '../../components/ButtonGroup/NormalButtonGroup'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import { RiUser6Line } from "react-icons/ri";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { TfiRulerPencil } from "react-icons/tfi";
const ButtonGroup = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Buttons Group"} />
      </div>
      {/* Buttons Group */}
      <div className="flex flex-col gap-7">
        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7.5">
            <h3 className="font-medium text-black">
              Buttons Group
            </h3>
          </div>
          <div className="p-4 sm:p-5 xl:p-7.5">
            <div className="flex flex-col gap-6">
              <NormalButtonGroup buttonOneText={"About"} buttonTwoText={"Profile"} buttonThreeText={"Services"} />
              <NormalButtonGroup buttonOneText={"About"} buttonTwoText={"Profile"} buttonThreeText={"Services"} buttonOneClass={"rounded-s-md"} buttonThreeClass={"rounded-e-md"} />
              <NormalButtonGroup buttonOneText={"About"} buttonTwoText={"Profile"} buttonThreeText={"Services"} buttonThreeClass={"rounded-e-full"} buttonOneClass={"rounded-s-full"} />
            </div>
          </div>
        </div>
      </div>


      {/* Buttons Group with icon*/}
      <div className="flex flex-col gap-7">
        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7.5">
            <h3 className="font-medium text-black">
              Buttons Group
            </h3>
          </div>
          <div className="p-4 sm:p-5 xl:p-7.5">
            <div className="flex flex-col gap-6">
              <NormalButtonGroup buttonOneText={"About"} buttonTwoText={"Profile"} buttonThreeText={"Services"} firstIcon={<RiUser6Line className='text-xl' />} secondIcon={<LiaMoneyBillWaveAltSolid className='text-2xl' />} thirdIcon={<TfiRulerPencil className='text-xl' />} />
              <NormalButtonGroup buttonOneText={"About"} buttonTwoText={"Profile"} buttonThreeText={"Services"} buttonOneClass={"rounded-s-md"} buttonThreeClass={"rounded-e-md"} firstIcon={<RiUser6Line className='text-xl' />} secondIcon={<LiaMoneyBillWaveAltSolid className='text-2xl' />} thirdIcon={<TfiRulerPencil className='text-xl' />}/>
              <NormalButtonGroup buttonOneText={"About"} buttonTwoText={"Profile"} buttonThreeText={"Services"} buttonThreeClass={"rounded-e-full"} buttonOneClass={"rounded-s-full"} firstIcon={<RiUser6Line className='text-xl' />} secondIcon={<LiaMoneyBillWaveAltSolid className='text-2xl' />} thirdIcon={<TfiRulerPencil className='text-xl' />}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonGroup
