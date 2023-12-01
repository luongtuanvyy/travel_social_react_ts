import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { convertDate } from '~/service/DateService';
import StarArray from '../Star';
import Review from '../Review';

const DATA_REVIEW = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    avatar:
      'https://i.pinimg.com/564x/05/54/5c/05545c4002f0b443220d2615e9bdc92c.jpg',
    date: '20-10-2021',
    content: 'Tour rất tuyệt vời',
    description:
      'This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.',
    rate: 5,
    liked: 19,
  },
  {
    id: 2,
    name: 'Nguyễn Văn B',
    avatar:
      'https://i.pinimg.com/236x/68/7e/c2/687ec272d850192e1bab100929a014f4.jpg',
    date: '20-10-2021',
    content: 'Tour rất tuyệt vời',
    description:
      'This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.',
    rate: 3,
    liked: 19,
  },
  {
    id: 3,
    name: 'Nguyễn Văn C',
    avatar:
      'https://i.pinimg.com/236x/c7/8d/ec/c78deccc5142663449ccfea829944eb9.jpg',
    date: '20-10-2021',
    content: 'Tour rất tuyệt vời',
    description:
      'This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.',
    rate: 4,
    liked: 19,
  },
  {
    id: 4,
    name: 'Nguyễn Văn D',
    avatar:
      'https://i.pinimg.com/236x/74/ad/fd/74adfdb5ae590126f6ae299c72594f9b.jpg',
    date: '20-10-2021',
    content: 'Tour rất tuyệt vời',
    description:
      'This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.',
    rate: 1,
    liked: 19,
  },
];

export type TypeReview = {
  id: number;
  name: string;
  avatar: string;
  date: string;
  content: string;
  description: string;
  rate: number;
  liked: number;
};

const SlideReview = () => {
  const [width, setWidth] = useState(0);
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(slider.current?.scrollWidth! - slider.current?.offsetWidth!);
  }, []);
  return (
    <div>
      <motion.div
        ref={slider}
        className="overflow-hidden"
        // whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag={'x'}
          dragConstraints={{ right: 0, left: -width }}
          className="flex space-x-2 pt-2"
        >
          {DATA_REVIEW.map((item, index) => (
            <motion.div key={index} className="cursor-grab">
              <Review review={item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SlideReview;
