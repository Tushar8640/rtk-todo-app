import { useState } from "react";
import OptionModal from "./OptionModal";

const TodoCard = ({ todo }) => {
  const { title, description, category } = todo || {};
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="">
      <div className=" p-4 shadow-md bg-[#fff9de] text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between  border-bottom">
              <div className="flex items-center relative">
                <h1 className="mb-0 capitalize text-gray-800 font-bold text-xxl">
                  {title}
                </h1>
              </div>

              <div className="relative">
                <button onClick={() => setShowModal(true)}>
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

                <OptionModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div>
            </div>
            <p className="leading-snug text-gray-600">{description}</p>
          </div>
          <div className="flex justify-between">
            <div>
              {category?.map((c) => (
                <button
                  key={c.id}
                  className={`bg-${c?.color}-500/[.3] w-6 h-6 rounded-full mr-2`}
                ></button>
              ))}
            </div>
            <div>
              <input
                disabled={false}
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
