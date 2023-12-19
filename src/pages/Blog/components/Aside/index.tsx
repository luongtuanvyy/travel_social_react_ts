import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FollowerApi } from '~/api/FollowerApi';
import { useAppSelector } from '~/app/hook';
import { member } from '~/assets/images';
import { Feed, History, Tick, UserIcon } from '~/assets/svg';
import { Follower } from '~/types/api';

const Aside = () => {
  const user = useAppSelector((state) => state.auth.user);
  const location = useLocation();
  const [userFollower, setUserFollower]: any = useState<Follower[]>([]);
  const pathname = location.pathname;
  const feature = [
    { svg: <Feed />, path: '/newfeed' },
    { svg: <UserIcon />, path: '/profile/post' },
    { svg: <History />, path: '/profile/history' },
  ];

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const response = await FollowerApi.getFollowersById({
            id: user.id.toString(),
            page: 0,
            pageSize: 5,
          });
          setUserFollower(response.data.data.datas);
        } catch (error) {
          console.log(error);
        }
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
          <div className="min-h-[350px]">
            <p className="font-medium mb-5">Người bạn theo dõi</p>
            {userFollower.map((item: Follower, index: number) => (
              <div key={index} className="flex space-x-2 items-center mb-5">
                <div className="w-12 h-12 relative border-2 rounded-full">
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src={item.avatar}
                    alt=""
                  />
                  {item.isVerify && (
                    <div className="absolute -bottom-1 right-0">
                      <Tick size={18} />
                    </div>
                  )}
                </div>
                <div className="grow">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-gray-500 text-xs">Bạn bè</p>
                </div>
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
