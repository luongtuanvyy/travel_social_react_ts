import { Datepicker } from 'flowbite-react';
import React from 'react';
import Range from '~/components/Range';
import SelectLocation from '~/components/SelectLocation';
import './index.css';

const DATA_RADIO_FILTER = [
  {
    name: 'Tất cả',
    value: 'all',
  },
  {
    name: 'Giảm giá',
    value: 'discount',
  },
  {
    name: 'Vừa đăng',
    value: 'new',
  },
  {
    name: 'Nhiều người đặt',
    value: 'top',
  },
];

const DATA_FILTER_RATE = [
  {
    name: 'Tất cả',
    value: 'all',
  },
  {
    name: '5 sao',
    value: '5',
  },
  {
    name: '4 sao',
    value: '4',
  },
  {
    name: '3 sao',
    value: '3',
  },
  {
    name: '2 sao',
    value: '2',
  },
  {
    name: '1 sao',
    value: '1',
  },
];

const Filter = () => {
  const [value, setValue] = React.useState([0, 25000000]);
  const handleRange = (value: number[]) => {
    setValue(value);
  };

  return (
    <div className="mx-auto pt-[84px] w-full">
      <div className="relative bg-white shadow-lg dark:bg-gray-800">
        <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <div className="flex space-x-3">
            <form className="flex items-center w-full">
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
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tìm kiếm ..."
                  required
                />
              </div>
            </form>
            <div className="flex items-center w-full space-x-3 md:w-auto">
              <button
                id="actionsDropdownButton"
                data-dropdown-toggle="actionsDropdown"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-3xl md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                <svg
                  className="-ml-1 mr-1.5 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
                <p className="whitespace-nowrap">Sắp xếp</p>
              </button>
              <div
                id="actionsDropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="actionsDropdownButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Theo giá
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete all
                  </a>
                </div>
              </div>
              <button
                id="filterDropdownButton"
                data-dropdown-toggle="filterDropdown"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-3xl md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                <p className="whitespace-nowrap">Bộ lọc</p>
                <svg
                  className="-mr-1 ml-1.5 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
              </button>
              <div
                id="filterDropdown"
                className="hidden z-10 w-fit p-8 bg-white rounded-3xl space-y-4 shadow dark:bg-gray-700"
              >
                <h6 className="font-medium">Bộ lọc</h6>
                <hr className="" />
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium whitespace-nowrap">
                    Địa điểm :
                  </p>
                  <SelectLocation />
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                    Loại
                  </h3>
                  <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {DATA_RADIO_FILTER.map((item, index) => (
                      <li key={index} className="w-fit">
                        <div className="flex items-center ps-3">
                          <input
                            checked={item.value === 'all'}
                            id={item.value}
                            type="radio"
                            value={item.value}
                            name="list-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor={item.value}
                            className="w-full py-3 ms-2 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {item.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center">
                  <div className="mt-3">
                    <p className="text-sm mb-3 font-medium">Ngày bắt đầu</p>
                    <Datepicker className="datepicker" language="vn" />
                  </div>
                  <p className="text-sm font-medium mx-2"> - </p>
                  <div className="mt-3">
                    <p className="text-sm mb-3 font-medium">Ngày kết thúc</p>
                    <Datepicker className="datepicker" language="vn" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-6">Giá :</p>
                  <Range value={value} handleRange={handleRange} />
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                    Đánh giá
                  </h3>
                  <ul className="items-center pr-3 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {DATA_FILTER_RATE.map((item, index) => (
                      <li key={index} className="w-fit">
                        <div className="flex items-center ps-3">
                          <input
                            checked={item.value === 'all'}
                            id={item.value}
                            type="radio"
                            value={item.value}
                            onChange={() => {}}
                            name="list-radio-rate"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor={item.value}
                            className="w-full py-3 ms-2 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {item.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end">
                  <button className="px-5 py-2 bg-secondary text-sm text-white rounded-xl">
                    Áp dụng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
