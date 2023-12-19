import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TourApi } from '~/api/TourApi';
import { useAppSelector } from '~/app/hook';
import { More, Tick } from '~/assets/svg';
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
const DATA_STATUS_SIZE = [
  { name: 'Trên 10 người', value: 10 },
  { name: 'Trên 20 người', value: 20 },
  { name: 'Trên 30 người', value: 30 },
  { name: 'Trên 40 người', value: 40 },
  { name: 'Trên 50 người', value: 50 },
];

const TourAdmin = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [stateTour, setStateTour] = useState<StateApiResponse<Tour[]>>();
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

  return (
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
                <More size={15} />
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
  );
};

export default TourAdmin;
