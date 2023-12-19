import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="bg-white rounded-xl pb-1">
      <div className="mb-5 bg-white rounded-2xl relative">
        <div className={`blog rounded-2xl  bg-white overflow-hidden`}>
          <div className={`user grid grid-cols-1 mt-2.5`}>
            <div className="">
              <div className="flex flex-row rounded-t-lg bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="image flex justify-center items-center pl-5">
                  <div className="bg-gray-200 h-[40px] w-[40px] rounded-full" />
                </div>
                <div className="flex flex-col relative justify-between p-3">
                  <div className="bg-gray-200 h-4 w-40 rounded-lg" />
                  <div className="bg-gray-200 h-4 mt-2 rounded-lg" />
                </div>
              </div>
              <p className="mx-5 my-3 h-10 bg-gray-200 rounded-lg" />
            </div>
            <div className={`image px-5`}>
              <div className={`rounded-lg bg-gray-200 h-96 mb-4 mt-2`} />
            </div>
          </div>
        </div>
        <div>
          <div className=" px-5 py-1 pb-3">
            <div className="h-8 rounded-lg bg-gray-200" />
          </div>

          <div className="flex mx-5 mt-2">
            <div className="bg-gray-200 h-[40px] w-[40px] rounded-full" />
            <div className="h-[40px] ml-5 grow bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
