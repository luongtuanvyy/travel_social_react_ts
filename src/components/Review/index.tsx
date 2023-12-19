import React from 'react';
import { Comment } from '~/types/api';
import StarArray from '../Star';

type ReviewProps = {
  review: Comment;
};

const Review = (props: ReviewProps) => {
  const { review } = props;
  const [readMore, setReadMore] = React.useState(false);
  return (
    <div className="rounded-lg border min-h-[20px] min-w-[400px] p-4">
      <div className="flex items-center mb-2">
        <img
          className="w-10 h-10 me-4 rounded-full"
          src={review.avatar}
          alt=""
        />
        <div className="font-medium dark:text-white">
          <p>{review.accName}</p>
          {/* <p>{convertDate(review.)}</p> */}
        </div>
      </div>
      <footer className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <div>
          <span>
            <StarArray star={review.rating} />
          </span>
          {/* <span className="text-sm font-medium">{review.comment}</span> */}
        </div>
      </footer>
      <p
        className={`${
          readMore ? '' : 'line-clamp-3'
        } text-xs text-gray-500 dark:text-gray-400`}
      >
        {review.comment}
      </p>
      <button
        onClick={() => setReadMore((prev) => !prev)}
        className="text-xs text-secondary"
      >
        {readMore ? 'Thu gọn' : 'Đọc thêm...'}
      </button>
    </div>
  );
};

export default Review;
