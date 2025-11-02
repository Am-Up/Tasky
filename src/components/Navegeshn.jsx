import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import { TaskContext } from '../contexts/TaskContext';
import { AuthContext } from '../contexts/AuthContext';

import TypeInput from './Ui/TypeInput';
import { useLocation, NavLink } from 'react-router-dom';
import User from './User';

export default function Navegeshn() {
  const { setOpan } = useContext(TaskContext);
  const { user , setIsLogin } = useContext(AuthContext);
  const location = useLocation();

  const pagenames = {
    "/Dashbord/": "Dashboard",
    "/Dashbord/Reports": "Reports",
    "/Dashbord/ToDo": "ToDo",
    "/Dashbord/Tools": "Tools",
    "/Dashbord/settings": "Settings",
  };

  const pagetitle = pagenames[location.pathname] || "Tasky";
  console.log(user);

  return (
    <div className="w-full h-12 bg-white dark:bg-secondary-dark transition-colors flex pr-10 items-center justify-between px-5 fixed xs:h-16 z-20 ">
      {/* === Left Section === */}
      <div className="flex items-center gap-3">
        <NavLink to="/">
          <h2 className="font-abhaya font-black text-xl md:text-1xl lg:text-2xl xl:ml-11 xl:text-3xl dark:text-text-dark">
            TASK<span className="text-primary">Y.</span>
          </h2>
        </NavLink>

        {location.pathname.includes("/Dashbord") && (
          <div className="flex items-center justify-start pl-10">
            <span className="dark:text-text-dark hidden md:flex">
              <MenuIcon sx={{ fontSize: 30 }} />
            </span>
            <p className="text-sm px-2 md:text-xl font-abhaya dark:text-text-dark">
              {pagetitle}
            </p>
          </div>
        )}
      </div>

      {/* === Search === */}
      <TypeInput
        placeholder="Search..."
        wrapperClass="relative flex items-center hidden sm:flex"
        inputClass="dark:text-text-dark w-full xl:h-9 px-2 dark:bg-background-dark bg-slate-200 h-9 text-sm rounded-xl xl:px-3 xl:pr-10"
        iconClass="dark:text-text-dark z-20 right-4"
        contenr="w-full"
      />

      {/* === Right Section (Menu / User Info) === */}
      <div className="flex items-center gap-3">
        {/* Menu Icon for mobile */}
        <div className="xl:hidden" onClick={() => setOpan(true)}>
          <MenuIcon className="dark:text-text-dark cursor-pointer" sx={{ fontSize: 30 }} />
        </div>

        {user ? (
           <User style={`hidden xl:flex`} />
           ) : (
 <div className="flex gap-2">
  <NavLink to="/login">
    <button
      onClick={() => setIsLogin(true)}
      className="border-primary bg-primary hover:bg-primary/0 border-[2.5px] animate-bounce px-4 py-1 rounded-md  transition font-abhaya">
      Login
    </button>
  </NavLink>

  <NavLink to="/login">
    <button
      onClick={() => setIsLogin(false)}
      className="  border-primary border-[2.5px] px-2 py-1 rounded-md hover:bg-primary transition font-abhaya">
      Sign Up
    </button>
  </NavLink>
</div>


      )}

      </div>
    </div>
  );
}
