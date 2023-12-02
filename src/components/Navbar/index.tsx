import { signOut } from 'firebase/auth';
import { useLayoutEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/app/hook';
import { RootState } from '~/app/store';
import { Notification, Setting } from '~/assets/svg';
import { auth } from '~/firebase/config';
import { authAction, selectLoginWith, selectUser } from '~/slice/AuthSlice';

const DATA_FEATURE_NAVBAR = [
  { id: 1, name: 'Trang chủ', path: '/home' },
  { id: 2, name: 'Địa điểm', path: '/place' },
  { id: 3, name: 'Tour', path: '/tour' },
  { id: 4, name: 'Đặt vé', path: '/company' },
  { id: 5, name: 'Bảng tin', path: '/newfeed' },
  { id: 6, name: 'Liên hệ', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const user = useAppSelector((state: RootState) => selectUser(state));
  const dispatch = useAppDispatch();

  const loginWith = useAppSelector((state: RootState) =>
    selectLoginWith(state),
  );
  const handleLogOut = () => {
    if (loginWith === 'google' || loginWith === 'facebook') {
      signOut(auth).then(() => {
        // console.log('Đăng xuất thành công');
      });
    }
    dispatch(authAction.logout());
    navigate('/login');
  };
  const handleScrollY = () => {
    const scrollYWindow = window.scrollY;
    setScrollY(scrollYWindow);
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScrollY);
    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  }, []);

  const bgTransparent = () => {
    if (
      (location.pathname === '/home' || location.pathname === '/') &&
      window.scrollY === 0
    ) {
      return false;
    }
    return true;
  };

  return (
    <nav
      className={`${
        bgTransparent() ? 'bg-white shadow-sm' : 'bg-transparent'
      } py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed h-[76px] left-0 right-0 top-0 z-50`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full">
        <div className=" pl-5 flex justify-start items-center">
          <button
            // data-drawer-target="drawer-navigation"
            // data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            className="p-2 text-gray-600 rounded-lg cursor-pointer xl:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
              <span
                className={`self-center text-2xl ${
                  bgTransparent() ? 'text-primary' : 'text-white'
                } font-sans font-semibold whitespace-nowrap dark:text-white tracking-widest`}
              >
                travel <span className="">.</span>
              </span>
            </a>
          </div>
          <form action="#" method="GET" className="hidden md:block">
            <label htmlFor="topbar-search" className="sr-only">
              Tìm kiếm
            </label>
            <div className="relative md:w-54">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className={`w-5 h-5 ${
                    bgTransparent() ? 'text-gray-800' : 'text-white'
                  } dark:text-gray-400`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                className={`border border-gray-300 ${
                  bgTransparent() ? 'bg-white ' : 'bg-transparent  text-white '
                } text-sm rounded-full focus:ring-white focus:border-white block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                placeholder="Tìm kiếm"
              />
            </div>
          </form>
        </div>
        <div className="hidden xl:flex justify-center col-span-2">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
            {DATA_FEATURE_NAVBAR.map((item, index) => (
              <li key={index} className="mr-6">
                <Link
                  to={item.path}
                  className={`inline-block p-4 ${
                    bgTransparent() ? 'text-black' : 'text-white'
                  } rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}
                >
                  <p>{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden sm:flex items-center justify-end pr-8">
          {user && Object.keys(user).length !== 0 ? (
            <>
              <button
                type="button"
                // data-dropdown-toggle="notification-dropdown"
                className={`p-2 mr-4 ${
                  bgTransparent() ? 'bg-gray-50 text-gray-700' : 'text-white'
                } text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600`}
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
                // data-dropdown-toggle="notification-dropdown"
                className={`p-2  ${
                  bgTransparent() ? 'bg-gray-50 text-gray-700' : 'text-white'
                } text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600`}
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
                className="flex mx-3 text-sm  rounded-full md:mr-0 focus:ring-0 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
              >
                <div className="flex flex-col items-end px-3">
                  <span
                    className={`${
                      bgTransparent() ? 'text-black' : 'text-white'
                    } font-medium`}
                  >
                    {user.accountName}
                  </span>
                  <span
                    className={`${
                      bgTransparent() ? 'text-black' : 'text-white'
                    }`}
                  >
                    Chào mừng bạn!
                  </span>
                </div>
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.avatar}
                  alt=""
                />
              </button>
              <div
                className="hidden z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
                id="dropdown"
              >
                <div className="py-3 px-4">
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                    {/* {account.accountName} */}
                  </span>
                  <span className="block text-sm text-gray-900 truncate dark:text-white">
                    {/* {account.email} */}
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
            </>
          ) : (
            <>
              <div className="space-x-2">
                <Link
                  to={'/login'}
                  className="px-5 py-2 bg-white text-black rounded-lg text-sm font-medium"
                >
                  Đăng nhập
                </Link>
                <Link
                  to={'/register'}
                  className="px-5 py-2 bg-secondary text-white rounded-lg text-sm font-medium"
                >
                  Bắt đầu
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
