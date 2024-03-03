import React from 'react'

const Breadcrumb3 = () => {
    return (
        <div className="rounded-md border border-stroke bg-whiter p-4 py-3 sm:px-6 sm:py-5 xl:px-7">
            <nav>
                <ol className="flex flex-wrap items-center gap-3">
                    <li>
                        <a className="flex items-center gap-3.5 font-medium text-black hover:text-primary" href="index.html">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-3 font-medium" href="#">
                            <svg className="fill-current" width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.80682 0.818303L2.05682 14.7501H0.255682L4.00568 0.818303H5.80682Z" fill=""></path>
                            </svg>
                            <span className="hover:text-primary text-secondary">Projects</span>
                        </a>
                    </li>
                    <li className="flex items-center gap-3 font-medium text-secondary">
                        <svg className="fill-current" width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.80682 0.818303L2.05682 14.7501H0.255682L4.00568 0.818303H5.80682Z" fill=""></path>
                        </svg>
                        Marketing
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb3
