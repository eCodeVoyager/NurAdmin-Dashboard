import React, { useState } from 'react';
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb';
import Accordion1 from '../../components/Accordion/Accordion1';

const Accordion = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Accordion"} />
        <div className="flex flex-col gap-7.5">
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-9">
              <h3 className="font-medium text-black">Accordions Style 1</h3>
            </div>
            <div className="p-4 sm:p-6 xl:p-9">
              <div className="grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-2 xl:gap-7.5">
                <div className="flex flex-col gap-6">
                  <Accordion1 open={openAccordionIndex === 0} setOpen={() => toggleAccordion(0)} />
                  <Accordion1 open={openAccordionIndex === 1} setOpen={() => toggleAccordion(1)} />
                </div>
                <div className="flex flex-col gap-6">
                  <Accordion1 open={openAccordionIndex === 2} setOpen={() => toggleAccordion(2)} />
                  <Accordion1 open={openAccordionIndex === 3} setOpen={() => toggleAccordion(3)} />
                  <Accordion1 open={openAccordionIndex === 4} setOpen={() => toggleAccordion(4)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
