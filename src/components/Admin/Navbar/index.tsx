import { useAppSelector } from '~/app/hook';
import {
  Bill,
  Company,
  Feed,
  Menu,
  Notification,
  Place,
  Setting,
} from '~/assets/svg';
import Report from '~/assets/svg/Report';
import Tour from '~/assets/svg/Tour';
import User from '~/assets/svg/User';
// import ListNotification from '~/features/Blog/components/ListNotification';

const DATA_GLOBAL_FEATURE_NAVBAR_ADMIN = [
  { feature: 'Trang chủ', icon: <Menu />, link: '/home' },
  { feature: 'Bài viết', icon: <Feed />, link: '/post' },
  { feature: 'Địa điểm', icon: <Place />, link: '/place' },
  { feature: 'Tour', icon: <Tour />, link: '/tour' },
  { feature: 'Người dùng', icon: <User />, link: '/user' },
  { feature: 'Công ty', icon: <Company />, link: '/company' },
  { feature: 'Hóa đơn', icon: <Bill />, link: '/bill' },
  { feature: 'Báo cáo', icon: <Report />, link: '/report' },
  { feature: 'Cài đặt', icon: <Setting />, link: '/setting' },
];

const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <nav className="bg-black border-b border-gray-700 sticky h-fit left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-fit pl-5 flex justify-start items-center">
          <button
            data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            className="p-2 mr-6 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Toggle sidebar</span>
          </button>
          <div className="w-fit overflow-hidden h-12 flex items-center justify-center">
            <a href="" className=" mr-4">
              <span className="self-center text-2xl text-third font-sans font-semibold whitespace-nowrap dark:text-white tracking-widest">
                travel <span className="">.</span>
              </span>
            </a>
          </div>
        </div>
        <div className="grow flex justify-start">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
            {DATA_GLOBAL_FEATURE_NAVBAR_ADMIN.map((item, index) => (
              <li key={index} className="">
                <a
                  href={item.link}
                  className=" text-white flex items-center h-full space-x-2 px-2 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                >
                  <div>{item.icon}</div>
                  <p>{item.feature}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pr-5 flex items-center justify-end lg:order-2">
          <button
            type="button"
            data-dropdown-toggle="notification-dropdown"
            className="p-1 mr-4 bg-gray-700 text-gray-100 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">View notifications</span>
            <Setting />
          </button>
          <div
            className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
            id="notification-dropdown"
          >
            <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
              Notifications
            </div>
            {/* <ListNotification /> */}
          </div>

          <button
            type="button"
            data-dropdown-toggle="notification-dropdown"
            className="p-1 mr-1 bg-gray-700 text-gray-100 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">View notifications</span>
            <Notification />
          </button>
          <div
            className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
            id="notification-dropdown"
          >
            <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
              Thông báo
            </div>
            {/* <ListNotification /> */}
          </div>

          <button
            type="button"
            className="flex mx-3 text-sm  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <img
              className="w-8 h-8 rounded-full"
              src={user?.avatar}
              alt="user photo"
            />
          </button>
          <div
            className="hidden z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
            id="dropdown"
          >
            <div className="py-3 px-4">
              <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                {user?.name}
              </span>
              <span className="block text-sm text-gray-900 truncate dark:text-white">
                {user?.email}
              </span>
            </div>
            <ul
              className="py-1 text-gray-700 dark:text-gray-300"
              aria-labelledby="dropdown"
            >
              <li>
                <a
                  href="profile"
                  className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                >
                  Thông tin cá nhân
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                >
                  Cài đặt tài khoản
                </a>
              </li>
            </ul>
            <ul
              className="py-1 text-gray-700 dark:text-gray-300"
              aria-labelledby="dropdown"
            >
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Danh sách yêu thích
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <span className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="mr-6 w-5 h-5 text-primary-600 dark:text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Nâng cấp tài khoản
                  </span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
            <ul
              className="py-1 text-gray-700 dark:text-gray-300"
              aria-labelledby="dropdown"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Đăng xuất
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
