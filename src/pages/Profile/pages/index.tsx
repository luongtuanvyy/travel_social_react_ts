import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '~/app/hook';

const Profile = () => {
  const user = useAppSelector((state) => state.auth.user);

  const feature = [
    { name: 'Bảng tin', path: '/profile/post' },
    { name: 'Đăng lại', path: '/profile/post/reup' },
    { name: 'Hình ảnh', path: '/profile/images' },
    { name: 'Người theo dõi', path: '/profile/follower' },
    { name: 'Giới thiệu', path: '/profile/about' },
  ];
  const path = useLocation().pathname;

  return (
    <div className="pt-[76px] pl-[80px] bg-gray-400">
      <div className="mx-auto my-4 mt-8 bg-gray-100 rounded-3xl max-w-6xl">
        <div className="relative bg-white rounded-t-3xl">
          <img
            className="rounded-3xl h-72 w-full object-cover"
            src="https://wallpapercosmos.com/w/full/7/e/c/1473768.jpg"
            alt=""
          />
          <div className="absolute bottom-0 translate-y-12 right-1/2 translate-x-1/2 h-40 w-40 flex items-center justify-center rounded-full bg-white ">
            <img className="h-36 rounded-full" src={user?.avatar} alt="" />
            <div className="absolute bottom-4 right-4 text-blue-500 bg-white rounded-full">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.7682 15.6402L16.7682 9.64018L15.2318 8.35982L10.9328 13.5186L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11.0672 16.4814L11.7682 15.6402Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid pt-12 bg-white pb-6 grid-cols-3 place-items-center rounded-b-3xl">
          <div className="grid grid-cols-3 w-full">
            <div className="p-1.5 pt-2 flex flex-col items-center justify-center">
              <span className="text-xl font-medium ">368</span>
              <span>Bài viết</span>
            </div>
            <div className="p-1.5 pt-2 flex flex-col items-center justify-center">
              <span className="text-xl font-medium ">183.4K</span>
              <span>Người theo dõi</span>
            </div>
            <div className="p-1.5 pt-2 flex flex-col items-center justify-center">
              <span className="text-xl font-medium ">1.04M</span>
              <span>Lượt thích</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-2xl flex flex-col">
              {user?.name}
            </span>
            <span>{user?.email}</span>
          </div>
          <div className="flex justify-end items-center">
            <button className="text-white bg-secondary hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-3 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Thích
            </button>
            <button className="text-white bg-gray-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-3 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Theo dõi
            </button>
            <button
              id="dropdownMenuIconHorizontalButton"
              data-dropdown-toggle="dropdownDotsHorizontal"
              className="ml-5 h-fit inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>

            <div
              id="dropdownDotsHorizontal"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Chặn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 rounded-b-3xl text-sm p-5 bg-gray-100">
          {feature.map((item, index) => (
            <div key={index} className="border-r w-full flex justify-center">
              <NavLink to={item.path}>
                <span
                  className={` py-3 w-2/3 text-center ${
                    path == item.path ? 'border-b-4 border-secondary' : ''
                  } `}
                >
                  {item.name}
                </span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto my-4 rounded-3xl max-w-6xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
