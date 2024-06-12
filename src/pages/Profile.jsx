import React, { useEffect, useState } from "react";
import Card from "../components/screen/Profile/Card";
import BredCrumb from "../components/shared/Buredcrumb/BredCrumb";
import { Helmet } from "react-helmet";
import UserServices from "../services/UserServices";
import MessService from "../services/MessService";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    prof: "",
    post: "259",
    Followers: "129",
    Following: "2",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.",
  });

  const [mess, setMess] = useState([
    {
      name: "",
      phone: "",
      address: "",
    },
  ]);

  useEffect(() => {
    UserServices.getLoggedInUser().then((res) => {
      setUser((prevUser) => ({
        ...prevUser,
        name: res.data.username,
        prof: res.data.email,
      }));
    });

    MessService.getMyMess().then((res) => {
      setMess(res.data);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>NurAdmin | Profile</title>
      </Helmet>

      <div className="container_fluid">
        <div className="mx-auto max-w-242.5">
          <BredCrumb pageName={"Profile"} />
          <Card user={user} />
          <div className="mt-6">
            <h4 className="mb-3 font-medium text-black">My Mess</h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div
                className="rounded-sm border border-stroke bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <div className="border-b border-stroke px-6 py-4">
                  <h3 className="font-medium text-black">{mess.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-black">{mess.phone}</p>
                  <p className="text-black">{mess.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
