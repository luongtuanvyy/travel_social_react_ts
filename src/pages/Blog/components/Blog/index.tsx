import { memo, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '~/app/hook';
import { More } from '~/assets/svg';
import Heart from '~/assets/svg/Heart';
import { convertDate, convertDateToFullString } from '~/service/DateService';
import { cloudinaryToImage } from '~/service/ImageService';
import { Blog as BlogType } from '~/types/entity';
import { BlogActions } from '../../../../slice/BlogSlice';
import ImageBlog from '../Image';
import './index.css';
import { ActionBlogApi } from '~/api/ActionApi';

type BlogProps = {
  blog: BlogType;
  setModalImage: (value: boolean) => void;
};

const Blog = (props: BlogProps) => {
  const { blog, setModalImage } = props;
  const dispatch = useAppDispatch();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [hoverShowProfile, setHoverShowProfile] = useState(false);
  const hoverProfile = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isMouseOver) {
      hoverProfile.current = setTimeout(() => {
        setHoverShowProfile(true);
      }, 500);
    } else {
      clearTimeout(hoverProfile.current!);
      setHoverShowProfile(false);
    }
  }, [isMouseOver]);

  const handleLike = async () => {
    try {
      await ActionBlogApi.like({ id: blog.id })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {});
    } catch (error) {}
  };

  const setBlog = (image: string) => {
    dispatch(BlogActions.modifyBlog({ blog, image }));
    setModalImage(true);
    console.log(image);
  };

  return (
    <div className="mb-5 bg-white rounded-2xl relative">
      {blog.blogid == 'blogid 1' && (
        <a
          href="#"
          className={`flex flex-row rounded-t-2xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
        >
          <div className="image flex justify-center items-center pl-5">
            <img
              className="object-cover h-[40px] w-[40px] rounded-full"
              src={blog.avatar}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between p-5 leading-normal">
            <h5 className="text-sm font-bold tracking-tight text-gray-700 dark:text-white">
              {blog.name}
            </h5>
            <p className="text-xs font-normal text-gray-700 dark:text-gray-400">
              {blog.createdAt.toString()}
            </p>
          </div>
        </a>
      )}
      <div
        className={`blog rounded-2xl  bg-white overflow-hidden ${
          blog.blogid == 'blogid 1' && 'm-4 my-1 border border-gray-200'
        }`}
      >
        <div
          className={`user grid grid-cols-1 ${
            blog.blogid == 'blogid 1' ? 'mt-5' : 'mt-2.5'
          }`}
        >
          <div className={` ${blog.blogid == 'blogid 1' && 'order-2'}`}>
            <div className="flex flex-row rounded-t-lg bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="image flex justify-center items-center pl-5">
                <img
                  onMouseEnter={() => setIsMouseOver(true)}
                  onMouseLeave={() => setIsMouseOver(false)}
                  className="object-cover h-[40px] w-[40px] rounded-full"
                  src={blog.avatar}
                  alt=""
                />
              </div>
              <div className="flex flex-col relative justify-between p-3 leading-normal">
                <h5
                  onMouseEnter={() => setIsMouseOver(true)}
                  onMouseLeave={() => setIsMouseOver(false)}
                  className="text-sm font-bold tracking-tight text-gray-700 dark:text-white"
                >
                  {blog.name}
                </h5>
                <p className="text-xs font-normal text-gray-700 dark:text-gray-400">
                  {convertDate(blog.createdAt)}
                </p>
                <div className="absolute hidden bg-gray-100 border bottom-0 translate-y-full -translate-x-12 rounded-lg">
                  <p className="text-xs py-1.5 px-5 whitespace-nowrap">
                    {convertDateToFullString(blog.createdAt)}
                  </p>
                </div>
              </div>
            </div>
            <p className="px-5">{blog.description}</p>
          </div>
          <div className={`image px-5 `}>
            <div
              className={`rounded-lg dark:border-gray-600 ${
                cloudinaryToImage(blog.cloudinaryId).length > 0 && 'h-96 mb-4'
              } mt-2 mb-2`}
            >
              <ImageBlog
                image={cloudinaryToImage(blog.cloudinaryId)}
                setBlog={setBlog}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {blog.totalComment > 0 || blog.totalLike > 0 || blog.totalShare > 0 ? (
          <div className="grid grid-cols-2 px-5 py-1 pb-3">
            <div className="flex items-center">
              {blog.totalLike > 0 && (
                <>
                  <Heart />
                  <span className="ml-2 text-xs font-medium">
                    {blog.totalLike} lượt thích
                  </span>
                </>
              )}
            </div>
            <div className="flex items-center justify-end">
              {blog.totalComment > 0 && (
                <span className="mx-2 text-xs font-medium">
                  {blog.totalComment} bình luận
                </span>
              )}
              {blog.totalShare > 0 && (
                <span className="ml-2 text-xs font-medium">
                  {blog.totalShare} chia sẻ
                </span>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="mx-5 reaction grid grid-cols-3 justify-center border-t-2 border-b-2 border-gray-100">
          <label
            onClick={handleLike}
            className="px-6 py-3 flex text-sm font-medium text-gray-900 bg-white rounded-l-lg focus:z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <div className="ui-like">
              <input type="checkbox" defaultChecked={blog.like} />
              <div className="like">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill=""
                >
                  <g strokeWidth="0" id="SVGRepo_bgCarrier" />
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    id="SVGRepo_tracerCarrier"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z" />
                  </g>
                </svg>
              </div>
            </div>
            <span className="pl-2">Thích</span>
          </label>
          <button
            type="button"
            className="px-4 py-3 flex justify-center text-sm font-medium text-gray-900 bg-white focus:z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3259 5.77772C20 6.78661 20 8.19108 20 11C20 13.8089 20 15.2134 19.3259 16.2223C19.034 16.659 18.659 17.034 18.2223 17.3259C17.3409 17.9148 16.1577 17.9892 14 17.9986V18L12.8944 20.2111C12.5259 20.9482 11.4741 20.9482 11.1056 20.2111L10 18V17.9986C7.8423 17.9892 6.65907 17.9148 5.77772 17.3259C5.34096 17.034 4.96596 16.659 4.67412 16.2223C4 15.2134 4 13.8089 4 11C4 8.19108 4 6.78661 4.67412 5.77772C4.96596 5.34096 5.34096 4.96596 5.77772 4.67412C6.78661 4 8.19108 4 11 4H13C15.8089 4 17.2134 4 18.2223 4.67412C18.659 4.96596 19.034 5.34096 19.3259 5.77772Z"
                stroke="#33363F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 9L15 9"
                stroke="#33363F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 13H12"
                stroke="#33363F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="pl-2">Bình luận</span>
          </button>
          <button
            type="button"
            className="px-6 py-2 pr-6 flex justify-end text-sm font-medium text-gray-900 bg-white rounded-r-md focus:z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.2978 5.68315C17.9189 5.75055 17.3817 5.92686 16.5215 6.21358L10.0305 8.37724C9.20312 8.65304 8.61936 8.84795 8.19945 9.01179C7.99178 9.09282 7.84715 9.15754 7.74658 9.2106C7.66139 9.25554 7.63077 9.2803 7.62895 9.28156C7.22309 9.67446 7.22309 10.3255 7.62895 10.7184C7.63077 10.7197 7.66139 10.7444 7.74658 10.7894C7.84715 10.8424 7.99178 10.9072 8.19945 10.9882C8.61936 11.152 9.20312 11.3469 10.0305 11.6227C10.0495 11.6291 10.0683 11.6353 10.087 11.6415C10.3604 11.7325 10.6004 11.8123 10.8214 11.9292C11.3539 12.2108 11.7892 12.6461 12.0708 13.1786C12.1877 13.3996 12.2675 13.6396 12.3585 13.913C12.3647 13.9317 12.3709 13.9505 12.3773 13.9695C12.6531 14.7969 12.848 15.3806 13.0118 15.8005C13.0928 16.0082 13.1576 16.1528 13.2106 16.2534C13.2556 16.3386 13.2803 16.3692 13.2816 16.371C13.6745 16.7769 14.3255 16.7769 14.7184 16.371C14.7197 16.3692 14.7444 16.3386 14.7894 16.2534C14.8424 16.1528 14.9072 16.0082 14.9882 15.8005C15.152 15.3806 15.3469 14.7969 15.6227 13.9695L17.7864 7.4785C18.0731 6.61832 18.2494 6.0811 18.3168 5.70219C18.3182 5.6943 18.3196 5.68663 18.3208 5.67916C18.3134 5.68042 18.3057 5.68175 18.2978 5.68315ZM18.5568 5.66004C18.5566 5.66022 18.5533 5.65995 18.5475 5.65868C18.5541 5.65922 18.557 5.65985 18.5568 5.66004ZM18.3413 5.45245C18.34 5.44671 18.3398 5.44343 18.34 5.44322C18.3401 5.44302 18.3408 5.44588 18.3413 5.45245ZM17.9475 3.71406C18.4985 3.61605 19.253 3.58686 19.8331 4.16691C20.4131 4.74697 20.3839 5.50148 20.2859 6.05247C20.1896 6.5939 19.9632 7.27302 19.7077 8.03931L19.6838 8.11095L17.5201 14.6019L17.5107 14.6301C17.2464 15.423 17.0358 16.0549 16.8514 16.5275C16.6781 16.9717 16.4726 17.4321 16.1631 17.7541C14.9827 18.9825 13.0173 18.9825 11.8369 17.7541C11.5274 17.4321 11.3219 16.9717 11.1486 16.5275C10.9642 16.055 10.7536 15.423 10.4893 14.6303L10.4799 14.6019C10.3595 14.2407 10.3324 14.1694 10.3029 14.1136C10.209 13.9361 10.0639 13.791 9.88637 13.6971C9.83055 13.6676 9.75926 13.6405 9.39806 13.5201L9.36973 13.5107C8.57694 13.2464 7.94503 13.0358 7.47249 12.8514C7.0283 12.6781 6.56794 12.4726 6.24589 12.1631C5.01744 10.9826 5.01744 9.01733 6.24589 7.83686C6.56794 7.52738 7.0283 7.32189 7.47249 7.14859C7.94505 6.96421 8.57699 6.75356 9.36981 6.48929L9.39806 6.47988L15.889 4.31622C15.913 4.30823 15.9369 4.30027 15.9607 4.29234C16.727 4.03683 17.4061 3.81038 17.9475 3.71406Z"
                fill="#33363F"
              />
            </svg>
            <span className="pl-2">Chia sẻ</span>
          </button>
        </div>

        <div className="flex flex-row pb-2 items-center rounded-3xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="image justify-self-center pl-5 min-w-max">
            <img
              className="object-cover h-[40px] w-[40px] rounded-full"
              src="https://i.pinimg.com/564x/97/bb/06/97bb067e30ff6b89f4fbb7b9141025ca.jpg"
              alt=""
            />
          </div>
          <div className="w-full flex flex-col justify-between p-2.5 pt-4 leading-normal">
            <form>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bình luận"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2.5 bottom-2.5 text-black bg-white font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Bình luận
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`absolute ${
          !hoverShowProfile && 'hidden'
        } w-96 h-fit bg-white shadow-lg border-2 top-10 left-10 rounded-2xl pb-4`}
      >
        <div className="p-4 flex space-x-3">
          <img
            className="w-20 h-20 object-cover rounded-full"
            src="https://image.lexica.art/full_webp/05ca2b3c-dcca-4c47-999a-ba313cf0aac6"
            alt=""
          />
          <div>
            <p className="text-xl font-medium">Lương Tuấn Vỹ</p>
            <p className="text-sm text-gray-700 flex">
              Đã đăng <span className="mx-1 font-medium"> 120 </span>bài viết
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Hoàng Chương</span>{' '}
              <span>và 400 người khác đang theo dõi</span>
            </p>
            <p className="text-sm text-gray-700 flex">
              Đang theo dõi <span className="mx-1 font-medium"> Tấn Tài </span>{' '}
              và 20 người khác
            </p>
          </div>
        </div>
        <div className="flex justify-evenly space-x-2">
          <button className="py-2 px-7 rounded-lg bg-secondary text-white">
            Theo dõi
          </button>
          <button className="py-2 px-7 rounded-lg bg-gray-50">Thích</button>
          <button className="py-2 px-7 rounded-lg">
            <More />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Blog);
