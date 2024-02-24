import React, { useState } from "react";
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';

const SignUpPart = ({ data, setdata }) => {
    const [PEye, setPEye] = useState(false);
    const [CPEye, setCPEye] = useState(false);
    const handlePassword=()=>{
        setPEye(!PEye);
    }
    const handleCPassword=()=>{
        setCPEye(!CPEye);
    }
  return (
    <div className="space-y-6">
      {/*Username Section*/}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-800 pb-2">
          Username
        </label>
        <input
        onChange={(e)=>setdata({...data, username : e.target.value})}
        value={data.username}
          type="text"
          id="username"
          className="bloack h-10 w-full appearance-none rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus: outline-none focus:ring-green-500 sm:text-sm"
        />
      </div>
      {/* Email section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-800 pb-2">
          E-mail
        </label>
        <input
        onChange={(e)=>setdata({...data, email : e.target.value})}
        value={data.email}
          type="email"
          id="E-mail"
          className="bloack h-10 w-full appearance-none rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus: outline-none focus:ring-green-500 sm:text-sm"
        />
      </div>
      {/* Password section*/}
      <div className="mt-1 relative">
        <label className="block text-sm font-medium text-gray-800 pb-2">
          Password
        </label>
        <input
        onChange={(e)=>setdata({...data, password : e.target.value})}
        value={data.password}
          type={PEye===false?"password":"text"}
          id="password"
          className="bloack h-10 w-full appearance-none rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus: outline-none focus:ring-green-500 sm:text-sm"
        />
        <div className="text-2xl absolute top-9 right-4 cursor-pointer">
            {PEye === false ? (<AiFillEyeInvisible onClick={handlePassword}/>) : (<AiFillEye onClick={handlePassword}/>)}
        </div>
      </div>
      {/* password confirmation section */}
      <div className="mt-1 relative">
        <label className="block text-sm font-medium text-gray-800 pb-2">
          Confirm Password
        </label>
        <input
        onChange={(e)=>setdata({...data, cpassword : e.target.value})}
        value={data.cpassword}
          type={CPEye===false?"password":"text"}
          id="cpassword"
          className="bloack h-10 w-full appearance-none rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus: outline-none focus:ring-green-500 sm:text-sm"
        />
        <div className="text-2xl absolute top-9 right-4 cursor-pointer">
            {CPEye === false ? (<AiFillEyeInvisible onClick={handleCPassword}/>) : (<AiFillEye onClick={handleCPassword}/>)}
        </div>
      </div>
    </div>
  );
};

export default SignUpPart;
