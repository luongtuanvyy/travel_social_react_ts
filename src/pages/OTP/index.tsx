import React from 'react';
import { Link } from 'react-router-dom';
import { TabTitle } from '~/utils/TabTilte';
import FormOTP from './components/FormOTP';

const OTPFeature = () => {
  TabTitle('Mã xác nhận');
  return (
    <div className="grid xl:grid-cols-2 h-screen gap-4 relative">
      <div className="absolute top-5 left-5">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to=".."
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-third dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12L4.29289 11.2929L3.58579 12L4.29289 12.7071L5 12ZM17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11V13ZM8.29289 7.29289L4.29289 11.2929L5.70711 12.7071L9.70711 8.70711L8.29289 7.29289ZM4.29289 12.7071L8.29289 16.7071L9.70711 15.2929L5.70711 11.2929L4.29289 12.7071ZM5 13H17V11H5V13Z"
                    fill="currentColor"
                  />
                </svg>
                Trở về trang chủ
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="flex items-center justify-center">
        <FormOTP />
      </div>
      <div className="hidden xl:flex justify-center items-center p-4 ">
        <img
          className="h-full object-cover rounded-xl"
          src="https://wallpapercosmos.com/w/full/a/d/7/22393-3840x2160-desktop-4k-leaf-wallpaper-image.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default OTPFeature;
