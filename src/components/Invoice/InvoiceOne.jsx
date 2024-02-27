import React from 'react'
import invoiceImg from '../../assets/images/invoice.png'
const InvoiceOne = () => {

    return (
        <div className="p-4 md:p-6 xl:p-9">
            <div className="flex flex-col-reverse gap-5 xl:flex-row xl:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row xl:gap-9">
                    <div>
                        <p className="mb-1.5 font-medium text-black">
                            From
                        </p>
                        <h4 className="mb-4 text-[22px] font-medium leading-[30px] text-black">
                            Roger Culhane
                        </h4>
                        <a href="#" className="block text-secondary"><span className="font-medium">Email: </span>
                            contact@example.com</a>
                        <span className="mt-2 block text-secondary"><span className="font-medium">Address: </span> 2972
                            Westheimer Rd. Santa Ana.</span>
                    </div>
                    <div>
                        <p className="mb-1.5 font-medium text-black ">
                            To
                        </p>
                        <h4 className="mb-4 text-[22px] font-medium leading-[30px] text-black">
                            Cristofer Levin
                        </h4>
                        <a href="#" className="block  text-secondary"><span className="font-medium">Email: </span>
                            contact@example.com</a>
                        <span className="mt-2 block  text-secondary"><span className="font-medium">Address: </span> New York, USA
                            2707 Davis Anenue
                        </span>
                    </div>
                </div>
                <h3 className="text-2xl font-medium text-black">
                    Order #15478
                </h3>
            </div>

            <div className="my-10 rounded-sm border border-stroke p-5 dark:border-strokedark">
                <div className="items-center sm:flex">
                    <div className="mb-3 mr-6 h-20 w-20 sm:mb-0">
                        <img src={invoiceImg} alt="product" className="h-full w-full rounded-sm object-cover object-center" />
                    </div>
                    <div className="w-full items-center justify-between md:flex">
                        <div className="mb-3 md:mb-0">
                            <a href="#" className="inline-block font-medium text-black hover:text-primary">
                                Mist Black Triblend
                            </a>
                            <p className="flex text-sm font-medium text-secondary">
                                <span className="mr-5"> Color: White </span>
                                <span className="mr-5"> Size: Medium </span>
                            </p>
                        </div>
                        <div className="flex items-center md:justify-end">
                            <p className="mr-20 font-medium text-black">
                                Qty: 01
                            </p>
                            <p className="mr-5 font-medium text-black">
                                $120.00
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 sm:w-1/2 xl:w-3/12">
                    <div className="mb-10">
                        <h4 className="mb-4 text-[1.5rem] font-medium leading-[30px] text-black md:text-2xl">
                            Shipping Method
                        </h4>
                        <p className="font-medium text-secondary">
                            FedEx - Take up to 3 <br />
                            working days.
                        </p>
                    </div>
                </div>
                <div className="w-full px-4 sm:w-1/2 xl:w-3/12">
                    <div className="mb-10">
                        <h4 className="mb-4 text-[1.5rem] font-medium leading-[30px] text-black md:text-2xl">
                            Payment Method
                        </h4>
                        <p className="font-medium text-secondary">
                            Apply Pay Mastercard <br />
                            **** **** **** 5874
                        </p>
                    </div>
                </div>
                <div className="w-full px-4 xl:w-6/12">
                    <div className="mr-10 text-right md:ml-auto">
                        <div className="ml-auto sm:w-1/2">
                            <p className="mb-4 flex justify-between font-medium text-black">
                                <span> Subtotal </span>
                                <span> $120.00 </span>
                            </p>
                            <p className="mb-4 flex justify-between font-medium text-black">
                                <span> Shipping Cost (+) </span>
                                <span> $10.00 </span>
                            </p>
                            <p className="mb-4 mt-2 flex justify-between border-t border-stroke pt-6 font-medium text-black">
                                <span> Total Payable </span>
                                <span> $130.00 </span>
                            </p>
                        </div>

                        <div className="mt-10 flex flex-col justify-end gap-4 md:flex-row">
                            <button className="flex items-center justify-center rounded border border-primary px-8 py-2.5 text-center font-medium text-primary hover:opacity-90">
                                Download Invoice
                            </button>
                            <button className="flex items-center justify-center rounded bg-primary px-8 py-2.5 text-center font-medium text-gray-200 hover:bg-opacity-90">
                                Send Invoice
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoiceOne
