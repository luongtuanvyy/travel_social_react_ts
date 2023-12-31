import { Link } from 'react-router-dom';
import { Clock, HeartBorder } from '~/assets/svg';
import Star from '~/assets/svg/Star';
import User from '~/assets/svg/User';
import { CurrencyVND } from '~/service/CurrentService';
import { calculateDaysAndNights } from '~/service/DateService';
import { Tour as TourInterface } from '~/types/entity';

type TourProps = {
  tour: TourInterface;
};

const Tour = (props: TourProps) => {
  const { tour } = props;
  const urlTourDetail = `/tours/${tour.id}`;

  return (
    <div className="shadow-lg p-2 rounded-lg w-72 min-w-[288px]">
      <div className="h-32 rounded-lg w-full relative">
        <img
          className="select-none pointer-events-none object-cover h-32 rounded-lg w-full"
          src={tour.image}
          alt=""
        />
        <div className="absolute top-2 right-2 bg-pink-300 p-0.5 px-1 rounded-lg">
          <p className="text-xs font-medium text-pink-700">30%</p>
        </div>
      </div>
      <div className="mt-2 p-2 px-3">
        <div className="flex items-center mb-3">
          <p className="flex flex-col">
            <Link
              to={urlTourDetail}
              className="text-sm font-medium text-gray-700"
            >
              {tour.name}
            </Link>

            <span className="text-xs font-medium text-gray-500">
              {calculateDaysAndNights(tour.startDate, tour.endDate)}
            </span>
          </p>
          <div className="grow flex justify-end text-gray-400">
            <button onClick={() => alert('a')}>
              <HeartBorder />
            </button>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <p className="flex flex-col">
            <span className="text-xs font-normal text-gray-400">Giá</span>
            <span className="text-lg font-medium mb-0">
              {CurrencyVND(tour.adult)} <span>VNĐ</span>
            </span>
          </p>
          <div className="grow flex flex-col items-end">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} />
              ))}
            </div>
            <p className="text-xs text-gray-500">4.3 (36)</p>
          </div>
        </div>
        <div className="flex space-x-1">
          <div className="text-xs text-gray-500 flex items-center">
            <Clock /> <span className="ml-1">Vừa đăng</span>
          </div>
          <div className="text-xs flex items-center text-blue-500">
            <User size={14} strokeWidth={1} />{' '}
            <span className="ml-1 text-gray-500">3/4 người</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
