import React from 'react'


const Modal1 = ({closeModalOne}) => {




    return (
        <div className="fixed left-0 top-0 z-[999999] flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
            <div className="w-full max-w-xl rounded-lg bg-white px-8 py-12 text-center md:px-16 md:py-16">
                <h3 className="pb-2 text-xl font-bold text-black sm:text-2xl">
                    Your Message Sent Successfully
                </h3>
                <span className="mx-auto mb-6 inline-block h-1 w-24 rounded bg-primary"></span>
                <p className="mb-10 font-medium">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since
                </p>
                <div className="-mx-3 flex flex-wrap gap-y-4">
                    <div className="w-full px-3 lg:w-1/2">
                        <button onClick={closeModalOne} className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white hover:bg-red-600">
                            Cancel
                        </button>
                    </div>
                    <div className="w-full px-3 lg:w-1/2">
                        <button className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal1
