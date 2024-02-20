import React from 'react'

const ContactForm = () => {
  return (
    <form action="#">
    <div class="p-6">
      <div class="mb-4 flex flex-col gap-6 xl:flex-row">
        <div class="w-full xl:w-1/2">
          <label class="mb-3 block text-sm font-medium text-black">
            First name
          </label>
          <input type="text" placeholder="Enter your first name" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter " />
        </div>

        <div class="w-full xl:w-1/2">
          <label class="mb-3 block text-sm font-medium text-black dark:text-white">
            Last name
          </label>
          <input type="text" placeholder="Enter your last name" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter " />
        </div>
      </div>

      <div class="mb-4">
        <label class="mb-3 block text-sm font-medium text-black">
          Email <span class="text-meta-1">*</span>
        </label>
        <input type="email" placeholder="Enter your email address" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter " />
      </div>

      <div class="mb-4">
        <label class="mb-3 block text-sm font-medium text-black">
          Subject
        </label>
        <input type="text" placeholder="Select subject" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" />
      </div>

      <div class="mb-4">
        <label class="mb-3 block text-sm font-medium text-black">
          Subject
        </label>
        <div x-data="{ isOptionSelected: false }" class="relative z-20 bg-transparent dark:bg-form-input">
          <select class="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary" >
            <option value="" class="text-body">
              Type your subject
            </option>
            <option value="" class="text-body">USA</option>
            <option value="" class="text-body">UK</option>
            <option value="" class="text-body">Canada</option>
          </select>
          <span class="absolute right-4 top-1/2 z-30 -translate-y-1/2">
            <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.8">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill=""></path>
              </g>
            </svg>
          </span>
        </div>
      </div>

      <div class="mb-6">
        <label class="mb-3 block text-sm font-medium text-black">
          Message
        </label>
        <textarea rows="6" placeholder="Type your message" class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"></textarea>
      </div>

      <button class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 text-white">
        Send Message
      </button>
    </div>
  </form>
  )
}

export default ContactForm
