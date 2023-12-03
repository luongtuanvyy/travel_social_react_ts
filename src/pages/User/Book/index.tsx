import { Link, Outlet, useLocation } from 'react-router-dom';
import { UserIcon } from '~/assets/svg';
import Navbar from '~/components/Navbar';
import Indicator from './components/Indicators';

const LayoutBooking = () => {
  const pathname = useLocation().pathname;
  return (
    <>
      <Navbar />
      <div className="pt-24 px-24 flex justify-center bg-gray-100">
        <Indicator />
      </div>
      <div className="grid grid-cols-3 gap-8 px-8 bg-gray-100 pb-8">
        {/* <div className="col-span-2"> */}
        <Outlet />
        {/* </div> */}
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
              {pathname === '/booking/information' ? (
                <Link to={'/booking/payment'}>
                  <button className="mt-4 w-full py-2.5 text-white bg-secondary rounded-lg">
                    Đặt tour
                  </button>
                </Link>
              ) : pathname === '/booking/payment' ? (
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
                <span className="underline text-secondary">thông tin tua</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutBooking;
