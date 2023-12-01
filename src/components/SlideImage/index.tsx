import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const DATA_TOUR = [
  {
    image:
      'https://images.pexels.com/photos/19068893/pexels-photo-19068893/free-photo-of-da-su-i-thung-lung-d-a-ch-t.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  },
  {
    image:
      'https://images.pexels.com/photos/19068893/pexels-photo-19068893/free-photo-of-da-su-i-thung-lung-d-a-ch-t.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  },
  {
    image:
      'https://images.pexels.com/photos/16776159/pexels-photo-16776159/free-photo-of-thien-nhien-b-bi-n-n-c-da.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    image:
      'https://images.pexels.com/photos/3284167/pexels-photo-3284167.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    image:
      'https://images.pexels.com/photos/3284167/pexels-photo-3284167.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    image:
      'https://images.pexels.com/photos/2832026/pexels-photo-2832026.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    image:
      'https://images.pexels.com/photos/2092828/pexels-photo-2092828.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const SlideImage = () => {
  const [width, setWidth] = useState(0);
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(slider.current?.scrollWidth! - slider.current?.offsetWidth!);
  }, []);

  return (
    <div className="slider">
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
          {DATA_TOUR.map((item, index) => (
            <motion.div key={index} className="cursor-grab">
              <img
                className="rounded-lg select-none pointer-events-none w-full h-28 object-cover min-w-[200px]"
                src={item.image}
                alt=""
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SlideImage;
