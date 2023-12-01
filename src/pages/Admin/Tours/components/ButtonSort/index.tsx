import React from 'react';
import { ArrowDown, ArrowUp } from '~/assets/svg';

const ButtonSort = () => {
  return (
    <button className="text-black flex flex-col ml-2">
      <ArrowUp />
      <ArrowDown />
    </button>
  );
};

export default ButtonSort;
