import React from 'react';
import { convertDate } from '~/service/DateService';
import { TypeReview } from '../SlideReview';
import StarArray from '../Star';

type ReviewProps = {
  review: TypeReview;
};

const Review = (props: ReviewProps) => {
  const { review } = props;
  const [readMore, setReadMore] = React.useState(false);
  return (
    <div className="rounded-lg border min-h-[250px] min-w-[400px] p-4">
      <div className="flex items-center mb-2">
        <img
          className="w-10 h-10 me-4 rounded-full"
          src={review.avatar}
          alt=""
        />
        <div className="font-medium dark:text-white">
          <p>{review.name}</p>
          <p>{convertDate(review.date)}</p>
        </div>
      </div>
      <footer className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <div>
          <span>
            <StarArray star={review.rate} />
          </span>
          <span className="text-sm font-medium">{review.content}</span>
        </div>
      </footer>
      <p
        className={`${
          readMore ? '' : 'line-clamp-3'
        } text-xs text-gray-500 dark:text-gray-400`}
      >
        {review.description}
      </p>
      <button
        onClick={() => setReadMore((prev) => !prev)}
        className="text-xs text-secondary"
      >
        {readMore ? 'Thu gọn' : 'Đọc thêm...'}
      </button>

      <aside>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          19 people found this helpful
        </p>
        <div className="flex items-center mt-3">
          <button>Like</button>
        </div>
      </aside>
    </div>
  );
};

export default Review;
