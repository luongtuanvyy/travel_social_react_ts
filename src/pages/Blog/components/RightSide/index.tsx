import { useEffect, useState } from 'react';
import { UserApi } from '~/api/UserApi';
const RightSide = () => {
  const [userFollower, setUserFollower]: any = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserApi.getUser({ page: 1, amount: 2 });
        console.log(response);
        // setUserFollower(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <aside
      className="fixed top-0 right-0 z-40 w-80 h-screen pt-14 transition-transform translate-x-full bg-white shadow-md md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800 border-b border-gray-200">
        <p className="my-4 mb-6 font-medium text-gray-800 text-sm">
          Người bạn theo dõi
        </p>
        <ul className="max-w-md  dark:divide-gray-700">
          {userFollower.map(
            (user: { fullname: string; image: string }, index: number) => (
              <li key={index} className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user.image}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {user.fullname}
                    </p>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </aside>
  );
};

export default RightSide;
