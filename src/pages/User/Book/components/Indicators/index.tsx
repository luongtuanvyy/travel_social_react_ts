import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const DATE_PAYMENT = [
  {
    step: 'Thông tin đặt tour',
    link: '/booking/information',
  },
  {
    step: 'Thanh toán',
    link: '/booking/payment',
  },
  {
    step: 'Hoàn tất',
    link: '/booking/successful',
  },
];

const Indicator = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="w-[800px] min-w-[800px]">
      <ol className="flex items-center">
        {DATE_PAYMENT.map((item, index) => (
          <li
            key={index}
            className={`relative ${index < 2 ? 'w-full' : 'w-fit'} mb-6`}
          >
            <div className="flex items-center">
              <div
                className={`z-10 flex items-center justify-center w-4 h-4 ${
                  pathname === item.link ? 'bg-secondary' : 'bg-primary'
                } rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`}
              >
                { pathname.startsWith(item.link) && (
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
                      strokeLinejoin="round"
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
      </ol>
    </div>
  );
};

export default Indicator;
