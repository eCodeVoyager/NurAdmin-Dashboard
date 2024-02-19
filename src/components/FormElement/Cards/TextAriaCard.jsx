import React from 'react'
import DefaultTextAria from '../TextArias/DefaultTextAria'
import ActiveTextAria from '../TextArias/ActiveTextAria'
import DisAbleTextAria from '../TextArias/DisAbleTextAria'

const TextAriaCard = () => {
  return (
    <div class="rounded-sm border border-stroke bg-white shadow-default">
    <div class="border-b border-stroke px-6 py-4">
      <h3 class="font-medium text-black">
        Textarea Fields
      </h3>
    </div>
    <div class="flex flex-col gap-5 p-6">
      <div>
       <DefaultTextAria/>
      </div>

      <div>
       <ActiveTextAria/>
      </div>

      <div>
     <DisAbleTextAria/>
      </div>
    </div>
  </div>
  )
}

export default TextAriaCard
