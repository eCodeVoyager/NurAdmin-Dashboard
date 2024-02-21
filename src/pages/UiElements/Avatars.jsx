import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import userImg from '../../assets/images/user-03.png'
import AvatarSM from '../../components/Avatars/Style1/AvatarSM'
import AvatarMD from '../../components/Avatars/Style1/AvatarMD'
import AvatarLG from '../../components/Avatars/Style1/AvatarLG'
import AvatarXL from '../../components/Avatars/Style1/AvatarXL'
import Avatar2sm from '../../components/Avatars/Style2/Avatar2sm'
import Avatar2md from '../../components/Avatars/Style2/Avatar2md'
import Avatar2xl from '../../components/Avatars/Style2/Avatar2xl'
import AvatarTwoLg from '../../components/Avatars/Style2/AvatarTwoLg'
const Avatars = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Avatars"} />
        <div className="flex flex-col gap-7">
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div class="border-b border-stroke px-4 py-4 lg:px-6 xl:px-9">
              <h3 class="font-medium text-black">
                Style 1
              </h3>
            </div>
            <div class="px-4 py-9 sm:px-6 xl:px-8">
              <div class="flex items-center gap-6">
                <AvatarSM userImg={userImg} />
                <AvatarMD userImg={userImg} />
                <AvatarLG userImg={userImg} />
                <AvatarXL userImg={userImg} />
              </div>
            </div>
          </div>
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div class="border-b border-stroke px-4 py-4 lg:px-6 xl:px-9">
              <h3 class="font-medium text-black">
                Style 2
              </h3>
            </div>
            <div class="px-4 py-9 md:px-6 xl:px-8">
              <div class="flex items-center gap-6">
                <Avatar2sm userImg={userImg} />
                <Avatar2md userImg={userImg} />
                <AvatarTwoLg userImg={userImg} />
                <Avatar2xl userImg={userImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avatars
