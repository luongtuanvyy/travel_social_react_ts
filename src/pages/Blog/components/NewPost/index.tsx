import React from 'react';
import { useAppSelector } from '~/app/hook';

const NewPost = (props: { handleNewPost: (value: boolean) => void }) => {
  const user = useAppSelector((state) => state.auth.user);
  const { handleNewPost } = props;

  return (
    <div className="w-full bg-white p-4 rounded-2xl">
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full" src={user?.avatar} alt="" />
        <button
          onClick={() => handleNewPost(true)}
          className="w-full h-12 ml-2 rounded-full border flex items-center pl-4"
        >
          <p className="text-sm font-medium text-gray-500">
            Viết bài đánh giá về địa điểm, chuyến đi
          </p>
        </button>
      </div>
    </div>
  );
};

export default NewPost;
