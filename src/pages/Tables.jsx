import React from 'react'
import BredCrumb from '../components/shared/Buredcrumb/BredCrumb'
import data from '../lib/FakeDB'
const Tables = () => {
    const [tableData, setTableData] = React.useState(data)


    return (
        <div className='container_fluid'>
            <div className="mx-auto max-w-242.5">
                <BredCrumb pageName={"Data Tables "} />

                <div class="flex flex-col gap-5 md:gap-7 2xl:gap-10">
                    <div class="rounded-sm border border-stroke bg-white shadow-default">
                        <div className="px-[1.875rem] py-[1.125rem] border-b">
                            <div className="w-[25rem]">
                                <input type="search" placeholder='Search...' className='px-[1.25rem] h-[46px] w-full border focus:outline-none' />
                            </div>
                        </div>
                        <div className="w-full">
                            <table className='w-full'>
                                <thead>
                                    <tr className='pb-8'>
                                        <th className='text-left pb-4 text-sm font-medium text-gray-900 pl-[1.875rem] py-[1.125rem]'>Name</th>
                                        <th className='text-left pb-4 text-sm font-medium text-gray-900  py-[1.125rem]'>Position</th>
                                        <th className='text-left pb-4 text-sm font-medium text-gray-900  py-[1.125rem]'>BDay</th>
                                        <th className='text-left pb-4 text-sm font-medium text-gray-900  py-[1.125rem]'>Email/Phone</th>
                                        <th className='text-left pb-4 text-sm font-medium text-gray-900  py-[1.125rem]'>Address</th>
                                        <th className='text-left pb-4 text-sm font-medium text-gray-900 py-[1.125rem]'>Status</th>
                                        <th className='text-right pb-4 text-sm font-medium text-gray-900 pr-[1.875rem] py-[2rem]'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        tableData.map((item, index) => (
                                            <tr key={index} className='border'>
                                                <td className='text-sm font-normal text-gray-700 pl-[1.875rem] py-4'>{item.Name}</td>
                                                <td className='text-sm font-normal text-gray-700 py-4'>{item.Position}</td>
                                                <td className='text-sm font-normal text-gray-700 py-4'>{item.BDay}</td>
                                                <td className='text-sm font-normal text-gray-700 py-4'>{item.Email}</td>
                                                <td className='text-sm font-normal text-gray-700 py-4'>{item.Address}</td>
                                                <td className='text-sm font-normal text-gray-700 pr-[1.125rem] py-4'>{item.Status}</td>
                                            </tr>
                                        ))
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tables
