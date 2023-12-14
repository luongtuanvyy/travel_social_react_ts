import { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FollowerApi } from '~/api/FollowerApi';
import { useAppSelector } from '~/app/hook';
import { member } from '~/assets/images';
import { Action, Feed, History, Tick, UserIcon } from '~/assets/svg';

const Aside = () => {
  const user = useAppSelector((state) => state.auth.user);
  const location = useLocation();
  const pathname = location.pathname;
  const feature = [
    { svg: <Feed />, path: '/newfeed' },
    { svg: <UserIcon />, path: '/profile/post' },
    { svg: <History />, path: '/profile/history' },
  ];

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        await FollowerApi.getFollowersById({ id: user.id })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {});
      };
      fetchData();
    }
  }, [user]);

  return (
    <aside
      className={`fixed mt-[76px] top-0 left-0 z-30  ${
        pathname === '/newfeed' ? 'w-96' : 'w-fit'
      } pr-5
    h-screen transition-transform -translate-x-full md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="flex h-full">
        <div className="overflow-y-auto w-fit py-5 border-r border-gray-300 px-3 h-full bg-white dark:bg-gray-800">
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
        <div
          className={`${
            pathname === '/newfeed' ? 'flex flex-col' : 'hidden'
          } h-full  bg-white w-full p-5`}
        >
          <div className="">
            <p className="font-medium mb-5">Người bạn theo dõi</p>
            {Array.from(Array(5).keys()).map((item, index) => (
              <div key={index} className="flex space-x-2 items-center mb-5">
                <div className="w-12 h-12 relative border-2 rounded-full">
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src="https://i.pinimg.com/736x/b5/b4/5c/b5b45c8508f815c26a3851237b0f6e7d.jpg"
                    alt=""
                  />
                  <div className="absolute -bottom-1 right-0">
                    <Tick size={18} />
                  </div>
                </div>
                <div className="grow">
                  <p className="text-sm font-medium">Lương Tuấn Vỹ</p>
                  <p className="text-gray-500 text-xs">Bạn bè</p>
                </div>
                {/* <button className="text-sm text-secondary font-medium">
                  Theo dõi
                </button> */}
              </div>
            ))}
          </div>
          <div>
            <p className="font-medium mb-5">Đăng ký trở thành thành viên</p>
            <div className="flex flex-col items-center border py-3 rounded-lg">
              <img src={member} alt="" className="h-40 w-40" />
              <Link className="font-medium" to={''}>
                Nâng cấp tài khoản của bạn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
