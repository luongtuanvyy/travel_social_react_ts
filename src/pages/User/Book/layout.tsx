import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { TourApi } from '~/api/TourApi';
import { useAppDispatch, useAppSelector } from '~/app/hook';
import { UserIcon } from '~/assets/svg';
import Navbar from '~/components/Navbar';
import { convertDateToString } from '~/service/DateService';
import { TourBookActions } from '~/slice/TourBook';
import { Tour } from '~/types/entity';
import Indicator from './components/Indicators';
import { CurrencyVND } from '~/service/CurrentService';

const LayoutBooking = () => {
  const pathname = useLocation().pathname;
  const { id } = useParams();
  const [tour, setTour] = useState<Tour>();
  const dispatch = useAppDispatch();
  const booking = useAppSelector((state) => state.booking);

  useEffect(() => {
    if (Number(id)) {
      const fetchTours = async () => {
        await TourApi.getTourById(Number(id)).then((response) => {
          setTour(response.data.data.datas[0]);
          dispatch(TourBookActions.modifyTourBook(response.data.data.datas[0]));
        });
      };
      fetchTours();
    }
  }, [id]);

  const countTypeMember = (type: string) => {
    let count = 0;
    booking.value.member.forEach((item) => {
      if (getTypeMember(item.age) === type) count++;
    });
    return count;
  };

  const totalPrice = () => {
    let total = 0;
    booking.value.member.forEach((item) => {
      if (item.age < 2 && tour) total += tour.baby;
      else if (item.age < 12 && tour) total += tour.children;
      else if (item.age >= 12 && tour) total += tour.adult;
    });
    return total;
  };

  const getTypeMember = (age: number) => {
    return age < 2 ? 'baby' : age < 12 ? 'children' : 'adult';
  };

  return (
    <>
      <Navbar />
      <div className="pt-24 px-24 flex justify-center bg-gray-100">
        <Indicator />
      </div>
      <div className="grid grid-cols-3 gap-8 px-8 bg-gray-100 pb-8">
        <Outlet />
        {tour && (
          <div className=" ">
            <div className="bg-white p-4 rounded-lg border">
              <p className="text-lg font-medium mb-2">Thông tin hóa đơn</p>
              <div className="p-3 rounded-lg border">
                <p className="font-medium">{tour.name}</p>
                <p className="font-medium text-sm">
                  Phương tiện:
                  <span className="ml-1 font-normal text-sm">
                    {tour.vehicle}
                  </span>
                </p>
                <p className="font-medium text-sm">
                  Xuất phát:
                  <span className="ml-1 font-normal text-sm">
                    {tour.departure}
                  </span>
                </p>
                <hr className="my-4" />
                <div className="grid grid-cols-2">
                  <div>
                    <span className="text-gray-500 text-sm">Bắt đầu</span>
                    <p className="font-medium text-sm">
                      {convertDateToString(tour.startDate)}
                    </p>
                    <p className=" text-sm">lúc 5:40</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Kết thúc</span>
                    <p className="font-medium text-sm">
                      {convertDateToString(tour.startDate)}
                    </p>
                    <p className=" text-sm">lúc 6:20</p>
                  </div>
                </div>
                <hr className="my-4" />
                <p className="text-sm font-medium">
                  Số lượng thành viên:
                  <br />
                  <span className="flex items-center">
                    <span className="mr-2">{booking.value.member.length}</span>{' '}
                    <UserIcon size={14} />
                  </span>
                </p>
                <p className="text-sm font-medium mt-2">Ghi chú:</p>
                <p className="text-sm font-normal">
                  {booking.value.desciption || 'Không có'}
                </p>
              </div>
              <div>
                <div className="text-sm font-medium my-2">
                  Thông tin thanh toán
                </div>
                {countTypeMember('adult') > 0 && (
                  <p className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-600">
                      Người lớn: {countTypeMember('adult')}
                    </span>
                    <span className="text-sm font-medium">
                      {CurrencyVND(countTypeMember('adult') * tour.adult)}{' '}
                      <span className="font-medium text-xs text-gray-500">
                        VNĐ
                      </span>
                    </span>
                  </p>
                )}
                {countTypeMember('children') > 0 && (
                  <p className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-600">
                      Trẻ em: {countTypeMember('children')}
                    </span>
                    <span className="text-sm font-medium">
                      {CurrencyVND(countTypeMember('children') * tour.children)}{' '}
                      <span className="font-medium text-xs text-gray-500">
                        VNĐ
                      </span>
                    </span>
                  </p>
                )}
                {countTypeMember('baby') > 0 && (
                  <p className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-600">
                      Trẻ sơ sinh: {countTypeMember('baby')}
                    </span>
                    <span className="text-sm font-medium">
                      {CurrencyVND(countTypeMember('baby') * tour.baby)}{' '}
                      <span className="font-medium text-xs text-gray-500">
                        VNĐ
                      </span>
                    </span>
                  </p>
                )}
                <hr className="my-4" />
                <p className="flex justify-between mt-2">
                  <span className="text-lg font-semibold text-green-600">
                    Tổng
                  </span>
                  <span className="text-lg font-medium">
                    {CurrencyVND(totalPrice())}{' '}
                    <span className="font-medium text-xs text-gray-500">
                      VNĐ
                    </span>
                  </span>
                </p>
                {pathname.startsWith('/booking/information/') ? (
                  <Link to={'/booking/payment'}>
                    <button className="mt-4 w-full py-2.5 text-white bg-secondary rounded-lg">
                      Đặt tour
                    </button>
                  </Link>
                ) : pathname.startsWith('/booking/payment') ? (
                  <Link to={'/booking/successful'}>
                    <button className="mt-4 w-full py-2.5 text-white bg-secondary rounded-lg">
                      Thanh toán
                    </button>
                  </Link>
                ) : (
                  <Link to={'/home'}>
                    <button className="mt-4 w-full py-2.5 text-white bg-secondary rounded-lg">
                      Trở về trang chủ
                    </button>
                  </Link>
                )}
                <p className="text-xs text-center mt-4">
                  Giá trị của hóa đơn bao gồm ăn uống và chỗ ở cho khách hàng
                  trong chuyến đi.Tham khảo tại{' '}
                  <span className="underline text-secondary">
                    thông tin tua
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LayoutBooking;
