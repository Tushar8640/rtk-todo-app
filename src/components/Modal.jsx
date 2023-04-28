const Modalview = ({ show, setShow }) => {
  return (
    <>
      {show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <button
                    onClick={() => setShow(false)}
                    className="text-sm "
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-gray-800 text-white px-8 rounded-lg py-2"
                    onClick={() => setShow(false)}
                  >
                    Add
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto w-[600px]">
                  <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
                    <div className="grid grid-cols-6 gap-4 col-span-full ">
                      <div className="col-span-full ">
                        <label htmlFor="website" className="text-sm font-semibold text-xl">
                          Title
                        </label>
                        <input
                          id="website"
                          type="text"
                          placeholder="add a title"
                          className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 text-gray-900  bg-gray-50 mt-2 "
                        />
                      </div>
                      <div className="col-span-full">
                        <label htmlFor="bio" className="text-xl font-semibold">
                          Description
                        </label>
                        <textarea
                          id="bio"
                          placeholder="add a description..."
                          className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 text-gray-900  bg-gray-50 mt-2"
                        ></textarea>
                      </div>
                      <div className="col-span-full">
                        <label htmlFor="bio" className="text-sm">
                          Photo
                        </label>
                        <div className="flex items-center space-x-2">
                          <img
                            src="https://source.unsplash.com/30x30/?random"
                            alt=""
                            className="w-10 h-10 rounded-full bg-gray-500 bg-gray-300"
                          />
                          <button
                            type="button"
                            className="px-4 py-2 border rounded-md border-gray-800"
                          >
                            Change
                          </button>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modalview;
