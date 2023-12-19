import { Datepicker } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TourApi } from '~/api/TourApi';
import { useAppSelector } from '~/app/hook';
import { ArrowLeft, More, Tick } from '~/assets/svg';
import MapLeaflet from '~/components/Map';
import Pagination from '~/components/Pagination';
import {
  calculateDaysAndNights,
  convertDateToString,
} from '~/service/DateService';
import { StateApiResponse } from '~/types/api';
import { Tour } from '~/types/entity';

const DATA_STATUS_TOUR = [
  {
    name: 'Đang mở',
    value: true,
  },
  {
    name: 'Đóng đăng ký',
    value: false,
  },
];

const DATA_STATUS_DISCOUNT = [
  {
    name: 'Tất cả',
    value: 2,
  },
  {
    name: 'Giảm giá',
    value: 1,
  },
  {
    name: 'Không giảm giá',
    value: 0,
  },
];
const DATA_STATUS_SIZE = [
  { name: 'Trên 10 người', value: 10 },
  { name: 'Trên 20 người', value: 20 },
  { name: 'Trên 30 người', value: 30 },
  { name: 'Trên 40 người', value: 40 },
  { name: 'Trên 50 người', value: 50 },
];

const TourCompany = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [stateTour, setStateTour] = useState<StateApiResponse<Tour[]>>();
  const [editTour, setEditTour] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      await TourApi.getTourWithFilter({ page: 0, pageSize: 9 }).then(
        (response) => {
          setStateTour(response.data.data);
          console.log(response.data.data);
        },
      );
    };
    fetchData();
  }, []);
  const handlePage = async (page: number) => {
    console.log(page);
  };

  useEffect(() => {
    if (editTour) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [editTour]);

  const handleEditTour = () => {
    setEditTour(!editTour);
  };
  return (
    <React.Fragment>
      <div className="pt-[76px]">
        <div className="grid grid-cols-5">
          <div className="bg-gray-200 p-5 pr-0">
            <div className="h-full bg-white rounded-lg p-5">
              <div>
                <div className="pt-5 px-5">
                  <p className="font-medium">Địa điểm</p>
                  <select
                    className="mt-3 border text-sm border-gray-400 rounded-lg w-fit h-fit"
                    name=""
                    id=""
                  >
                    <option value="">Thành phố Hồ Chí Minh</option>
                  </select>
                </div>
                <div className="pt-5 px-5">
                  <p className="font-medium mt-3">Trạng thái</p>
                  <div className="mt-3 flex flex-col space-y-2">
                    {DATA_STATUS_TOUR.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="type_tour"
                          id={item.name}
                          className="w-4 h-4"
                          defaultChecked={item.value}
                        />
                        <label htmlFor={item.name} className="text-sm">
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-5 px-5">
                  <p className="font-medium mt-3">Số lượng vị trí trống</p>
                  <div className="mt-3 flex flex-col space-y-2">
                    {DATA_STATUS_SIZE.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="type_size"
                          id={item.name}
                          className="w-4 h-4"
                          defaultValue={'all'}
                        />
                        <label htmlFor={item.name} className="text-sm">
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-5 px-5">
                  <p className="font-medium mt-3">Giảm giá</p>

                  <div className="mt-3 flex flex-col space-y-2">
                    {DATA_STATUS_DISCOUNT.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="type_tour"
                          id={item.name}
                          className="w-4 h-4"
                          defaultValue={'all'}
                        />
                        <label htmlFor={item.name} className="text-sm">
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 bg-gray-200 overflow-y-auto">
            <div className="grid grid-cols-3 p-5 gap-5">
              {stateTour?.datas.map((tour: Tour, index: number) => (
                <div
                  key={index}
                  className="relative w-full bg-gray-50 rounded-lg p-5"
                >
                  <div className="absolute top-4 right-4">
                    <button onClick={() => handleEditTour()}>
                      <More size={15} />
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <div className="min-w-max">
                      <img
                        src={tour.image}
                        alt=""
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{tour.name}</p>
                      <p className="text-xs">{tour.departure}</p>
                      <p className="text-xs">
                        {calculateDaysAndNights(tour.startDate, tour.endDate)}{' '}
                        &bull; {tour.vehicle}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs mt-2 flex space-x-4">
                      <div>
                        {tour.isActivated ? (
                          <div className="bg-green-100 font-medium text-green-400 w-fit px-3 py-1  rounded-lg">
                            Đang mở
                          </div>
                        ) : (
                          <div className="bg-red-100 font-medium text-red-400 w-fit px-3 py-1  rounded-lg">
                            Đóng đăng ký
                          </div>
                        )}
                      </div>
                      <div className="bg-blue-100 font-medium text-blue-400 w-fit px-3 py-1 rounded-lg">
                        {tour.size - tour.registered === 0 ? (
                          <>Đã đầy</>
                        ) : (
                          <>Còn {tour.size - tour.registered} vé </>
                        )}
                      </div>
                      <div className="bg-blue-100 font-medium text-blue-400 w-fit px-3 py-1 rounded-lg">
                        {tour.discount ? (
                          <>Giảm {tour.discount}% </>
                        ) : (
                          <>Không giảm giá</>
                        )}
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="mt-2 flex space-x-2">
                      <div className="relative w-fit">
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src={user?.avatar}
                          alt=""
                        />
                        <div className="absolute -bottom-1 -right-1">
                          <Tick size={15} />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-medium">{user?.name}</p>
                        <p className="text-xs text-gray-600">{user?.email}</p>
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between">
                      <p className="text-xs font-medium text-blue-500">
                        <Link to={'/tour-detail'}>Xem chi tiết</Link>
                      </p>
                      <p className="text-xs">
                        {convertDateToString(tour.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {stateTour && (
              <Pagination
                currentPage={stateTour.currentPage}
                handlePage={handlePage}
                pageCount={stateTour.totalPage}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          editTour ? 'fixed' : 'hidden'
        } top-0 left-0 right-0 bottom-0 overflow-y-scroll bg-gray-500/50 z-50`}
      >
        <div className="w-2/3  h-full ml-auto">
          <div className="p-12 bg-white ">
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditTour()}
                className="border p-1.5 border-gray-300 rounded-lg"
              >
                <ArrowLeft />
              </button>
              <div>
                <p className="text-sm">Trở về trang sản phẩm</p>
                <p className="font-medium">Thay đổi thông tin chuyến đi </p>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-10 gap-6">
              <div>
                <div>
                  <p className="font-medium text-lg mb-2">Mô tả</p>
                  <div className="w-full border border-gray-300 rounded-lg p-5">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Tên tour
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50/50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="mt-2">
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Mô tả chuyến đi
                      </label>
                      <textarea
                        className="w-full border-gray-300 rounded-lg"
                        style={{ resize: 'none' }}
                        name="name"
                        cols={1}
                        rows={7}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-medium text-lg mb-2">Địa điểm xuất phát</p>
                  <div className="w-full border border-gray-300 rounded-lg p-5">
                    <div className="h-40 overflow-hidden rounded-xl">
                      <MapLeaflet />
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-medium text-lg mb-2">Hủy đăng ký</p>
                  <div className="w-full border border-gray-300 rounded-lg p-5">
                    <div className="flex items-center">
                      <input
                        id="disabled-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="disabled-checkbox"
                        className="ms-2 font-medium text-sm text-gray-900 dark:text-gray-500"
                      >
                        Cho phép hủy đăng ký
                      </label>
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        id="disabled-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="disabled-checkbox"
                        className="ms-2 font-medium text-sm text-gray-900 dark:text-gray-500"
                      >
                        Cho phép hủy đăng ký ( mất phí )
                      </label>
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        id="disabled-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="disabled-checkbox"
                        className="ms-2 font-medium text-sm text-gray-900 dark:text-gray-500"
                      >
                        Không cho phép hủy đăng ký
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-medium text-lg mb-2">Thông tin mức phí</p>
                  <div className="w-full border border-gray-300 rounded-lg p-5">
                    <div className="flex space-x-5 items-end">
                      <div>
                        <label htmlFor="" className="text-sm font-medium">
                          Thời hạn được hủy
                        </label>
                        <input
                          type="number"
                          id="visitors"
                          className="bg-gray-50/50 border mt-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="" className="text-sm font-medium">
                          Phần trăm mất
                        </label>
                        <input
                          type="number"
                          id="visitors"
                          className="bg-gray-50/50 border mt-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required
                        />
                      </div>
                      <button className="bg-gray-100 px-4 rounded-lg h-fit py-2.5">
                        Thêm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="pb-3">
                  <p className="text-lg font-medium mb-2">Hình ảnh chuyến đi</p>
                  <div className="grid grid-cols-3 gap-3 border border-gray-300 p-3 rounded-lg">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center p-6">
                          <svg
                            className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                            <span className="font-semibold mr-1">
                              Click to upload
                            </span>
                            <br />
                            or drag and drop
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                    <div className="w-full h-32">
                      <img
                        className="w-full h-full rounded-lg object-cover"
                        src="https://i.pinimg.com/236x/c1/61/c8/c161c8eb9755205f66a499c50d807ead.jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-full h-32">
                      <img
                        className="w-full h-full rounded-lg object-cover"
                        src="https://i.pinimg.com/236x/c1/61/c8/c161c8eb9755205f66a499c50d807ead.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="pb-3">
                  <p className="text-lg font-medium mb-2">Chọn các loại phí</p>
                  <div className="p-3 border border-gray-300 rounded-lg">
                    <div className="flex items-center">
                      <input
                        id="disabled-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="disabled-checkbox"
                        className="ms-2 font-medium text-sm text-gray-900 dark:text-gray-500"
                      >
                        Áp dụng giá người lớn
                      </label>
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        id="disabled-checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="disabled-checked-checkbox"
                        className="font-medium ms-2 text-sm text-gray-900 dark:text-gray-500"
                      >
                        Áp dụng mức giá trẻ em
                      </label>
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        id="disabled-checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="disabled-checked-checkbox"
                        className="font-medium ms-2 text-sm text-gray-900 dark:text-gray-500"
                      >
                        Áp dụng mức giá trẻ nhỏ
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pb-3">
                  <p className="text-lg font-medium mb-2">Chi phí cụ thể</p>
                  <div className="grid grid-cols-3 gap-4 p-3 border border-gray-300 rounded-lg">
                    <div>
                      <label
                        htmlFor="visitors"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Người lớn
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          id="visitors"
                          className="bg-gray-50/50 border border-gray-300 text-gray-900 pl-8 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required
                        />
                        <div className="font-medium absolute top-1/2 left-1 rounded-l-md -translate-y-1/2 bg-gray-200 text-gray-500 p-1.5 px-2">
                          $
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="visitors"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Trẻ em
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          id="visitors"
                          className="bg-gray-50/50 border border-gray-300 text-gray-900 pl-8 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required
                        />
                        <div className="font-medium absolute top-1/2 left-1 rounded-l-md -translate-y-1/2 bg-gray-200 text-gray-500 p-1.5 px-2">
                          $
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="visitors"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Trẻ nhỏ
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          id="visitors"
                          className="bg-gray-50/50 border border-gray-300 text-gray-900 pl-8 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required
                        />
                        <div className="font-medium absolute top-1/2 left-1 rounded-l-md -translate-y-1/2 bg-gray-200 text-gray-500 p-1.5 px-2">
                          $
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs font-medium text-gray-600 mt-1">
                    * Đơn vị tiền tệ: VNĐ
                  </p>
                </div>
                <div>
                  <p className="font-medium text-lg mb-2">
                    Thời gian chuyến đi
                  </p>
                  <div className="flex gap-3 border border-gray-300 rounded-lg p-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Ngày khởi hành
                      </p>
                      <Datepicker language="vn" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Ngày kết thúc
                      </p>
                      <Datepicker language="vn" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-lg my-2">Thời hạn đặt chỗ</p>
                  <div className="flex gap-3 border border-gray-300 rounded-lg p-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Ngày mở đăng ký
                      </p>
                      <Datepicker language="vn" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Ngày kết thúc đăng ký
                      </p>
                      <Datepicker language="vn" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-medium my-2">Số lượng chỗ </p>
                  <div className="p-3 border border-gray-300 rounded-lg">
                    <label htmlFor="" className="text-sm font-medium">
                      Số lượng người
                    </label>
                    <input
                      type="number"
                      id="visitors"
                      className="bg-gray-50/50 border mt-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="px-5 py-2.5 rounded-lg ">Lưu</button>
                  <button className="px-5 py-2.5 rounded-lg bg-red-200">
                    Đặt lại toàn bộ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TourCompany;
