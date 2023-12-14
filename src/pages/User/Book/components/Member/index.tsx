import React from 'react';
import { Edit } from '~/assets/svg';
import { BookingPerson } from '~/types/form';

type MemberProps = {
  member: BookingPerson[];
  onModalMember: (value: boolean) => void;
};

const Member = (props: MemberProps) => {
  const { member, onModalMember } = props;

  const hanleModalMember = () => {
    onModalMember(true);
  };

  return (
    <div className="mt-4 rounded-lg border p-4 shadow-lg">
      <p className="text-lg font-medium">Thông tin thành viên</p>

      <div className="relative sm:rounded-lg">
        <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
          <button
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={hanleModalMember}
          >
            Thêm thành viên
          </button>
        </div>

        <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Thông tin
              </th>
              <th scope="col" className="px-6 py-3">
                Giới tính
              </th>
              <th scope="col" className="px-6 py-3">
                Tuổi
              </th>
              <th scope="col" className="px-6 py-3">
                Loại
              </th>
              <th scope="col" className="px-6 py-3" />
            </tr>
          </thead>
          <tbody>
            {member.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="text-base font-semibold">{item.name}</div>
                </th>
                <td className="px-6 py-4">{item.gender ? 'Nam' : 'Nữ'}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">{item.age}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {item.age < 2
                      ? 'Trẻ sơ sinh'
                      : item.age >= 2 && item.age < 12
                      ? 'Trẻ em'
                      : 'Người lớn'}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    onClick={hanleModalMember}
                    className="font-medium hover:underline"
                  >
                    <Edit size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Member;
