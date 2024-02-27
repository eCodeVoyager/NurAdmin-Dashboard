import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import Modal1 from '../../components/Modals/Modal1'
import Modal2 from '../../components/Modals/Modal2'
import Modal3 from '../../components/Modals/Modal3'

const Modals = () => {
  const [popupOne, setPopupOne] = React.useState(false);
  const [popupTwo, setPopupTwo] = React.useState(false);
  const [popupThree, setPopupThree] = React.useState(false);

  const closeModalOne = () => {
    setPopupOne(false);
  }
  const closeModalTwo = () => {
    setPopupTwo(false);
  }
const closeModalThree = () => {
  setPopupThree(false);
}

  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Modals"} />


        <div class="rounded-sm border border-stroke bg-white p-10 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div class="flex flex-wrap justify-center gap-5">
            <div>
              <button onClick={() => setPopupOne(!popupOne)} class="rounded-md bg-primary px-9 py-3 font-medium text-white">
                Modal 1
              </button>
              {popupOne && <Modal1 closeModalOne={closeModalOne}/>

              }
            </div>
            <div>
              <button onClick={() => setPopupTwo(!popupTwo)} class="rounded-md bg-primary px-9 py-3 font-medium text-white">
                Modal 2
              </button>
              {popupTwo && <Modal2 closeModalTwo={closeModalTwo}/>

              }
            </div>
            <div>
              <button onClick={()=>setPopupThree(!popupThree)} class="rounded-md bg-primary px-9 py-3 font-medium text-white">
                Modal 3
              </button>
              {
                popupThree && <Modal3 closeModalThree={closeModalThree}/>
              }
            </div>
          </div>
        </div >
      </div >
    </div >
  )
}

export default Modals
