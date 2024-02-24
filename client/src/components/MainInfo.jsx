import React from "react";

const MainInfo = ({ data, setdata }) => {
  return (
    <div className="space-y-6">
      {/*Choice Section*/}
      <div className="mt-1">
        <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
          website or App
        </h3>
        <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center ps-3">
              <input
                onClick={(e) => setdata({ ...data, formFile: e.target.value })}
                value="Website"
                id="list-radio-license"
                type="radio"
                name="listRadio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="list-radio-license"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Website
              </label>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center ps-3">
              <input
                onClick={(e) => setdata({ ...data, formFile: e.target.value })}
                value="App"
                id="list-radio-id"
                type="radio"
                name="listRadio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="list-radio-id"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                App
              </label>
            </div>
          </li>
        </ul>
      </div>
      {/* Budget section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-800 pb-2">
          Budget for the product
        </label>
        <input
          onChange={(e) => setdata({ ...data, Budget: e.target.value })}
          value={data.Budget}
          type="number"
          id="Budget"
          className="block h-10 w-full appearance-none rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus: outline-none focus:ring-green-500 sm:text-sm"
        />
      </div>
      {/* Reference section*/}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-800 pb-2">
          Reference Website
        </label>
        <input
          onChange={(e) => setdata({ ...data, reference: e.target.value })}
          value={data.reference}
          type="text"
          id="reference"
          className="block h-10 w-full appearance-none rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus: outline-none focus:ring-green-500 sm:text-sm"
        />
      </div>
      {/* File Selection*/}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-800 pb-2">
          Design Specifications
        </label>
        <textarea
        onChange={(e)=>setdata({...data, design : e.target.value})}
        value={data.design}
          type="text"
          id="design"
          className="bloack h-20 w-full appearance-none rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus: outline-none focus:ring-green-500 sm:text-sm"
        />
      </div>
      <div class="mb-3">
        <label
          for="formFile"
          class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
        >
          Logo and sample design for project
        </label>
        <input
          onChange={(e) => setdata({ ...data, formFile: e.target.value })}
          value={data.formFile}
          class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          type="file"
          id="formFile"
          multiple
        />
      </div>
      {/* {Timeline section} */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-800 pb-2">
          Days to complete project
        </label>
        <input
          onChange={(e) => setdata({ ...data, timeline: e.target.value })}
          value={data.timeline}
          type="number"
          id="timeline"
          className="bloack h-10 w-full appearance-none rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 shadow-sm focus: outline-none focus:ring-green-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default MainInfo;
