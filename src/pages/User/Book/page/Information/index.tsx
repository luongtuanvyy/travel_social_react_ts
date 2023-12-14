import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import { TourApi } from '~/api/TourApi';
import { useAppDispatch, useAppSelector } from '~/app/hook';
import { Edit, Plane, UserIcon } from '~/assets/svg';
import StarArray from '~/components/Star';
import { convertDateToString, getAge } from '~/service/DateService';
import { Tour } from '~/types/entity';
import { BookingPerson } from '~/types/form';
import Price from '../../components/Price';
import Member from '../../components/Member';
import { BookingActions } from '~/slice/Booking';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

const Information = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [modalMember, setModalMember] = React.useState(false);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [tour, setTour] = React.useState<Tour>();
  const initMember = user
    ? [
        {
          name: user.name,
          age: getAge(user.birthday),
          gender: user.gender,
        },
      ]
    : [];
  const [member, setMember] = React.useState<BookingPerson[]>(initMember);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: user
      ? {
          name: user.name,
          email: user.email,
          phone: user.hotline,
          age: getAge(user.birthday),
        }
      : { name: '', email: '', phone: '', age: 18 },
    resolver: yupResolver(schema),
  });

  const onModalMember = (value: boolean) => {
    setModalMember(value);
  };

  const onSubmit = (data: BookingPerson) => console.log(data);

  // const tourBook = useAppSelector((state) => state.tourBook);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        await TourApi.getTourById(parseInt(id) ?? 8)
          .then((response) => {
            setTour(response.data.data.datas[0]);
            console.log(response.data.data.datas[0]);
          })
          .catch((err) => console.log(err));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(BookingActions.addMember(member));
  }, [member]);

  return (
    <>
      {tour && (
        <div className="shadow-md col-span-2 bg-white p-4 border rounded-lg">
          <div className="flex shadow space-x-4 rounded-lg border p-4">
            <img
              className="h-40 w-40 object-cover rounded-lg"
              src={tour.image}
              alt=""
            />
            <div className="grow flex flex-col">
              <div>
                <p className="text-third font-medium ">Lựa chọn của bạn</p>
                <p className="text-lg font-medium">{tour.name}</p>
              </div>
              <div className="grow flex items-end space-x-2 py-5">
                <StarArray star={Math.round(4.3)} size={20} />
                <span className="text-sm font-medium">4.3</span>
                <span className="text-xs font-medium text-gray-400">
                  202 đánh giá
                </span>
              </div>
              <div className="flex justify-between w-full pr-4">
                <div>
                  <p className="text-sm mb-2 text-gray-400 font-medium">
                    Phương tiện
                  </p>
                  <p className="text-sm font-medium flex space-x-2">
                    <span>{tour?.vehicle}</span>
                    <span className="text-gray-500">
                      {/* <Bus /> */}
                      <Plane />
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2 text-gray-400 font-medium">
                    Vị trí trống
                  </p>
                  <p className="text-sm font-medium flex space-x-2">
                    <span>{tour.size - tour.registered}</span>
                    <span className="text-gray-500">
                      <UserIcon size={20} />
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2 text-gray-400 font-medium">
                    Thời gian đi
                  </p>
                  <p className="text-sm font-medium flex space-x-2">
                    {convertDateToString(tour.startDate)}
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2 text-gray-400 font-medium">
                    Thời gian về
                  </p>
                  <p className="text-sm font-medium flex space-x-2">
                    {convertDateToString(tour.endDate)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Price adult={tour.adult} baby={tour.baby} children={tour.children} />

          <div className="mt-4 rounded-lg border p-4 shadow-lg">
            <form action="">
              <p className="text-lg font-medium mb-4">Nhập thông tin của bạn</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tuổi
                  </label>
                  <input
                    type="number"
                    id="age"
                    {...register('age')}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    id="company"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Flowbite"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="123-45-678"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
              </div>
            </form>
          </div>

          <Member member={member} onModalMember={onModalMember} />

          <div className="mt-4 rounded-lg border p-4 shadow-lg">
            <p className="text-lg font-medium mb-4">Chú thích cho chuyến đi</p>
            <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-lg dark:bg-gray-800">
                <label htmlFor="comment" className="sr-only">
                  Nội dung
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Nội dung..."
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div
            className={`${
              modalMember ? 'fixed' : 'hidden'
            } top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full h-screen bg-gray-900/50`}
          >
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
                      onClick={() => setModalMember(false)}
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

                  <form action="#">
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
                          name="name"
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
                          name="age"
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
                            name="gender"
                            value="female"
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
                            name="gender"
                            value="male"
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
                        Lưu ý: Vui lòng nhập đúng thông tin người dùng để hỗ trợ
                        chúng tôi trong việc thanh toán và hỗ trợ tốt nhất cho
                        những thành viên tham gia
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        type="submit"
                        className="text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Thêm người dùng
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Information;
