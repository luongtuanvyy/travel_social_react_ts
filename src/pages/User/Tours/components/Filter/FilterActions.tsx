import { Datepicker } from 'flowbite-react';
import React from 'react';
import Range from '~/components/Range';
import SelectLocation from '~/components/SelectLocation';

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

const FilterActions = () => {
  const [value, setValue] = React.useState([0, 25000000]);
  const handleRange = (value: number[]) => {
    setValue(value);
  };

  return (
    <div
      id="filterDropdown"
      className="hidden z-10 w-fit p-8 bg-white rounded-3xl space-y-4 shadow dark:bg-gray-700"
    >
      <h6 className="font-medium">Bộ lọc</h6>
      <hr className="" />
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium whitespace-nowrap">Địa điểm :</p>
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
                  defaultValue={'all'}
                  // checked={item.value === 'all'}
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
                  defaultValue={'all'}
                  // checked={item.value === 'all'}
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
  );
};

export default FilterActions;
