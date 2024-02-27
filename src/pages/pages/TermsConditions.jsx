import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'

const TermsConditions = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Terms & Conditions"} />
      </div>
      <div   className="rounded-sm border border-stroke bg-white shadow-md">
        <div   className="flex flex-col gap-7 p-4 md:p-6 xl:p-9">
          <div>
            <h3   className="mb-5 text-title-md2 font-bold text-black">
              Terms &amp; Services
            </h3>

            <p   className="font-medium text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis quis ligula id molestie. Ut ultricies nulla sed
              mi elementum eleifend. Vivamus interdum mollis metus. Sed
              vitae orci porta, interdum nisi ac, vestibulum massa.
              Curabitur lorem sem, scelerisque ut lectus.
            </p>

            <p   className="mt-4 font-medium text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis quis ligula id molestie.
            </p>
          </div>

          <div>
            <h4   className="mb-5 text-title-sm2 font-bold leading-[30px] text-black">
              Lorem ipsum 1
            </h4>

            <p   className="font-medium text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis quis ligula id molestie. Ut ultricies nulla sed
              mi elementum eleifend. Vivamus interdum mollis metus. Sed
              vitae orci porta, interdum nisi ac, vestibulum massa.
              Curabitur lorem sem, scelerisque ut lectus Aliquam erat
              volutpat. Ut a diam ultrices, pellentesque magna iaculis,
              pellentesque lacus. Nulla at luctus ligula. Donec nibh est,
              elementum in tincidunt ac, luctus ut ipsum. In hac habitasse
              platea dictumst.
            </p>

            <p   className="mt-4 font-medium text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis quis ligula id molestie. Ut ultricies nulla sed
              mi elementum eleifend. Vivamus interdum mollis metus. Sed
              vitae orci porta, interdum nisi ac, vestibulum massa.
              Curabitur lorem sem.
            </p>

            <p   className="mt-4 font-medium text-secondary">
              Curabitur lorem sem, scelerisque ut lectus Aliquam erat
              volutpat. Ut a diam ultrices, pellentesque magna iaculis,
              pellentesque lacus. Nulla at luctus ligula. Donec nibh est,
              elementum in tincidunt ac, luctus ut ipsum. In hac habitasse
              platea dictumst Curabitur lorem sem, scelerisque erat
              volutpat.
            </p>
          </div>

          <div>
            <h4   className="mb-5 text-title-sm2 font-bold leading-[30px] text-black">
              Lorem ipsum 2
            </h4>

            <p   className="font-medium text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis quis ligula id molestie. Ut ultricies nulla sed
              mi elementum eleifend. Vivamus interdum mollis metus. Sed
              vitae orci porta, interdum nisi ac, vestibulum massa.
              Curabitur lorem sem.
            </p>

            <p   className="mt-4 font-medium text-secondary">
              Curabitur lorem sem, scelerisque ut lectus Aliquam erat
              volutpat. Ut a diam ultrices, pellentesque magna iaculis,
              pellentesque lacus. Nulla at luctus ligula. Donec nibh est,
              elementum in tincidunt ac, luctus ut ipsum. In hac habitasse
              platea dictumst Curabitur lorem sem, scelerisque erat
              volutpat.
            </p>
          </div>

          <div>
            <h4   className="mb-5 text-title-sm2 font-bold leading-[30px] text-black">
              Important Links
            </h4>

            <ul   className="flex flex-col gap-2">
              <li   className="font-medium text-primary underline">
                Lorem ipsum dolor sit amet,
              </li>
              <li   className="font-medium text-primary underline">
                Curabitur lorem sem scelerisque erat volutpat.
              </li>
              <li   className="font-medium text-primary underline">
                Scelerisque erat volutpat.
              </li>
              <li   className="font-medium text-primary underline">
                elementum eleifend
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsConditions
