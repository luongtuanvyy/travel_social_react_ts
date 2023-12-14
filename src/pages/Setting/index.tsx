import React from 'react';
import { useAppSelector } from '~/app/hook';
import { Edit } from '~/assets/svg';
import Navbar from '~/components/Navbar';

const Setting = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div className="p-[76px]">
      <div className="p-12">
        <div className="mb-6">
          <p className="font-medium text-3xl mb-2">Cài đặt</p>
          <p className="text-gray-500 font-medium">
            Cài đặt thông tin và ứng dụng của bạn
          </p>
        </div>
        <div>
          <button className="px-4 py-1.5 rounded-l-lg border border-gray-300">
            Thông tin cá nhân
          </button>
          <button className="px-4 py-1.5 rounded-r-lg border border-gray-300">
            Giao diện và chức năng
          </button>
        </div>
        <div className="">
          <div className="my-4">
            <p className="font-medium text-xl">Thông tin cá nhân</p>
            <p className="text-gray-400 text-sm font-medium">
              Tài khoản của bạn trong hệ thống
            </p>
          </div>
          <hr />
          <div className="grid grid-cols-3 my-4">
            <div className="">
              <p className="font-medium">Tên của bạn</p>
              <p className="text-gray-400 text-sm font-medium">
                Tên hiển thị trong hệ thống
              </p>
            </div>
            <div className="col-span-2 flex items-center space-x-2">
              <input
                type="text"
                readOnly={true}
                className="border-2 py-1.5 text-sm border-gray-200 rounded-lg focus:ring-0 focus:border-gray-400"
                value={user?.name}
              />
              <div className="text-gray-500">
                <Edit size={24} />
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-3 my-4">
            <div className="">
              <p className="font-medium">Thông tin tài khoản</p>
              <p className="text-gray-400 text-sm font-medium">
                Dùng để đăng nhập vào hệ thống
              </p>
            </div>
            <div className="space-y-5">
              <div className="col-span-2 flex items-center space-x-2">
                <input
                  type="text"
                  readOnly={true}
                  className="border-2 py-1.5 text-sm border-gray-200 rounded-lg focus:ring-0 focus:border-gray-400"
                  value={user?.name}
                />
                <div className="text-gray-500">
                  <Edit size={24} />
                </div>
              </div>
              <div className="col-span-2 flex items-center space-x-2">
                <input
                  type="text"
                  readOnly={true}
                  className="border-2 py-1.5 text-sm border-gray-200 rounded-lg focus:ring-0 focus:border-gray-400"
                  value={user?.name}
                />
                <div className="text-gray-500">
                  <Edit size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
