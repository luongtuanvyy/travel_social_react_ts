import { type } from 'os';
import React from 'react';
import { Clock, HeartBorder } from '~/assets/svg';
import Heart from '~/assets/svg/Heart';
import Star from '~/assets/svg/Star';
import User from '~/assets/svg/User';

export interface TourType {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  image: string;
  dateCreated?: Date;
  size?: number;
  register?: number;
}

type TourProps = {
  tour: TourType;
};

const Tour = (props: TourProps) => {
  return (
    <div className="shadow-lg p-2 rounded-lg w-72">
      <div className="h-32 rounded-lg w-full relative">
        <img
          className="select-none pointer-events-none object-cover h-32 rounded-lg w-full"
          src="https://images.pexels.com/photos/19068893/pexels-photo-19068893/free-photo-of-da-su-i-thung-lung-d-a-ch-t.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <div className="absolute top-2 right-2 bg-pink-300 p-0.5 px-1 rounded-lg">
          <p className="text-xs font-medium text-pink-700">30%</p>
        </div>
      </div>
      <div className="mt-2 p-2 px-3">
        <div className="flex items-center mb-3">
          <p className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">
              Đà Lạt - Nha Trang
            </span>

            <span className="text-xs font-medium text-gray-500">
              4 ngày 3 đêm
            </span>
          </p>
          <div className="grow flex justify-end text-gray-400">
            <HeartBorder />
          </div>
        </div>
        <div className="flex items-center mb-2">
          <p className="flex flex-col">
            <span className="text-xs font-normal text-gray-400">Giá</span>
            <span className="text-lg font-medium mb-0">
              2.000.000 <span>VNĐ</span>
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
            <User /> <span className="ml-1 text-gray-500">3/4 người</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
