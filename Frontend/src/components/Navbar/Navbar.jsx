import React from 'react'
import { RiAddBoxFill } from "react-icons/ri";
import { useNavigate } from 'react-router';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='h-20 flex justify-between items-center text-white'>
        <a className='text-3xl pl-20 font-bold' href='/' >Joboard.</a>
        <button onClick={()=>navigate('/addjob')} className='mr-5 font-semibold flex justify-center items-center gap-2 hover:bg-green-600 bg-green-500 rounded-md p-2'>ADD JOB
        <RiAddBoxFill size={20} className=''/></button>
    </div>
  )
}

export default Navbar