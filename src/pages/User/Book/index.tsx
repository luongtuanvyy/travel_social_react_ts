import { Datepicker } from 'flowbite-react';
import React from 'react';
import { Bus, Edit, UserIcon } from '~/assets/svg';
import Navbar from '~/components/Navbar';
import StarArray from '~/components/Star';
import { convertDateToString } from '~/service/DateService';
import Indicator from './components/Indicators';
import { useLocation } from 'react-router-dom';

const Booking = () => {
  const [modalMember, setModalMember] = React.useState(false);
  const [detail, setDetail] = React.useState(false);
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className="pt-24 px-24 flex justify-center bg-gray-100">
        <Indicator />
      </div>
      <div className="grid grid-cols-3 gap-8 px-8 bg-gray-100">
        <div className="shadow-md bg-white col-span-2 p-4 border rounded-lg">
          <div className="flex shadow space-x-4 rounded-lg border p-4">
            <img
              className="h-40 w-40 object-cover rounded-lg"
              src="https://i.pinimg.com/236x/0c/04/26/0c04267919bca8561f7143b769715f29.jpg"
              alt=""
            />
            <div className="grow flex flex-col">
              <div>
                <p className="text-third font-medium ">Lựa chọn của bạn</p>
                {/* <p className="text-lg font-medium">{DATA_TOUR_DETAIL.name}</p> */}
              </div>
              <div className="grow flex items-center space-x-2">
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
                    <span>Ô tô</span>
                    <span className="text-gray-500">
                      <Bus />
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2 text-gray-400 font-medium">
                    Vị trí trống
                  </p>
                  <p className="text-sm font-medium flex space-x-2">
                    <span>
                      {/* {DATA_TOUR_DETAIL.size - DATA_TOUR_DETAIL.registered} */}
                    </span>
                    <span className="text-gray-500">
                      <UserIcon size={20} />
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2 text-gray-400 font-medium">
                    Phương tiện
                  </p>
                  <p className="text-sm font-medium flex space-x-2">
                    <span>Ô tô</span>
                    <span className="text-gray-500">
                      <Bus />
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2 text-gray-400 font-medium">
                    Phương tiện
                  </p>
                  <p className="text-sm font-medium flex space-x-2">
                    <span>Ô tô</span>
                    <span className="text-gray-500">
                      <Bus />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg border mt-4">
            <section className="bg-white dark:bg-gray-900">
              <div className="">
                <div className="">
                  <div className="flex items-end justify-between">
                    <h2 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                      Bảng giá so với độ tuổi của chuyến đi
                    </h2>
                    <button
                      onClick={() => setDetail((prev) => !prev)}
                      className="text-secondary text-sm"
                    >
                      Xem chi tiết
                    </button>
                  </div>
                  <p className="text-sm mb-2 font-medium text-gray-500 dark:text-gray-400">
                    Bảng giá dưới đây được tính theo độ tuổi của các thành viên.
                    Vui lòng nhập đúng ngày tháng năm sinh của các thành viên
                  </p>
                </div>
                <div
                  className={`grid grid-cols-2 gap-4 ${detail ? '' : 'hidden'}`}
                >
                  <div className="flex flex-col p-4 mx-auto w-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-2 text-2xl font-semibold">Trẻ em</h3>
                    <p className="font-medium text-gray-500 dark:text-gray-400">
                      Tính từ 2 đến 12 tuổi
                    </p>
                    <span className="text-xs mb-4 text-gray-500">
                      Sinh trước ngày 20 tháng 11, 2011
                    </span>
                    <div className="flex justify-center items-baseline ">
                      <span className=" text-xl font-medium">2.700.000</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-4 mx-auto w-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-2 text-2xl font-semibold">Người lớn</h3>
                    <p className="font-medium text-gray-500 dark:text-gray-400">
                      Trên 12 tuổi
                    </p>
                    <span className="text-xs mb-4 text-gray-500">
                      Sinh sau ngày 20 tháng 11, 2011
                    </span>
                    <div className="flex justify-center items-baseline ">
                      <span className=" text-xl font-medium">2.900.000</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-4 rounded-lg border p-4 shadow-lg">
            <form action="">
              <p className="text-lg font-medium mb-4">Nhập thông tin của bạn</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tên
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Họ
                  </label>
                  <input
                    type="text"
                    id="last_name"
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
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="123-45-678"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="mt-4 rounded-lg border p-4 shadow-lg">
            <p className="text-lg font-medium">Thông tin thành viên</p>

            <div className="relative sm:rounded-lg">
              <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
                <button
                  className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                  onClick={() => setModalMember(true)}
                >
                  Thêm thành viên
                </button>
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search-users"
                    className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tìm thành viên"
                  />
                </div>
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
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="text-base font-semibold">Neil Sims</div>
                    </th>
                    <td className="px-6 py-4">React Developer</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                        Online
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        onClick={() => setModalMember(true)}
                        className="font-medium hover:underline"
                      >
                        <Edit />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

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
                          value=""
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder=""
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Ngày sinh
                        </label>
                        <Datepicker />
                      </div>

                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        Giới tính
                      </h3>
                      <ul className="flex space-x-4 mb-2">
                        <li>
                          <input
                            type="radio"
                            id="hosting-small"
                            name="hosting"
                            value="hosting-small"
                            className="hidden peer"
                          />
                          <label
                            htmlFor="hosting-small"
                            className=" w-fit px-3 py-1.5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            Nam
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="hosting-big"
                            name="hosting"
                            value="hosting-big"
                            className="hidden peer"
                          />
                          <label
                            htmlFor="hosting-big"
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
        <div className=" ">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg font-medium mb-2">Thông tin hóa đơn</p>
            <div className="p-3 rounded-lg border">
              {/* <p className="font-medium">{DATA_TOUR_DETAIL.name}</p> */}
              <p className="font-medium text-sm">
                Phương tiện:
                <span className="ml-1 font-normal text-sm">
                  {/* {DATA_TOUR_DETAIL.vehicle} */}
                </span>
              </p>
              <p className="font-medium text-sm">
                Xuất phát:
                <span className="ml-1 font-normal text-sm">
                  {/* {DATA_TOUR_DETAIL.departure} */}
                </span>
              </p>
              <hr className="my-4" />
              <div className="grid grid-cols-2">
                <div>
                  <span className="text-gray-500 text-sm">Bắt đầu</span>
                  <p className="font-medium text-sm">
                    {/* {convertDateToString(DATA_TOUR_DETAIL.startDate)} */}
                  </p>
                  <p className=" text-sm">lúc 5:40</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Kết thúc</span>
                  <p className="font-medium text-sm">
                    {/* {convertDateToString(DATA_TOUR_DETAIL.startDate)} */}
                  </p>
                  <p className=" text-sm">lúc 6:20</p>
                </div>
              </div>
              <hr className="my-4" />
              <p className="text-sm font-medium">
                Số lượng thành viên:
                <br />
                <span className="flex items-center">
                  <span className="mr-2">4</span> <UserIcon size={14} />
                </span>
              </p>
              <p className="text-sm font-medium mt-2">Ghi chú:</p>
              <p className="text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, sunt laboriosam neque porro fugiat perferendis rerum,
                cupiditate culpa commodi odio omnis labore quas aperiam earum
                deserunt necessitatibus temporibus at sequi.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium my-2">Thông tin thanh toán</p>
              <p className="flex justify-between">
                <span className="text-sm font-semibold text-gray-600">
                  Người lớn: 2
                </span>
                <span className="text-sm font-medium">
                  2.700.000{' '}
                  <span className="font-medium text-xs text-gray-500">VND</span>
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-sm font-semibold text-gray-600">
                  Trẻ em: 2
                </span>
                <span className="text-sm font-medium">
                  2.400.000{' '}
                  <span className="font-medium text-xs text-gray-500">VND</span>
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-sm font-semibold text-gray-600">
                  Thuế VAT 10%
                </span>
                <span className="text-sm font-medium">
                  2.700.000{' '}
                  <span className="font-medium text-xs text-gray-500">VND</span>
                </span>
              </p>
              <hr className="my-4" />
              <p className="flex justify-between mt-2">
                <span className="text-lg font-semibold text-green-600">
                  Tổng
                </span>
                <span className="text-lg font-medium">
                  2.700.000{' '}
                  <span className="font-medium text-xs text-gray-500">VND</span>
                </span>
              </p>
              <button className="mt-4 w-full py-2.5 text-white bg-secondary rounded-lg">
                Đặt tour
              </button>
              <p className="text-xs text-center mt-4">
                Giá trị của hóa đơn bao gồm ăn uống và chỗ ở cho khách hàng
                trong chuyến đi.Tham khảo tại{' '}
                <span className="underline text-secondary">thông tin tua</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
