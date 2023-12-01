import React from 'react';
import { StarNoneFill } from '~/assets/svg';
import Star from '~/assets/svg/Star';

const StarArray = (props: { star: number; size?: number }) => {
  const { star, size } = props;

  return (
    <div className="flex">
      {Array(star)
        .fill(0)
        .map((_, index) => (
          <Star key={index} size={size} />
        ))}
      {Array(5 - star)
        .fill(0)
        .map((_, index) => (
          <StarNoneFill key={index} size={size} />
        ))}
    </div>
  );
};

export default StarArray;
