import React from 'react'

const ListStyle1 = () => {
  return (
    <div class="min-w-[370px] max-w-max rounded-md border border-stroke py-1">
    <ul class="flex flex-col">
      <li class="flex items-center gap-2.5 border-b border-stroke px-5 py-3 last:border-b-0">
        <span class="flex h-6 w-full max-w-6 items-center justify-center rounded-full bg-primary text-white">
          1
        </span>
        <span className='text-secondary'> Lorem ipsum dolor sit amet </span>
      </li>

      <li class="flex items-center gap-2 border-b border-stroke px-5 py-3 last:border-b-0 ">
        <span class="flex h-6 w-full max-w-6 items-center justify-center rounded-full bg-primary text-white">
          2
        </span>
        <span className='text-secondary'> It is a long established fact reader </span>
      </li>

      <li class="flex items-center gap-2 border-b border-stroke px-5 py-3 last:border-b-0 ">
        <span class="flex h-6 w-full max-w-6 items-center justify-center rounded-full bg-primary text-white">
          3
        </span>
        <span className='text-secondary'> The point of using Lorem Ipsum </span>
      </li>

      <li class="flex items-center gap-2 border-b border-stroke px-5 py-3 last:border-b-0 ">
        <span class="flex h-6 w-full max-w-6 items-center justify-center rounded-full bg-primary text-white">
          4
        </span>
        <span className='text-secondary'> There are many variations of passages </span>
      </li>

      <li class="flex items-center gap-2 border-b border-stroke px-5 py-3 last:border-b-0 ">
        <span class="flex h-6 w-full max-w-6 items-center justify-center rounded-full bg-primary text-white">
          5
        </span>
        <span className='text-secondary'> If you are going to use a of Lorem </span>
      </li>
    </ul>
  </div>
  )
}

export default ListStyle1
