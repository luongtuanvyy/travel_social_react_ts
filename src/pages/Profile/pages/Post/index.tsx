import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '~/app/hook';

const Posts = () => {
  const leftPage = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(0);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (leftPage.current?.offsetHeight)
      setSticky(leftPage.current?.offsetHeight - window.innerHeight);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div
        ref={leftPage}
        className={`h-fit sticky ${sticky ? '-top-[228px]' : ''} `}
      >
        <div className="flex flex-col space-y-3 bg-white rounded-3xl p-6 mb-4">
          <span className="font-medium">Thông tin cá nhân</span>
          <span className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quis
            beatae repudiandae eos at voluptates amet sapiente, corrupti dolores
            deleniti ut excepturi culpa minima, tempora quaerat cumque
            voluptate! Praesentium, quos!
          </span>
          <div className="grid grid-cols-2 gap-2">
            <span className="text-sm text-gray-600">Ngày sinh</span>
            <span className="text-sm font-medium">{user?.birthday}</span>
            <span className="text-sm text-gray-600">Quê quán</span>
            <span className="text-sm font-medium">{user?.address}</span>
            <span className="text-sm text-gray-600">Số điện thoại</span>
            <span className="text-sm font-medium">{user?.hotline}</span>
            <span className="text-sm text-gray-600">Giới tính</span>
            <span className="text-sm font-medium">
              {user?.gender ? 'Nam' : 'Nữ'}
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-3 bg-white rounded-3xl p-6 mb-4">
          <div className="flex">
            <span className="font-medium">
              Photo <span className="text-secondary">74</span>
            </span>
            <span className="grow flex justify-end items-center text-sm text-secondary font-medium">
              Xem tất cả
            </span>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <div>
                <img
                  className="h-24 object-cover w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-24 object-cover w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-24 object-cover w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-24 object-cover w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-24 object-cover w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-24 object-cover w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-24 object-cover w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-24 object-cover w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-24 object-cover w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 bg-white rounded-3xl p-6">
          <div className="flex">
            <span className="font-medium">
              Người theo dõi <span className="text-secondary">74</span>
            </span>
            <span className="grow flex justify-end items-center text-sm text-secondary font-medium">
              Xem tất cả
            </span>
          </div>
          <div>
            <div className="grid gap-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://i.pinimg.com/236x/cf/07/71/cf077191fe133661b8cb73e0292e50fe.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-0 right-0 text-blue-500 bg-white rounded-full">
                    <svg
                      width="15"
                      height="15"
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
                <div className="font-medium dark:text-white">
                  <div className="text-sm">
                    Jese Leos
                    <span className="text-xs text-third ml-4">+ Theo dõi</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    50K người theo dõi
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://i.pinimg.com/236x/cf/07/71/cf077191fe133661b8cb73e0292e50fe.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-0 right-0 text-blue-500 bg-white rounded-full">
                    <svg
                      width="15"
                      height="15"
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
                <div className="font-medium dark:text-white">
                  <div className="text-sm">
                    Jese Leos{' '}
                    <span className="text-xs text-third ml-4">+ Theo dõi</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    50K người theo dõi
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://i.pinimg.com/236x/cf/07/71/cf077191fe133661b8cb73e0292e50fe.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-0 right-0 text-blue-500 bg-white rounded-full">
                    <svg
                      width="15"
                      height="15"
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
                <div className="font-medium dark:text-white">
                  <div className="text-sm">
                    Jese Leos{' '}
                    <span className="text-xs text-third ml-4">+ Theo dõi</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    50K người theo dõi
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://i.pinimg.com/236x/cf/07/71/cf077191fe133661b8cb73e0292e50fe.jpg"
                  alt=""
                />
                <div className="font-medium dark:text-white">
                  <div className="text-sm">Jese Leos</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    50K người theo dõi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 rounded-3xl overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Posts;
