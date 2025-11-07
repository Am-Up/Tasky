import React, { useContext } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DonutSmallRoundedIcon from '@mui/icons-material/DonutSmallRounded';
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
import User from './User';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import useSound from 'use-sound';
import { TaskContext } from '../contexts/TaskContext';
import { AuthContext } from '../contexts/AuthContext';
import {NavLink} from 'react-router-dom'
import Bott_dark from './Ui/Bott_dark';
import sound_1 from '../Sounds/sound_1.mp3'

export default function Navpar() {
  const { setOpan, shouldShow, isLargeScreen,wrapperClasses,innerClasses } = useContext(TaskContext);
  const {user , setIsLogin} = useContext(AuthContext)
  const [play] = useSound(sound_1)

  return (
    <>
      {shouldShow || isLargeScreen ? (
        <div
          onClick={() => !isLargeScreen && setOpan(false)}
          className={` ${wrapperClasses}`}
        >
          <div className={` bg-white  dark:bg-secondary-dark ${innerClasses}`}>
            {!isLargeScreen && (
              <div onClick={() => setOpan(false)}>
                <ClearIcon
                  sx={{ fontSize: 45 }}
                  className="text-red-700 absolute right-5 top-3"
                />
              </div>
            )}

            <ul className=" mt-24 w-full flex flex-col items-center gap-1 text-abhaya">
              <li onClick={play} className="w-full h-full flex justify-center">
                <NavLink to="/Dashbord/" end  className={({ isActive }) => `text-lg w-9/12 p-3 dark:text-text-dark transition-colors rounded-2xl font-abhaya flex items-center ${
                            isActive ? 'bg-black text-white dark:text-text' : 'hover:bg-black hover:text-white'}`}>
                  <DashboardIcon sx={{ fontSize: 27 }} className="mr-1 pb-1" />
                  Dashboard
                </NavLink>
              </li>

              <li onClick={play} className="w-full h-full flex justify-center">
                <NavLink to="/Dashbord/Reports"
                  className={({ isActive }) =>`text-lg w-9/12 p-3 dark:text-text-dark rounded-2xl font-abhaya flex items-center ${
                          isActive ? 'bg-black text-white dark:text-text' : 'hover:bg-black hover:text-white'}`}>
                  <DonutSmallRoundedIcon sx={{ fontSize: 27 }} className="mr-1 pb-1" />
                  Reports
                </NavLink>
              </li>

              <li onClick={play} className="w-full h-full flex justify-center">
                <NavLink to="/Dashbord/ToDo" 
                className={({ isActive }) =>`text-lg w-9/12 p-3 dark:text-text-dark rounded-2xl font-abhaya flex items-center ${
                              isActive ? 'bg-black text-white dark:text-text' : 'hover:bg-black hover:text-white' }` }>
                  <AssignmentSharpIcon sx={{ fontSize: 27 }} className="mr-1 pb-1" />
                  Todo
                </NavLink>
              </li>

              <li onClick={play} className="w-full h-full flex justify-center">
                <NavLink to="/Dashbord/Tools" 
                 className={({ isActive }) => `text-lg w-9/12 p-3 dark:text-text-dark rounded-2xl font-abhaya flex items-center ${
                             isActive ? 'bg-black text-white dark:text-text' : 'hover:bg-black hover:text-white'}`}>
                 <BuildIcon sx={{ fontSize: 27 }} className="mr-1 pb-1" />
                  Tools
                </NavLink>
              </li>

              <li onClick={play} className="w-full h-full flex justify-center">
                <NavLink to="/Login" 
                 className={({ isActive }) =>`text-lg w-9/12 p-3 dark:text-text-dark rounded-2xl font-abhaya flex items-center ${
                              isActive ? 'bg-black text-white dark:text-text' : 'hover:bg-black hover:text-white'}`}>
                 <SettingsIcon sx={{ fontSize: 27 }} className="mr-1 pb-1" />
                  Settings
                </NavLink>
              </li>
             
            </ul>

            <Bott_dark/>

           <div className='xl:hidden flex justify-center mt-32'>
              {user ? (
                      <User style={`flex-row-reverse`} />
                      ) : (
            <div className="flex gap-2">
             <NavLink to="/login">
               <button
                 onClick={() => setIsLogin(true)}
                 className=" dark:text-text-dark hover:bg-primary animate-pulse px-4 py-1 rounded-md  transition font-abhaya">
                 Login
               </button>
             </NavLink>
           
             <NavLink to="/login">
               <button
                 onClick={() => setIsLogin(false)}
                 className="  bg-primary  px-2 py-1 rounded-md hover:bg-primary transition font-abhaya">
                 Sign Up
               </button>
             </NavLink>
           </div>
           
           
                 )}
           </div>
          </div>
        </div>
      ) : null}
    </>
  );
}


