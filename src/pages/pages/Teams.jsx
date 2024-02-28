import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import TeamCardOne from '../../components/Team/TeamCardOne'
import TeamCardTow from '../../components/Team/TeamCardTow'
import memberOne from "../../assets/images/team-01.png"
import member2 from "../../assets/images/team-02.png"
import member3 from "../../assets/images/team-03.png"
import member4 from "../../assets/images/team-04.png"
import { Helmet } from 'react-helmet'
const Teams = () => {
  const dataOne = [
    {
        name: "John Doe",
        profession: "Software Engineer",
        image: memberOne
    },
    {
        name: "Jane Smith",
        profession: "Data Scientist",
        image: member2
    },
    {
        name: "Michael Johnson",
        profession: "UX Designer",
        image: member3
    },
    {
        name: "Emily Brown",
        profession: "Product Manager",
        image: member4
    }
];

  return (
    <>
      <Helmet>
        <title>NurAdmin | Team</title>
      </Helmet>
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Team"} />
      </div>

      <div className="flex flex-col gap-7">
        {/* card Style one  */}
        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div className="border-b border-stroke px-4 py-4 md:px-6 xl:px-9">
            <h3 className="font-medium text-black">
              Style 1
            </h3>
          </div>
          <div className="p-4 md:p-6 xl:p-9">
            <div className="grid grid-cols-1 gap-16 py-4 md:grid-cols-2 md:py-6 xl:grid-cols-4 xl:py-7 2xl:py-16">
              {dataOne.map((item, index) => (
                <TeamCardOne data={item} key={index} />
              ))}
            </div>
          </div>
        </div>
       
        {/* card Style Two  */}
        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div className="border-b border-stroke px-4 py-4 md:px-6 xl:px-9">
            <h3 className="font-medium text-black">
              Style 1
            </h3>
          </div>
          <div className="p-4 md:p-6 xl:p-9">
            <div className="grid grid-cols-1 gap-16 py-4 md:grid-cols-2 md:py-6 xl:grid-cols-4 xl:py-7 2xl:py-16">
              {dataOne.map((item, index) => (
                <TeamCardTow data={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Teams
