import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { TaskContext } from '../contexts/TaskContext';

import { NavLink } from 'react-router-dom';


export default function User({ style }) {
  const {auth , Avatar} = useContext(AuthContext);
  const play = useContext(TaskContext);

  if (!auth) return null; // في حال context مش متاح
  const { user, FirstLetar } = auth;

  

  return (
   <>
    <NavLink onClick={play} to="/Dashbord/Profiele" className={`${style} flex items-center gap-4 `}>
      
        <div>
        <h5 className="font-abhaya text-lg dark:text-text-dark">{user?.First_Name || "user"}</h5>
      </div>

      <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full overflow-hidden">
        {user?.Profile_Image ? (
          <img
            src={typeof user.Profile_Image === "string"
              ? user.Profile_Image
              : URL.createObjectURL(user.Profile_Image)}
            alt="User"
            className="w-full h-full object-cover"
          />
        ) : user?.gender ? (
          <img
            src={Avatar(user)}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="text-2xl  font-mono font-black">{FirstLetar}</p>
        )}
      </div>
     
    </NavLink>
   </>
  );
}
