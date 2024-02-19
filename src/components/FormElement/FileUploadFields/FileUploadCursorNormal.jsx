import React from 'react'

const FileUploadCursorNormal = () => {
    return (
        <div>
            <label class="mb-3 block text-sm font-medium text-black">
                Attach file
            </label>
            <input type="file" class="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-0 fill:border-r file:bg-[#EEEEEE] file:px-2.5 file:py-1 file:text-sm file:font-normal focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter file:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]" />
        </div>
    )
}

export default FileUploadCursorNormal
