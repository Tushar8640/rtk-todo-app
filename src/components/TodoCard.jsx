import { Card, Checkbox, Dropdown } from "flowbite-react";
import React from "react";

const TodoCard = () => {
  return (
    <div className="">
      <div className=" p-4 shadow-md bg-[#fff9de] text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between  border-bottom">
              <div className="flex items-center">
                <h1 className="mb-0 capitalize text-gray-800 font-bold text-xxl">
                  Photography
                </h1>
              </div>

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>
            </div>
            <p className="leading-snug text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <button className="bg-blue-500/[.3] w-6 h-6 rounded-full mr-2"></button>
              <button className="bg-purple-500/[.3] w-6 h-6 rounded-full mr-2"></button>
              <button className="bg-red-500/[.3] w-6 h-6 rounded-full mr-2"></button>
            </div>
            <div>
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 mr-2 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox">Done</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
