import React, { useState } from 'react'

const TabOne = () => {
    const [toggle, setToggle] = useState(1);

    const handleToggle = (id) => {
        setToggle(id)
    }

    return (
        <div className="mb-14 w-full p-7">
            <div className="mb-7 flex flex-wrap gap-3 border-b border-stroke px-4 py-3">
                <button onClick={() => setToggle(1)} className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6  ${toggle === 1 ? "bg-primary text-white " : "bg-gray-200 text-black"}`}>
                    Home
                </button>
                <button onClick={() => setToggle(2)} className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6   ${toggle === 2 ? "bg-primary text-white " : "bg-gray-200 text-black"}`}>
                    About Us
                </button>
                <button onClick={() => setToggle(3)} className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6  ${toggle === 3 ? "bg-primary text-white " : "bg-gray-200 text-black"}`}>
                    Our Team
                </button>
                <button onClick={() => setToggle(4)} className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${toggle === 4 ? "bg-primary text-white " : "bg-gray-200 text-black"}`}>
                    Company Details
                </button>
            </div>
            <div>
                {
                    toggle === 1 &&
                    <div className={`font-medium leading-relaxed text-secondary`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Officia nisi, doloribus nulla cumque molestias corporis
                        eaque harum vero! Quas sit odit optio debitis nulla
                        quisquam, dolorum quaerat animi iusto quod.
                    </div>
                }
                {
                    toggle === 2 &&
                    <div className={`font-medium leading-relaxed text-secondary`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Officia nisi, doloribus nulla cumque molestias corporis
                        eaque harum vero! Quas sit odit optio debitis nulla
                        quisquam, dolorum quaerat animi iusto quod. Lorem ipsum
                        dolor, sit amet consectetur adipisicing elit. Unde ex
                        dolorum voluptate cupiditate adipisci doloremque, vel quam
                        praesentium nihil veritatis.
                    </div>
                }
                {
                    toggle === 3 &&
                    <div className={`font-medium leading-relaxed text-secondary`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Officia nisi, doloribus nulla cumque molestias corporis
                        eaque harum vero! Quas sit odit optio debitis nulla
                        quisquam, dolorum quaerat animi iusto quod. <br />
                        <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Suscipit mollitia nam eligendi reprehenderit reiciendis
                        saepe laboriosam maiores voluptas. Quo, culpa amet fugiat
                        ipsam sed quod hic, veritatis ducimus recusandae repellat
                        quasi eaque, suscipit praesentium totam?
                    </div>
                }
                {
                    toggle === 4 &&
                    <div className={`font-medium leading-relaxed text-secondary`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Officia nisi, doloribus nulla cumque molestias corporis
                        eaque harum vero! Quas sit odit optio debitis nulla
                        quisquam, dolorum quaerat animi iusto quod.
                    </div>
                }


            </div>
        </div>
    )
}

export default TabOne
