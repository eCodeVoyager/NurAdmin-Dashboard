import React from 'react'

const FileUploadCursorPointer = () => {
  return (
    <div>
         <label class="mb-3 block text-sm font-medium text-black">
                        Attach file
                    </label>
                    <input type="file" class="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" />
    </div>
  )
}

export default FileUploadCursorPointer
