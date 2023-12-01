import React from 'react';
import { useLocation } from 'react-router-dom';
import { DATE_FORMAT } from 'react-tailwindcss-datepicker/dist/constants';

const DATE_PAYMENT = [
  {
    step: 'Thông tin đặt tour',
    link: '/book/infomation',
  },
  {
    step: 'Thanh toán',
    link: '/book/payment',
  },
  {
    step: 'Hoàn tất',
    link: '/book/complete',
  },
];

const Indicator = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="w-[800px] min-w-[800px]">
      <ol className="flex items-center">
        {DATE_PAYMENT.map((item, index) => (
          <li className={`relative ${index < 2 ? 'w-full' : 'w-fit'} mb-6`}>
            <div className="flex items-center">
              <div
                className={`z-10 flex items-center justify-center w-4 h-4 ${
                  pathname === item.link ? 'bg-secondary' : 'bg-primary'
                } rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`}
              >
                {pathname === item.link && (
                  <svg
                    className="w-2 h-2 text-blue-100 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                )}
              </div>
              {index < 2 && (
                <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              )}
            </div>
            <div className="mt-3">
              <h3 className="text-sm whitespace-nowrap -translate-x-1/2 w-fit ml-2 font-medium text-gray-900 dark:text-white">
                {item.step}
              </h3>
            </div>
          </li>
        ))}
        {/* <li className="relative w-full mb-6">
          <div className="flex items-center">
            <div
              className={`z-10 flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`}
            >
              <svg
                className="w-2 h-2 text-blue-100 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </div>
            <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3">
            <h3 className="text-sm -translate-x-1/2 w-fit ml-2 font-medium text-gray-900 dark:text-white">
              Thanh toán
            </h3>
          </div>
        </li>
        <li className="relative w-fit mb-6">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                className="w-2 h-2 text-blue-100 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </div>
          </div>
          <div className="mt-3">
            <h3 className="-translate-x-1/2 w-fit ml-2 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
              Hoàn tất
            </h3>
          </div>
        </li> */}
      </ol>
    </div>
  );
};

export default Indicator;
