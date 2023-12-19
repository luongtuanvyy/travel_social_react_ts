import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Comment } from '~/types/api';
import Review from '../Review';

const SlideReview = (props: { comment: Comment[] }) => {
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
          {props.comment.map((item, index) => (
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
