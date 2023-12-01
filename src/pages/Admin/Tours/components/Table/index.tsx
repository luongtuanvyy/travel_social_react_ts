import { useAppSelector } from '~/app/hooks';
import { Crash, Edit } from '~/assets/svg';
import { PropsTable } from '../..';
import { convertDateToString } from '~/services/DateService';
import { convertNumber } from '~/services/CurrentService';

const DATA_TABLE_USER = [
  'Thông tin',
  'Ngày tham gia',
  'Thành viên',
  'Lượt thích',
  'Bài viết',
  'Người theo dõi',
  'Trạng thái',
  'Thao tác',
];

export type modalReturn = {
  id: string;
  name: string;
};

const Table = (props: PropsTable) => {
  const { onShowModal, onSelecteDelete, listUser, handleModalEdit } = props;
  const user = useAppSelector((state) => state.user.value);

  const hanldeModal = (user: modalReturn) => {
    onShowModal(true, user);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            {DATA_TABLE_USER.map((item, index) => (
              <th key={index} scope="col" className="px-6 py-3 text-sm">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listUser?.map((user, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    onChange={() => onSelecteDelete(user.id)}
                    className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    Xóa người dùng
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={user.avatar}
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="font-semibold text-sm">{user.firstName}</div>
                  <div className="font-normal text-gray-500 text-xs">
                    {user.email}
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="font-medium text-gray-500">
                  {convertDateToString(user.dateCreate)}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="font-normal text-gray-500">
                  <button
                    type="button"
                    className={
                      user?.vip
                        ? 'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center '
                        : 'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center'
                    }
                  >
                    {user?.vip ? 'Thành viên' : 'Người dùng'}
                  </button>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className=" text-gray-500 text-sm font-semibold">
                  {convertNumber(user.countLike)}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="font-semibold text-gray-500">
                  {convertNumber(user.countPost)}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="font-normal text-gray-500 flex">
                  <div className="flex -space-x-3 rtl:space-x-reverse">
                    <img
                      className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                      src="https://i.pinimg.com/236x/e1/6f/32/e16f32e6c665ca75181683953b02caaa.jpg"
                      alt=""
                    />
                    <img
                      className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                      src="https://i.pinimg.com/236x/40/98/2a/40982a8167f0a53dedce3731178f2ef5.jpg"
                      alt=""
                    />
                    <img
                      className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                      src="https://i.pinimg.com/236x/bb/84/e8/bb84e8891c5b8aea249381b5d7c936e5.jpg"
                      alt=""
                    />
                  </div>
                  <a
                    className="flex items-center justify-center w-fit h-8 text-xs font-medium bg-white border-2 border-white rounded-full hover:bg-gray-500 dark:border-gray-800"
                    href="#"
                  >
                    +{convertNumber(user.countFollow)}
                  </a>
                </div>
              </td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className={
                    !user?.isActive
                      ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center'
                      : 'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center'
                  }
                >
                  {!user?.isActive ? 'Đang hoạt động' : 'Đã khóa'}
                </button>
              </td>
              <td className="px-6 py-4 space-x-2">
                <button
                  onClick={() => handleModalEdit(true, user)}
                  className="bg-gray-100 p-1 rounded-full"
                >
                  <Edit />
                </button>
                <button
                  onClick={() =>
                    hanldeModal({ id: user.id, name: user.firstName })
                  }
                  className="bg-gray-100 p-1 rounded-full text-red-700 hover:bg-gray-200 hover:text-red-600"
                >
                  <Crash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
