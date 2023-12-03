import { useEffect, useState } from 'react';
import { FollowerApi } from '~/api/FollowerApi';
import { UserApi } from '~/api/UserApi';
import { More, Tick } from '~/assets/svg';
const RightSide = () => {
  const [userFollower, setUserFollower]: any = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FollowerApi.getFollowersById({ id: 13 });
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
      className="fixed top-0 p-5 right-0 z-40 w-96 h-screen pt-[76px] transition-transform translate-x-full md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="my-5 p-5 rounded-xl bg-white h-fit dark:bg-gray-800 border-b border-gray-200">
        <div className="flex justify-between mb-2">
          <p className="font-medium ">Hoạt động</p>
          <p className="font-medium text-secondary">Xem tất cả</p>
        </div>
        <div className="py-2 flex space-x-3">
          <div className="w-12 h-12">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://i.pinimg.com/236x/cb/02/94/cb0294597bbfe27b3a1b5e4ae637ccf7.jpg"
              alt=""
            />
          </div>
          <p className="text-sm grow">
            <span className="font-medium">Lương Tuấn Vỹ</span> đã theo dõi bạn{' '}
            <br />
            <span className="text-xs text-gray-500">5 phút trước</span>
          </p>
          <button>
            <More size={15} />
          </button>
        </div>
        <div className="my-2">
          <div className="flex items-center justify-center w-full py-1">
            <div className="w-full h-px bg-gray-300"></div>
            <span className="absolute text-xs px-4 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              Hôm qua
            </span>
          </div>
        </div>
        <div className="py-2 my-2 flex space-x-3">
          <div className="w-12 h-12">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://i.pinimg.com/236x/cb/02/94/cb0294597bbfe27b3a1b5e4ae637ccf7.jpg"
              alt=""
            />
          </div>
          <p className="text-sm grow">
            <span className="font-medium">Lương Tuấn Vỹ</span> đã theo dõi bạn{' '}
            <br />
            <span className="text-xs text-gray-500">5 phút trước</span>
          </p>
          <button>
            <More size={15} />
          </button>
        </div>
        <div className="py-2 flex space-x-3">
          <div className="w-12 h-12">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://i.pinimg.com/236x/cb/02/94/cb0294597bbfe27b3a1b5e4ae637ccf7.jpg"
              alt=""
            />
          </div>
          <p className="text-sm grow">
            <span className="font-medium">Lương Tuấn Vỹ</span> đã theo dõi bạn{' '}
            <br />
            <span className="text-xs text-gray-500">5 phút trước</span>
          </p>
          <button>
            <More size={15} />
          </button>
        </div>
      </div>
      <div className="my-5 p-5 rounded-xl bg-white h-fit dark:bg-gray-800 border-b border-gray-200">
        <p className="font-medium mb-5">Gợi ý dành cho bạn</p>
        <div>
          {Array.from(Array(4).keys()).map((item, index) => (
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
              <button className="text-sm text-secondary font-medium">
                Theo dõi
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSide;
