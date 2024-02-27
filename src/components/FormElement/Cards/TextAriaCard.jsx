import React from 'react'
import DefaultTextAria from '../TextArias/DefaultTextAria'
import ActiveTextAria from '../TextArias/ActiveTextAria'
import DisAbleTextAria from '../TextArias/DisAbleTextAria'

const TextAriaCard = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="border-b border-stroke px-6 py-4">
        <h3 className="font-medium text-black">
          Textarea Fields
        </h3>
      </div>
      <div className="flex flex-col gap-5 p-6">
        <div>
          <DefaultTextAria label={"Default textarea"} placeholder={"Default textarea"} />
        </div>

        <div>
          <ActiveTextAria label={"Active textarea"} placeholder={"Active textarea"} />
        </div>

        <div>
          <DisAbleTextAria label={"Disabled textarea"} placeholder={"Disabled textarea"} />
        </div>
      </div>
    </div>
  )
}

export default TextAriaCard
