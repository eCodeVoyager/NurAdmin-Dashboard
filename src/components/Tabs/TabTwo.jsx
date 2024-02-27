import React, { useState } from 'react'

const TabTwo = () => {
    const [toggle, setToggle] = useState(1);

    const handleToggle = (id) => {
        setToggle(id)
    }
    return (
        <div className="mb-14 w-full p-7">
            <div className="mb-6 flex flex-wrap gap-5 border-b border-stroke sm:gap-10">
                <button onClick={() => handleToggle(1)} className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${toggle === 1 ? "border-primary text-primary" : "border-transparent"}`}>
                    Profile
                </button>
                <button onClick={() => handleToggle(2)} className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${toggle === 2 ? "border-primary text-primary" : "border-transparent"}`}>
                    Password
                </button>
                <button onClick={() => handleToggle(3)} className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${toggle === 3 ? "border-primary text-primary" : "border-transparent"}`}>
                    Team
                </button>
                <button onClick={() => handleToggle(4)} className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${toggle === 4 ? "border-primary text-primary" : "border-transparent"}`}>
                    Notification
                </button>
            </div>
            <div>
                {
                    toggle === 1 &&
                    <div className="font-medium leading-relaxed text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse luctus ligula nec dolor placerat, a consequat
                        elit volutpat. Quisque nibh lacus, posuere et turpis in,
                        pretium facilisis nisl. Proin congue sem vel sollicitudin
                        sagittis. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per
                    </div>
                }
                {
                    toggle === 2 &&
                    <div className="font-medium leading-relaxed text-secondary">
                        Tab2 ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse luctus ligula nec dolor placerat, a consequat
                        elit volutpat. Quisque nibh lacus, posuere et turpis in,
                        pretium facilisis nisl. Proin congue sem vel sollicitudin
                        sagittis. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per
                    </div>
                }
                {
                    toggle === 3 &&
                    <div className="font-medium leading-relaxed text-secondary">
                        Tab4 Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Officia nisi, doloribus nulla cumque molestias
                        corporis eaque harum vero! Quas sit odit optio debitis
                        nulla quisquam, dolorum quaerat animi iusto quod.
                    </div>
                }
                {
                    toggle === 4 &&
                    <div className="font-medium leading-relaxed text-secondary">
                        Tab5 Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Officia nisi, doloribus nulla cumque molestias
                        corporis eaque harum vero! Quas sit odit optio debitis
                        nulla quisquam, dolorum quaerat animi iusto quod.
                    </div>
                }
                {
                    toggle === 5 &&
                    <div className="font-medium leading-relaxed text-secondary">
                    Tab6 Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Officia nisi, doloribus nulla cumque molestias
                    corporis eaque harum vero! Quas sit odit optio debitis
                    nulla quisquam, dolorum quaerat animi iusto quod.
                </div>
                }




              
            </div>
        </div>
    )
}

export default TabTwo
