import { useAppSelector } from '~/app/hook';
import { More } from '~/assets/svg';

const History = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="h-screen grid grid-cols-4 bg-blue-900 ml-[76px] mt-[76px]">
      <div className="h-sreen bg-gray-600 border border-r-2 p-5 sticky-top">
        <div className="p-5 bg-gray-100 rounded-xl mb-5">Bình luận</div>
        <div className="p-5 bg-gray-100 rounded-xl mb-5">Bày tỏ cảm xúc</div>
        <div className="p-5 bg-gray-100 rounded-xl mb-5">Bài viết đã chặn</div>
        <div className="p-5 bg-gray-100 rounded-xl mb-5">Đánh giá bài viết</div>
        <div className="p-5 bg-gray-100 rounded-xl mb-5">Theo dõi</div>
        <div className="p-5 bg-gray-100 rounded-xl mb-5">Đặt tour</div>
      </div>
      <div className="col-span-3 h-sreen bg-gray-600 p-5">
        <div className="px-5 bg-gray-200 p-5 rounded-xl mb-4">
          <p className="mb-2">13 tháng 1, 2023</p>
          <div className="bg-gray-200 overflow-hidden my-2 flex">
            <div className="w-16 min-w-[64px] flex justify-center items-center">
              <img
                className="w-16 rounded-full h-16"
                src={user?.avatar}
                alt=""
              />
            </div>
            <div className="ml-2">
              <p>
                <a className="text-sm font-medium" href="">
                  {user?.name}
                </a>
                <span className="text-sm ml-1">
                  đã bày tỏ cảm xúc về 1 bài viết
                </span>
              </p>
              <p className="text-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora aspernatur dicta quidem quas corporis minima quos
                deserunt quam, aut assumenda, ut dolores quod eum placeat beatae
                porro, reprehenderit labore laborum!
              </p>
              <p className="text-xs text-end mt-1 mr-3">23:12</p>
            </div>
            <div className="flex justify-center items-center">
              <More />
            </div>
          </div>
          <hr />
          <div className="bg-gray-200 overflow-hidden my-2 flex">
            <div className="w-16 min-w-[64px] flex justify-center items-center">
              <img
                className="w-16 rounded-full h-16"
                src={user?.avatar}
                alt=""
              />
            </div>
            <div className="ml-2">
              <p>
                <a className="text-sm font-medium" href="">
                  {user?.name}
                </a>
                <span className="text-sm ml-1">
                  đã bày tỏ cảm xúc về 1 bài viết
                </span>
              </p>
              <p className="text-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora aspernatur dicta quidem quas corporis minima quos
                deserunt quam, aut assumenda, ut dolores quod eum placeat beatae
                porro, reprehenderit labore laborum!
              </p>
              <p className="text-xs text-end mt-1 mr-3">23:12</p>
            </div>
            <div className='flex justify-center items-center'>
              <More />
            </div>
          </div>
          <hr />
          <div className="bg-gray-200 overflow-hidden mt-2 flex">
            <div className="w-16 min-w-[64px] flex justify-center items-center">
              <img
                className="w-16 rounded-full h-16"
                src={user?.avatar}
                alt=""
              />
            </div>
            <div className="ml-2">
              <p>
                <a className="text-sm font-medium" href="">
                  {user?.name}
                </a>
                <span className="text-sm ml-1">
                  đã bày tỏ cảm xúc về 1 bài viết
                </span>
              </p>
              <p className="text-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora aspernatur dicta quidem quas corporis minima quos
                deserunt quam, aut assumenda, ut dolores quod eum placeat beatae
                porro, reprehenderit labore laborum!
              </p>
              <p className="text-xs text-end mt-1 mr-3">23:12</p>
            </div>
            <div className='flex justify-center items-center'>
              <More />
            </div>
          </div>
        </div>
        <div className="px-5 bg-gray-200 p-5 rounded-xl mb-4">
          <p className="mb-2">13 tháng 1, 2023</p>
          <div className="bg-gray-200 overflow-hidden my-2 flex">
            <div className="w-16 min-w-[64px] flex justify-center items-center">
              <img
                className="w-16 rounded-full h-16"
                src={user?.avatar}
                alt=""
              />
            </div>
            <div className="ml-2">
              <p>
                <a className="text-sm font-medium" href="">
                  {user?.name}
                </a>
                <span className="text-sm ml-1">
                  đã bày tỏ cảm xúc về 1 bài viết
                </span>
              </p>
              <p className="text-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora aspernatur dicta quidem quas corporis minima quos
                deserunt quam, aut assumenda, ut dolores quod eum placeat beatae
                porro, reprehenderit labore laborum!
              </p>
              <p className="text-xs text-end mt-1 mr-3">23:12</p>
            </div>
            <div className='flex justify-center items-center'>
              <More />
            </div>
          </div>
        </div>
        <div className="px-5 bg-gray-200 p-5 rounded-xl mb-4">
          <p className="mb-2">13 tháng 1, 2023</p>
          <div className="bg-gray-200 overflow-hidden my-2 flex">
            <div className="w-16 min-w-[64px] flex justify-center items-center">
              <img
                className="w-16 rounded-full h-16"
                src={user?.avatar}
                alt=""
              />
            </div>
            <div className="ml-2">
              <p>
                <a className="text-sm font-medium" href="">
                  {user?.name}
                </a>
                <span className="text-sm ml-1">
                  đã bày tỏ cảm xúc về 1 bài viết
                </span>
              </p>
              <p className="text-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora aspernatur dicta quidem quas corporis minima quos
                deserunt quam, aut assumenda, ut dolores quod eum placeat beatae
                porro, reprehenderit labore laborum!
              </p>
              <p className="text-xs text-end mt-1 mr-3">23:12</p>
            </div>
            <div className='flex justify-center items-center'>
              <More />
            </div>
          </div>
          <hr />
          <div className="bg-gray-200 overflow-hidden mt-2 flex">
            <div className="w-16 min-w-[64px] flex justify-center items-center">
              <img
                className="w-16 rounded-full h-16"
                src={user?.avatar}
                alt=""
              />
            </div>
            <div className="ml-2">
              <p>
                <a className="text-sm font-medium" href="">
                  {user?.name}
                </a>
                <span className="text-sm ml-1">
                  đã bày tỏ cảm xúc về 1 bài viết
                </span>
              </p>
              <p className="text-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora aspernatur dicta quidem quas corporis minima quos
                deserunt quam, aut assumenda, ut dolores quod eum placeat beatae
                porro, reprehenderit labore laborum!
              </p>
              <p className="text-xs text-end mt-1 mr-3">23:12</p>
            </div>
            <div className='flex justify-center items-center'>
              <More />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
