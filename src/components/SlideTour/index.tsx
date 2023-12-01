import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Tour as TourInterface } from '~/types/entity';
import Tour from '../Tour';

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
          dragConstraints={{ left: 0, right: -width }}
          className="flex space-x-4 py-4"
        >
          {tours.map((item, index) => (
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
