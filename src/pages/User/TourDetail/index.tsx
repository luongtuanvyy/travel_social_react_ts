import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TourApi } from '~/api/TourApi';
import { StarNoneFill, Tick } from '~/assets/svg';
import Star from '~/assets/svg/Star';
import MapLeaflet from '~/components/Map';
import Navbar from '~/components/Navbar';
import SlideImage from '~/components/SlideImage';
import SlideReview from '~/components/SlideReview';
import { Comment } from '~/types/api';
import { Tour } from '~/types/entity';

type Rate = {
  star: number;
  percent: number;
};

const DATA_RATE: Rate[] = [
  {
    star: 5,
    percent: 70,
  },
  {
    star: 4,
    percent: 20,
  },
  {
    star: 3,
    percent: 10,
  },
  {
    star: 2,
    percent: 0,
  },
  {
    star: 1,
    percent: 0,
  },
];

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState<Tour>();
  const [, setRating] = useState(0);
  const [hoverRating,] = useState(0);
  const [comment, setComment] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        await TourApi.getTourById(parseInt(id) ?? 8)
          .then((response) => {
            setTour(response.data.data.datas[0]);
          })
          .catch((err) => console.log(err));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        await TourApi.getComment(parseInt(id))
          .then((response) => {
            setComment(response.data.data.datas);
          })
          .catch((err) => console.log(err));
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      {tour && (
        <div className="grid grid-cols-3 pl-8 gap-8 pt-0">
          <div className="col-span-2 bg-white pt-24 ">
            <div className="bg-white">
              <div className="border p-2 rounded-lg mb-4">
                <div className="">
                  <img
                    className="object-cover w-full h-96 rounded-lg"
                    src={tour.image}
                    alt=""
                  />
                </div>
                <div className="">
                  <SlideImage />
                </div>
              </div>

              <div className=" p-2">
                <div className="grid grid-cols-3">
                  <div className="col-span-2">
                    <p className="font-medium text-xl mb-4">{tour.name}</p>
                    <p className="text-gray-500 text-sm mb-4">
                      <span className="font-medium">Nơi khởi hành:</span>{' '}
                      {tour.departure}
                    </p>
                    <div className="grid grid-cols-3">
                      <p className="text-sm text-gray-500">
                        <span className="font-bold text-gray-900 mb-2">
                          Thời gian
                        </span>
                        <br />
                        {tour.startDate} - {tour.endDate}
                      </p>
                      <p className="text-sm text-gray-500">
                        <span className="font-bold text-gray-900 mb-2">
                          Phương tiện
                        </span>
                        <br />
                        {tour.vehicle}
                      </p>
                      <p className="text-sm text-gray-500">
                        <span className="font-bold text-gray-900 mb-2">
                          Số lượng người
                        </span>
                        <br />
                        {tour.registered} / {tour.size} người
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-end">
                    <div className="text-end text-xl font-medium mb-4">
                      <p className="text-sm line-through">
                        {/* {CurrencyVND(tour.)} VND */}
                      </p>
                      <p className="text-red-600">
                        {/* {CurrencyVND(tour.price)} VND */}
                      </p>
                    </div>
                    <div>
                      <button className="px-5 py-2 border border-gray-700 rounded-lg">
                        <Link to={`/booking/information/${tour.id}`}>
                          Đặt ngay
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-lg font-medium mb-2">Mô tả</p>
                  <p className="text-sm text-gray-600">{tour.description}</p>
                </div>
              </div>

              <div className="mt-4 border p-2 rounded-lg">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      className="w-16 h-16 rounded-full"
                      src="https://i.pinimg.com/236x/43/9e/79/439e7900cca1116ca004204cd902354b.jpg"
                      alt=""
                    />
                    <div className="absolute bottom-0 right-0 bg-white rounded-full">
                      <Tick />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Travel Loka</p>
                    <p className="text-xs text-gray-500">
                      12/34, Phường Đa Kao, Quận 1, TP HCM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-2">
                <p className="font-medium text-lg mb-2">
                  Đánh giá của người dùng
                </p>
                <div className="flex items-center space-x-10">
                  <div>
                    <div className="w-44 h-44 bg-setext-secondary rounded-full border-8 border-secondary text-secondary  flex justify-center items-center">
                      <p className="text-4xl font-medium text-secondary ">
                        4.6
                      </p>
                    </div>
                  </div>
                  <div className="grow">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, index) => (
                            <Star key={index} />
                          ))}
                      </div>
                      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                        4.95
                      </p>
                      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                        out of
                      </p>
                      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      1,745 global ratings
                    </p>
                    <div>
                      {DATA_RATE.map((item, index) => (
                        <div key={index} className="flex items-center mt-2">
                          <a
                            href="#"
                            className="text-sm font-medium text-secondary  dark:text-secondary  hover:underline"
                          >
                            {item.star} sao
                          </a>
                          <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                            <div
                              className="h-2 bg-secondary rounded"
                              style={{ width: `${item.percent}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {item.percent}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-lg font-medium">Nội dung đánh giá</p>
                <SlideReview comment={comment} />
              </div>

              <div className="my-4 b">
                <p className="mb-2 text-lg font-medium">
                  Viết đánh giá của bạn
                </p>
                <form className="border p-2 rounded-lg">
                  <div className="text-sm font-medium mb-4 flex items-center">
                    Đánh giá dựa trên số sao:
                    <div className="flex ml-4">
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <div key={index}>
                            <label
                              htmlFor=""
                              onClick={() => setRating(index + 1)}
                            >
                              {/* <input
                              type="radio"
                              name="rating"
                            /> */}
                              <p onClick={() => setRating(index + 1)}>
                                {index < hoverRating ? (
                                  <Star size={15} />
                                ) : (
                                  <StarNoneFill size={15} />
                                )}
                              </p>
                            </label>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      id="first_name"
                      className="bg-white border pl-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Tiêu đề"
                      required
                    />
                  </div>
                  <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
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
                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                      <button
                        type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-secondary rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                      >
                        Đánh giá
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="pt-24 ">
            <div>
              <div className="p-2 border rounded-lg">
                <MapLeaflet tour={tour} />
              </div>
              <div className="mt-4">
                <p className="text-lg font-medium">Tour quanh đây</p>
                <p className="text-xs text-gray-500">
                  Tour dưới đây có cùng điểm đến với lựa chọn của bạn
                </p>
              </div>
              <div className="mt-4">
                <p className="text-lg font-medium">Tour tương tự</p>
                <p className="text-xs text-gray-500">
                  Tour dưới đây có cùng địa điểm bắt đầu và kết thúc với lựa
                  chọn của bạn
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default TourDetail;
