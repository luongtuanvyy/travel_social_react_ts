import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Tour, { TourType } from '../Tour';
import { Tour as TourInterface } from '~/types/entity';

const DATA_TOUR: TourType[] = [
  {
    id: 1,
    name: 'Đà Lạt - Nha Trang',
    description: '4 ngày 3 đêm',
    price: 2000000,
    discount: 30,
    dateCreated: new Date('2021-08-01T00:00:00.000Z'),
    rating: 4,
    image:
      'https://images.pexels.com/photos/19068893/pexels-photo-19068893/free-photo-of-da-su-i-thung-lung-d-a-ch-t.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  },
  {
    id: 2,
    name: 'Sài Gòn - Nha Trang',
    description: '4 ngày 3 đêm',
    price: 2000000,
    discount: 30,
    dateCreated: new Date('2021-08-01T00:00:00.000Z'),
    rating: 4,
    image:
      'https://images.pexels.com/photos/16776159/pexels-photo-16776159/free-photo-of-thien-nhien-b-bi-n-n-c-da.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Hà Nội - Nha Trang',
    description: '4 ngày 3 đêm',
    price: 2000000,
    discount: 30,
    dateCreated: new Date('2021-08-01T00:00:00.000Z'),
    rating: 4,
    image:
      'https://images.pexels.com/photos/3284167/pexels-photo-3284167.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'Đà Lạt - Nha Trang',
    description: '4 ngày 3 đêm',
    price: 2000000,
    discount: 30,
    dateCreated: new Date('2021-08-01T00:00:00.000Z'),
    rating: 4,
    image:
      'https://images.pexels.com/photos/3284167/pexels-photo-3284167.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    name: 'Đà Lạt - Nha Trang',
    description: '4 ngày 3 đêm',
    price: 2000000,
    discount: 30,
    dateCreated: new Date('2021-08-01T00:00:00.000Z'),
    rating: 4,
    image:
      'https://images.pexels.com/photos/2832026/pexels-photo-2832026.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    name: 'Đà Lạt - Nha Trang',
    description: '4 ngày 3 đêm',
    price: 2000000,
    discount: 30,
    dateCreated: new Date('2021-08-01T00:00:00.000Z'),
    rating: 4,
    image:
      'https://images.pexels.com/photos/2092828/pexels-photo-2092828.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

type SlideTourType = {
  tours: TourInterface[];
  paddingLeft?: number;
};

const SlideTour = (props: SlideTourType) => {
  const [width, setWidth] = useState(0);
  const { paddingLeft, tours } = props;
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(slider.current?.scrollWidth! - slider.current?.offsetWidth!);
  }, []);

  return (
    <div className="slider">
      <motion.div
        ref={slider}
        className="overflow-hidden"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag={'x'}
          dragConstraints={{ right: 0, left: -width }}
          className="flex space-x-4 py-4"
        >
          {DATA_TOUR.map((item, index) => (
            <motion.div
              key={index}
              className={` ${paddingLeft ?? 'pl-20'} cursor-grab`}
            >
              <Tour tour={item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SlideTour;
