import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { BookingPerson } from '~/types/form';

const schema = yup
  .object({
    name: yup.string().required(),
    age: yup.number().positive().integer().required(),
    gender: yup.boolean().required(),
  })
  .required();

type ModalMemberProps = {
  onModalMember: (value: boolean) => void;
  setMemberData: (value: BookingPerson) => void;
};

const ModalMember = (props: ModalMemberProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { onModalMember, setMemberData } = props;

  const onSubmit: SubmitHandler<BookingPerson> = (data: BookingPerson) => {
    setMemberData(data);
    reset();
  };

  const setModalMember = () => {
    onModalMember(false);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative p-4 w-full max-w-xl">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Thêm người dùng
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={setModalMember}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div>
            <div className="grid gap-4 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tên
                </label>
                <input
                  type="text"
                  {...register('name')}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tuổi
                </label>
                <input
                  type="number"
                  {...register('age')}
                  id="age"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""
                />
              </div>

              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                Giới tính
              </h3>
              <ul className="flex space-x-4 mb-2">
                <li>
                  <input
                    defaultChecked={true}
                    type="radio"
                    id="female"
                    {...register('gender')}
                    value="true"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="female"
                    className=" w-fit px-3 py-1.5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Nam
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="male"
                    {...register('gender')}
                    value="false"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="male"
                    className=" w-fit px-3 py-1.5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Nữ
                  </label>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <p className="text-primary text-xs">
                Lưu ý: Vui lòng nhập đúng thông tin người dùng để hỗ trợ chúng
                tôi trong việc thanh toán và hỗ trợ tốt nhất cho những thành
                viên tham gia
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleSubmit(onSubmit)}
                type="submit"
                className="text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Thêm người dùng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMember;
