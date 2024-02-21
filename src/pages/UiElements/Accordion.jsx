import React, { useState } from 'react';
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb';
import Accordion1 from '../../components/Accordion/Accordion1';
import Accordion2 from '../../components/Accordion/Accordion2';

const Accordion = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Accordion"} />
        <div className="flex flex-col gap-7">

          {/* accordion 1  */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-9">
              <h3 className="font-medium text-black">Accordions Style 1</h3>
            </div>
            <div className="p-4 sm:p-6 xl:p-9">
              <div className="grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-2 xl:gap-7">
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

          {/* accordion 2  */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-9">
              <h3 className="font-medium text-black">Accordions Style 2</h3>
            </div>
            <div className="p-4 sm:p-6 xl:p-9">
              <div className="flex flex-col gap-6">
                <Accordion2 question={"Can I use TailGrids Pro for my clients projects?"} answer={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."} open={openAccordionIndex === 5} setOpen={() => toggleAccordion(5)} />
                <Accordion2 question={"Which license type is suitable for me?"} answer={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything. "} open={openAccordionIndex === 6} setOpen={() => toggleAccordion(6)} />
                <Accordion2 question={"Is Windy UI Well-documented?"} answer={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything. "} open={openAccordionIndex === 7} setOpen={() => toggleAccordion(7)} />
                <Accordion2 question={" Do you provide support?"} answer={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything. "} open={openAccordionIndex === 8} setOpen={() => toggleAccordion(8)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
