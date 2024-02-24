import React from "react";

const PersonalPart = ({ data, setdata }) => {
  return (
    <div className="space-y-6">
      {/*Name Section*/}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-800 pb-2">
          Fullname
        </label>
        <input
        onChange={(e)=>setdata({...data, fullname : e.target.value})}
        value={data.fullname}
          type="text"
          id="fullname"
          className="bloack h-10 w-full appearance-none rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus: outline-none focus:ring-green-500 sm:text-sm"
        />
      </div>
      {/* Company or Brand section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-800 pb-2">
          Company/Brand Name
        </label>
        <input
        onChange={(e)=>setdata({...data, Company : e.target.value})}
        value={data.Company}
          type="text"
          id="Company"
          className="bloack h-10 w-full appearance-none rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus: outline-none focus:ring-green-500 sm:text-sm"
        />
      </div>
      {/* Address section*/}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-800 pb-2">
          Address of Company
        </label>
        <textarea
        onChange={(e)=>setdata({...data, address : e.target.value})}
        value={data.address}
          type="text"
          id="address"
          className="bloack h-20 w-full appearance-none rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus: outline-none focus:ring-green-500 sm:text-sm"
        />
      </div>
      {/* password confirmation section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-800 pb-2">
          How many user profiles
        </label>
        <input
        onChange={(e)=>setdata({...data, userprofile : e.target.value})}
        value={data.userprofile}
          type="number"
          id="userprofile"
          className="bloack h-10 w-full appearance-none rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus: outline-none focus:ring-green-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default PersonalPart;
