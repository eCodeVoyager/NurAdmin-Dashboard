import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import CardStyle1 from '../../components/Cards/Style1/CardStyle1'
import cardImg from '../../assets/images/cards-01.png'
import userImg from '../../assets/images/user-11.png'
import CardStyle2 from '../../components/Cards/Style2/CardStyle2'
import CardStyle3 from '../../components/Cards/Style3/CardStyle3'
const Cards = () => {
  const firstCardData = [
    {
      userImage: userImg,
      userName: "Naimur Rahman",
      userRole: "Content Writer",
      cardImage: cardImg,
      cardTitle: "Card Title here",
      cardDescription: "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
    },
    {
      userImage: userImg,
      userName: "Nur Alom",
      userRole: "CEO",
      cardImage: cardImg,
      cardTitle: "Another Card Title",
      cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel nunc at nibh lacinia fermentum vel nec erat."
    },
    {
      userImage: userImg,
      userName: "Al Amin",
      userRole: "Developer",
      cardImage: cardImg,
      cardTitle: "Third Card Title",
      cardDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    }
  ];

  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Cards"} />
        {/* Cards  style one */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {
            firstCardData.map((data, idx) => (
              <CardStyle1 key={idx} data={data} />
            ))
          }
        </div>
        <h2 className="mb-7 mt-10 text-[26px] font-bold text-black">
          Cards
        </h2>
        {/* Cards  style Two */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {
            firstCardData.map((data, idx) => (
              <CardStyle2 key={idx} data={data} />
            ))
          }
        </div>
        <h2 className="mb-7 mt-10 text-[26px] font-bold text-black">
          Cards
        </h2>
        {/* Cards  style Three */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {
            firstCardData.map((data, idx) => (
              <CardStyle3 key={idx} data={data} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Cards
