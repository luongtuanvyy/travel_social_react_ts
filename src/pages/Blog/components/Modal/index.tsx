import { useDispatch } from 'react-redux';
import { useAppSelector } from '~/app/hook';
import Heart from '~/assets/svg/Heart';
import { convertDate } from '~/service/DateService';
import { BlogActions } from '~/slice/BlogSlice';

type ModalImageProps = {
  setModalImage: (value: boolean) => void;
};

const ModalImage = (props: ModalImageProps) => {
  const { setModalImage } = props;
  const dispatch = useDispatch();
  const blog = useAppSelector((state) => state.blog.blog);
  const image = useAppSelector((state) => state.blog.image);
  const user = useAppSelector((state) => state.auth.user);

  const handleImageNavigate = () => {
    setModalImage(false);
    dispatch(BlogActions.modifyBlog({ blog: null, image: null }));
  };

  const handleImageIndex = (action: string | number) => {
    if (!(blog && image)) {
      return;
    }
    if (typeof action === 'number') {
      dispatch(
        BlogActions.modifyImage(blog.cloudinaryId.split(',')[action].trim()),
      );
      return;
    }
    const imageCloudinary = blog.cloudinaryId
      .split(',')
      .map((item) => item.trim());
    const index = imageCloudinary.findIndex((item) => item === image);
    if (action === 'prev') {
      dispatch(
        BlogActions.modifyImage(
          imageCloudinary[index === 0 ? imageCloudinary.length - 1 : index - 1],
        ),
      );
    } else if (action === 'next') {
      dispatch(
        BlogActions.modifyImage(
          imageCloudinary[index === imageCloudinary.length - 1 ? 0 : index + 1],
        ),
      );
    }
  };

  const getColorCarouselButton = (item: string) => {
    return item === image ? 'bg-white' : 'bg-gray-500';
  };

  return (
    <>
      {blog && image && (
        <div className="relative overflow-hidden w-full h-full bg-gray-500">
          <div className="absolute top-5 left-5 z-50">
            <button
              onClick={handleImageNavigate}
              type="button"
              className="text-white hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#ffffff"
                  strokeWidth={2}
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#ffffff"
                  strokeWidth={2}
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-3">
            <div className="col-span-2 bg-black h-screen relative top-0">
              <div className="flex items-center justify-center">
                <img
                  className="w-full h-screen object-contain"
                  src={`https://res.cloudinary.com/di2n480w0/image/upload/${image}`}
                  alt=""
                />
              </div>
              <button
                onClick={() => handleImageIndex('prev')}
                className="prev absolute top-1/2 -translate-y-1/2 left-2 bg-gray-500/25 rounded-full w-10 h-10 flex justify-center items-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 6L9 12L15 18" stroke="#FFFFFF" strokeWidth="2" />
                </svg>
              </button>
              <button
                onClick={() => handleImageIndex('next')}
                className="next absolute top-1/2 -translate-y-1/2 right-2 bg-gray-500/25 rounded-full w-10 h-10 flex justify-center items-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 6L15 12L9 18" stroke="#FFFFFF" strokeWidth="2" />
                </svg>
              </button>
              <div className="absolute bottom-2 left-1/2 space-x-2 -translate-x-1/2">
                {blog.cloudinaryId.split(',').map((item, index) => (
                  <button
                    onClick={() => handleImageIndex(index)}
                    key={index}
                    className={`h-2 w-2 ${getColorCarouselButton(
                      item.trim(),
                    )} rounded-full`}
                  ></button>
                ))}
              </div>
            </div>
            <div className="bg-white h-screen overflow-y-auto">
              <div className="blog">
                <div className="user">
                  <a
                    href="#"
                    className="flex flex-row rounded-t-lg bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="image min-w-max flex justify-center items-center pl-5">
                      <img
                        className="object-cover h-[40px] w-[40px] rounded-full"
                        src={blog.avatar}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between p-5 pl-2 leading-normal">
                      <h5 className="text-sm font-bold tracking-tight text-gray-700 dark:text-white">
                        {blog.name}
                      </h5>
                      <p className="text-xs font-normal text-gray-700 dark:text-gray-400">
                        {convertDate(blog.createdAt)}
                      </p>
                    </div>
                    <div className="grow p-5 flex justify-end items-center">
                      <button
                        className="inline-flex items-center p-2 text-sm font-medium  text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                      </button>

                      <div
                        id="dropdownDots"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownMenuIconButton"
                        ></ul>
                        <div className="py-2"></div>
                      </div>
                    </div>
                  </a>
                  <p className="px-5 pt-0 text-sm">{blog.description}</p>
                  <div className="grid grid-cols-2 px-5 pb-2">
                    <div className="flex-none flex items-center">
                      {blog.totalLike > 0 && (
                        <>
                          <Heart />
                          <span className="ml-1 text-xs">
                            {blog.totalLike} lượt thích
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex-none flex items-center justify-end">
                      <span className="mx-2 text-xs">
                        {blog.totalComment > 0 && (
                          <>{blog.totalComment} bình luận</>
                        )}
                      </span>
                      <span className="ml-2 text-xs">
                        {blog.totalShare > 0 && <>{blog.totalShare} chia sẻ</>}
                      </span>
                    </div>
                  </div>
                  <div className="mx-5 reaction grid grid-cols-3 justify-center border-t-2 border-b-2 border-gray-100">
                    <button
                      type="button"
                      className="pr-6 py-4 flex items-center text-sm font-medium text-gray-900 bg-white rounded-l-lg focus:z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                          stroke="#33363F"
                          strokeWidth="2"
                        />
                      </svg>
                      <span className="pl-2">Thích</span>
                    </button>
                    <button
                      type="button"
                      className="px-4 py-4 flex justify-center items-center text-sm font-medium text-gray-900 bg-white focus:z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
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
                      <span className="pl-2 whitespace-nowrap">Bình luận</span>
                    </button>
                    <button
                      type="button"
                      className="pl-6 py-4 flex justify-end text-sm font-medium text-gray-900 bg-white rounded-r-md focus:z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
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
                      <span className="pl-2 whitespace-nowrap">Chia sẻ</span>
                    </button>
                  </div>
                  <div className="mx-5 flex border-b flex-row items-center rounded-t-lg bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="image justify-self-center">
                      <img
                        className="object-cover h-[40px] w-[40px] rounded-full"
                        src={user?.avatar}
                        alt=""
                      />
                    </div>
                    <div className="grow flex flex-col justify-between p-3 pr-0 leading-normal">
                      <form>
                        <div className="relative">
                          <input
                            type="search"
                            id="default-search"
                            className="block w-full p-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Bình luận"
                            required
                          />
                          <button
                            type="submit"
                            className="absolute top-1/2 -translate-y-1/2 right-0.5 text-black bg-white font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Bình luận
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="px-5 w-52">
                    <select
                      id="countries"
                      className="bg-white px-0 text-sm border-0 border-gray-300 text-gray-900 rounded-lg focus:ring-secondary focus:ring-0 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option className="" defaultValue={'new'} value="new">
                        Gần đây nhất
                      </option>
                      <option className="" value="forYou">
                        Phù hợp nhất
                      </option>
                      <option className="" value="all">
                        Tất cả bình luận
                      </option>
                    </select>
                  </div>
                  <div className="overflow-y-auto">
                    {/* <ListComment comments={DATA_COMMENT} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalImage;
