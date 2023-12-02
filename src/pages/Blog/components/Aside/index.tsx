import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppSelector } from '~/app/hook';
import { Action, Feed, History, UserIcon } from '~/assets/svg';

const Aside = () => {
  const user = useAppSelector((state) => state.auth.user);
  const location = useLocation();
  const path = location.pathname;
  const feature = [
    { svg: <Feed />, path: '/newfeed' },
    { svg: <UserIcon />, path: '/profile/post' },
    { svg: <History />, path: '/profile/history' },
  ];

  useEffect(() => {}, [user]);

  return (
    <aside
      className={`fixed mt-[76px] top-0 left-0 z-30 
        'w-[80px]'
    h-screen transition-transform -translate-x-full bg-white shadow-md md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="overflow-y-auto py-[38px] px-3 h-full bg-white dark:bg-gray-800">
        <form action="#" method="GET" className="md:hidden mb-2">
          <label htmlFor="sidebar-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
              name="search"
              id="sidebar-search"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search"
            />
          </div>
        </form>

        <ul className="space-y-3">
          {feature.map((feature, index) => (
            <li
              key={index}
              className={`relative py-1 block rounded-lg bg-gray-white hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              <NavLink
                to={feature.path}
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white group"
              >
                <div className="m-1.5 text-gray-600">{feature.svg}</div>
              </NavLink>
              {location.pathname === feature.path && (
                <div className="absolute w-1 h-full bg-blue-700 top-0 -left-3 rounded-r-full"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
