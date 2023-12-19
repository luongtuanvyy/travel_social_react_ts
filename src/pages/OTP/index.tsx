import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TabTitle } from '~/utils/TabTilte';
import FormOTP from './components/FormOTP';

const OTPFeature = () => {
  const [loading, setLoading] = useState(false);

  const handleLoading = (value: boolean) => {
    setLoading(value);
  };

  TabTitle('Mã xác nhận');
  return (
    <div>
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
          <FormOTP handleLoading={handleLoading} />
        </div>
        <div className="hidden xl:flex justify-center items-center p-4 ">
          <img
            className="h-full object-cover rounded-xl"
            src="https://wallpapercosmos.com/w/full/a/d/7/22393-3840x2160-desktop-4k-leaf-wallpaper-image.jpg"
            alt=""
          />
        </div>
      </div>
      <div
        className={`h-screen ${
          loading ? 'flex' : 'hidden'
        } justify-center items-center bg-gray-500/75 top-0 left-0 right-0 absolute z-40`}
      >
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default OTPFeature;
