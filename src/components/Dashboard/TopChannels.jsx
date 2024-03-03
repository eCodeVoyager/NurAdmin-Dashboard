import React from 'react'
import source1 from '../../assets/images/brand-01.svg'
import source2 from '../../assets/images/brand-02.svg'
import source3 from '../../assets/images/brand-03.svg'
import source4 from '../../assets/images/brand-04.svg'
import source5 from '../../assets/images/brand-05.svg'
const TopChannels = () => {
    const channels = [
        {
            Source: 'Google',
            Image: source1,
            Visitors: '3.5K',
            Revenues: '$5,768',
            Sales: '590',
            Conversion: '4.8%',
        },
        {
            Source: 'Twitter',
            Image: source2,
            Visitors: '2.3K',
            Revenues: '$3,456',
            Sales: '480',
            Conversion: '3.2%',
        },
        {
            Source: 'Github',
            Image: source3,
            Visitors: '1.8K',
            Revenues: '$2,987',
            Sales: '390',
            Conversion: '3.9%',
        },
        {
            Source: 'Vimeo',
            Image: source4,
            Visitors: '4.2K',
            Revenues: '$7,234',
            Sales: '680',
            Conversion: '5.1%',
        },
        {
            Source: 'Facebook',
            Image: source5,
            Visitors: '2.8K',
            Revenues: '$4,890',
            Sales: '550',
            Conversion: '4.3%',
        }
    ];


    return (
        <div className='rounded-sm border border-stroke bg-white px-5 pb-2 pt-6 shadow-md sm:px-7 xl:pb-1'>
            <h4 className="mb-6 text-xl font-bold text-black">
                Top Channels
            </h4>
            <div className="flex flex-col">
                <div className="grid grid-cols-3 rounded-sm bg-gray-100 md:grid-cols-5">
                    <div className="p-2 xl:p-5">
                        <h5 className="text-sm font-medium uppercase lg:text-base text-secondary">Source</h5>
                    </div>
                    <div className="p-2 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase lg:text-base text-secondary">Visitors</h5>
                    </div>
                    <div className="p-2 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase lg:text-base text-secondary">Revenues</h5>
                    </div>
                    <div className="hidden p-2 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase md:text-base text-secondary">Sales</h5>
                    </div>
                    <div className="hidden p-2 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase md:text-base text-secondary">Conversion</h5>
                    </div>
                </div>
                {
                    channels.map((channel, idx) => (
                        <div key={idx} className={`grid grid-cols-3 ${idx !== channels.length - 1 ? "border-b" : ""}  border-stroke md:grid-cols-5`}>
                            <div className="flex items-center gap-3 p-2 xl:p-5">
                                <div className="flex-shrink-0">
                                    <img src={channel.Image} alt="Brand" />
                                </div>
                                <p className="hidden font-medium text-black sm:block">
                                    {channel.Source}
                                </p>
                            </div>

                            <div className="flex items-center justify-center p-2 xl:p-5">
                                <p className="font-medium text-black ">{channel.Visitors}</p>
                            </div>

                            <div className="flex items-center justify-center p-2 xl:p-5">
                                <p className="font-medium text-green-500">{channel.Revenues}</p>
                            </div>

                            <div className="hidden items-center justify-center p-2 sm:flex xl:p-5">
                                <p className="font-medium text-black">{channel.Sales}</p>
                            </div>

                            <div className="hidden items-center justify-center p-2 sm:flex xl:p-5">
                                <p className="font-medium text-blue-400">{channel.Conversion}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default TopChannels
