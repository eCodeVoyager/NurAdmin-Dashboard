import React from 'react'
import FileUploadCursorNormal from '../FileUploadFields/FileUploadCursorNormal'
import FileUploadCursorPointer from '../FileUploadFields/FileUploadCursorPointer'

const FileUpload = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="border-b border-stroke px-6 py-4">
                <h3 className="font-medium text-black">
                    File upload
                </h3>
            </div>
            <div className="flex flex-col gap-5 p-6">
                <FileUploadCursorPointer/>
                <FileUploadCursorNormal/>
            </div>
        </div>
    )
}

export default FileUpload
