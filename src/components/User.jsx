import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import boy from "../assets/boy.png";
import gearl from "../assets/gearl.png";


export default function User({ style }) {
  const { user } = useContext(AuthContext);

  return (
    <div className={`${style} flex items-center gap-4`}>
      <div>
        <h5 className='font-abhaya text-lg'>
          {user?.FirstName || "Amir" }
        </h5>
    
      </div>

      <div className='w-10 h-10 bg-primary flex items-center justify-center rounded-full overflow-hidden'>
        <img src={boy} alt="User Avatar" className='w-full h-full object-cover' />
      </div>
    </div>
  );
}

