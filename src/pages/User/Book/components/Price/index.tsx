import React from 'react';
import { CurrencyVND } from '~/service/CurrentService';
import { getAgeBefore } from '~/service/DateService';

const DATA_PRICE = [
  {
    name: 'Trẻ sơ sinh',
    description: 'Dưới 2 tuổi',
    date: `Sinh trước ${getAgeBefore(2)}`,
  },
  {
    name: 'Trẻ em',
    description: 'Tính từ 2 đến 12 tuổi',
    date: `Sinh sau ${getAgeBefore(12)}`,
  },
  {
    name: 'Người lớn',
    description: 'Trên 12 tuổi',
    date: `Sinh trước ${getAgeBefore(12)}`,
  },
];

type Props = {
  adult: number;
  children: number;
  baby: number;
};

const Price = (props: Props) => {
  const { adult, children, baby } = props;
  const [detail, setDetail] = React.useState(false);
  return (
    <div>
      {' '}
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
                Bảng giá dưới đây được tính theo độ tuổi của các thành viên. Vui
                lòng nhập đúng ngày tháng năm sinh của các thành viên
              </p>
            </div>
            <div className={`grid grid-cols-3 gap-4 ${detail ? '' : 'hidden'}`}>
              {DATA_PRICE.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 mx-auto w-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >
                  <h3 className="mb-2 text-2xl font-semibold">{item.name}</h3>
                  <p className="font-medium text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                  <span className="text-xs mb-4 text-gray-500">
                    {item.date}
                  </span>
                  <div className="flex justify-center items-baseline ">
                    <span className=" text-xl font-medium">
                      {CurrencyVND(
                        item.name === 'Trẻ sơ sinh'
                          ? baby
                          : item.name === 'Trẻ em'
                          ? children
                          : adult,
                      )}
                      <span className="text-sm">VNĐ</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Price;
