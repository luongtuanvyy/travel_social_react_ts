import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Close } from '~/assets/svg';
import { User } from '~/types/User';

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
    member: yup.string(),
  })
  .required();

const FilterAdmin = () => {
  const [onFilterMap, setOnFilterMap] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFilterMap = () => {
    setOnFilterMap(!onFilterMap);
  };

  return (
    <div className="relative bg-gray-900 w-full">
      <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
        <p className="font-medium text-white text-lg">
          Người dùng <span className="text-gray-400 text-sm">( 30 )</span>
        </p>
        <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-x-2 md:w-auto md:flex-row md:space-y-0 md:items-center">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Tìm kiếm"
                required
              />
            </div>
          </form>
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <svg
              className="h-3.5 w-3.5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            Thêm người dùng
          </button>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleFilterMap}
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-4 mr-2 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                  clipRule="evenodd"
                />
              </svg>
              Bộ lọc
            </button>
          </div>
        </div>
      </div>
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 right-0 left-0 bottom-0 transition-transform ${
          onFilterMap ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
        aria-label="Sidebar"
      >
        <div className="h-full flex w-full">
          <div className="bg-gray-700/50 grow "> </div>
          <div className="h-full px-3 w-fit py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-end w-full">
              <button onClick={handleFilterMap}>
                <Close />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default FilterAdmin;
