import Switch from "@mui/material/Switch";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export default function Profile() {
  const { user, FirstLetar, Avatar } = useContext(AuthContext);

  return (
    <div className="w-full min-h-screen px-4 sm:px-12 lg:px-24 pt-12 bg-gray-50">
      <h3 className="text-2xl font-bold mb-6">Profile Settings</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-6 md:w-3/6 mx-auto">
        {/* Left Card */}
        <div className="col-span-1 row-span-1 md:row-span-2 w-full h-full rounded-3xl bg-slate-50 shadow-xl flex flex-col items-center py-5">
          <div className="w-36 h-36 rounded-full bg-primary overflow-hidden">
            {user?.Profile_Image ? (
              <img
                src={
                  typeof user.Profile_Image === "string"
                    ? user.Profile_Image
                    : URL.createObjectURL(user.Profile_Image)
                }
                alt={`${user.First_Name} Avatar`}
                className="w-full h-full object-cover"
              />
            ) : user?.gender ? (
              <img
                src={Avatar(user)}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <p className="text-2xl font-mono font-black">{FirstLetar}</p>
            )}
          </div>

          <button className="text-sm mt-4 bg-orange-300/25 border-orange-400 border-2 px-7 py-2 rounded-xl font-abhaya text-slate-950 hover:bg-orange-400/30 focus:outline-none focus:ring-2 focus:ring-orange-400 transition">
            Edit Profile
          </button>
        </div>

        {/* User Information */}
        <div className="col-span-1 md:col-span-2 row-span-1 rounded-3xl bg-slate-50 shadow-xl h-28 flex flex-col justify-center pl-5">
          <p className="font-abhaya text-xl">
            Name: <span className="text-slate-600">{user.First_Name} {user.Last_Name}</span>
          </p>
          <p className="font-abhaya text-md">
            Job Title: <span className="text-slate-600"> Front-end Developer</span></p>
          <p className="font-abhaya text-sm">
            Email: <span className="text-slate-600">{user.Email}</span>
          </p>
        </div>

        {/* Dark Mode */}
        <div className="col-span-1 md:col-span-2 row-span-1 rounded-3xl bg-slate-50 shadow-xl flex flex-col justify-center px-5 py-3">
          <p className="text-2xl font-abhaya mb-2">Preferences</p>
          <div className="h-16 flex items-center justify-between px-3">
            <p className="font-abhaya text-lg">Dark Mode</p>
            <Switch
              inputProps={{ "aria-label": "Toggle Dark Mode" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
