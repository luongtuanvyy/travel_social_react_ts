import { Datepicker } from 'flowbite-react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlaceApi } from '~/api/PlaceApi';
import { TourApi } from '~/api/TourApi';
import { company, earth, tour } from '~/assets/images';
import { Place, Search } from '~/assets/svg';
import User from '~/assets/svg/User';
import Navbar from '~/components/Navbar';
import PlaceComponent from '~/components/Place';
import SlideTour from '~/components/SlideTour';
import Footer from '~/components/User/Footer';
import { Tour } from '~/types/entity';

const carouselData = [
  {
    id: 1,
    img: 'https://wallpapercosmos.com/w/full/8/6/4/16953-3840x2160-desktop-4k-lake-background.jpg',
  },
  {
    id: 5,
    img: 'https://wallpapercosmos.com/w/full/8/6/4/16953-3840x2160-desktop-4k-lake-background.jpg',
  },
  {
    id: 2,
    img: 'https://wallpapercosmos.com/w/full/8/6/4/16953-3840x2160-desktop-4k-lake-background.jpg',
  },
  {
    id: 3,
    img: 'https://wallpapercosmos.com/w/full/8/6/4/16953-3840x2160-desktop-4k-lake-background.jpg',
  },
  {
    id: 4,
    img: 'https://wallpapercosmos.com/w/full/8/6/4/16953-3840x2160-desktop-4k-lake-background.jpg',
  },
];

const Home = () => {
  const [active, setActive] = useState(1);
  const [tourHot, setTourHot] = useState<Tour[]>([]);
  const slideScroll = useRef();

  useEffect(() => {
    const fetchData = async () => {
      await TourApi.getTourHot().then((response) => {
        setTourHot(response.data.data.datas);
      });
      await PlaceApi.getPlaces({ pageSize: 6 }).then((response) => {
        console.log(response.data.data.datas);
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="releative">
        <div className="h-screen">
          <div className="relative w-full h-5/6 ">
            <img
              className="object-cover w-full h-full"
              src="https://wallpapercosmos.com/w/full/8/6/4/16953-3840x2160-desktop-4k-lake-background.jpg"
              alt=""
            />
            <div className="absolute h-full w-full top-0 left-0 bg-gray-900/75" />
            <div className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 place-self-center md:text-center">
              <h1 className="max-w-2xl mb-4 text-white text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-6xl dark:text-white">
                Khám phá thêm nhiều địa điểm tuyệt
              </h1>
              <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 text-sm  md:text-lg lg:text-xl dark:text-gray-400">
                Nhấp vào đây để xem chi tiết về các chuyến đi đến những địa điểm
                của chúng tôi
              </p>
              <Link
                to={'/tour'}
                className="inline-flex border-2 border-white items-center justify-center px-3 py-1.5 md:px-5 md:py-3 mr-3 text-base font-medium text-center text-white rounded-lg hover:bg-white hover:text-black focus:ring-0 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Xem thêm
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative md:absolute py-4 left-1/2 -translate-x-1/2 w-full md:w-2/3 bottom-0 -translate-y-1/3 bg-white shadow-lg rounded-b-lg rounded-r-lg z-30">
            <div className="relative md:absolute w-fit top-0 md:-translate-y-3/4 bg-white p-2 pb-4 rounded-t-lg px-10">
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Chuyến đi
              </button>
              <button className="text-black bg-white hover:bg-blue-700 focus:ring-0 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Địa điểm
              </button>
            </div>

            <form
              action=""
              className="flex justify-center items-center h-full p-3"
            >
              <div className="flex flex-col md:flex-row md:flex md:items-center md:space-x-2 space-y-4 md:space-y-0 bg-gray-50 p-3 rounded-lg shadow-md">
                <div className="flex">
                  <div className="bg-gray-100 py-2 rounded-full">
                    <Place />
                  </div>
                  <div>
                    <label
                      htmlFor="countries"
                      className="block ml-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Địa điểm
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option defaultValue={''}>Chọn địa điểm</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-gray-100 p-2 rounded-full flex items-center">
                    <User />
                  </div>
                  <div>
                    <label
                      htmlFor="countries"
                      className="block ml-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Số người
                    </label>
                    <input
                      type="number"
                      id="visitors"
                      className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-0 block w-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1"
                      required
                    />
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-gray-100 py-2 rounded-full">
                    <Place />
                  </div>
                  <div>
                    <label
                      htmlFor="countries"
                      className="block ml-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Bắt đầu
                    </label>
                    <Datepicker className="picker" language="vn" />
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-gray-100 py-2 rounded-full">
                    <Place />
                  </div>
                  <div>
                    <label
                      htmlFor="countries"
                      className="block ml-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Bắt đầu
                    </label>
                    <Datepicker className="picker" language="vn" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-secondary px-4 py-6 md:w-fit w-full text-white rounded-lg"
                >
                  <Search />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col justify-evenly bg-gray-00 h-screen pt-12">
          <div className="">
            <div className="grid grid-cols-4 px-20 gap-10">
              <div className="p-4 ">
                <p className="text-secondary mb-2">Chúng tôi mang lại</p>
                <p className="text-3xl font-semibold mb-2">
                  Những gợi ý dành cho bạn
                </p>
                <p className="text-gray-400 text-sm mb-2">
                  Lựa chọn các mục bên cạnh để nhận được những gợi ý của chúng
                  tôi dành cho bạn{' '}
                </p>
              </div>
              <div className=" rounded-lg px-4">
                <img className="mb-2" src={earth} alt="" />
                <p className="text-lg font-semibold mb-2">Rất nhiều địa điểm</p>
                <p className="text-xs text-gray-500">
                  Hơn +450 địa điểm trong nước tại đây. Nơi luôn cập nhật các
                  địa điểm đang được quan tâm đến
                </p>
              </div>
              <div className="flex items-end">
                <div className=" rounded-lg ">
                  <img className="mb-2" src={tour} alt="" />
                  <p className="text-lg font-semibold mb-2">
                    Những chuyến đi tuyệt vời
                  </p>
                  <p className="text-xs text-gray-500">
                    Hơn +450 chuyến trong nước tại đây. Những chuyến đi luôn
                    được cập nhật mới nhất
                  </p>
                </div>
              </div>
              <div className=" rounded-lg px-4">
                <img className="mb-2" src={company} alt="" />
                <p className="text-lg font-semibold mb-2">Sự hỗ trợ hàng đầu</p>
                <p className="text-xs text-gray-500">
                  Những công ty hỗ trợ, cung cấp những chuyến đi và các dịch vụ
                  tốt dựa trên đánh giá của người dùng
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="px-20">
              <h1 className="text-lg font-medium ">Xu hướng mùa đông 2023</h1>
              <p className="text-sm text-gray-600">
                Dựa trên kết quả tìm kiếm và đặt tour của người dùng
              </p>
            </div>
            <div className="">
              <SlideTour tours={tourHot} />
            </div>
          </div>
        </div>
        <div className="h-screen pt-24 px-20 flex flex-col">
          <div className="mb-4">
            <p className="text-lg mb-2 font-medium">Địa điểm hàng đầu</p>
            <p className="text-sm text-gray-500">
              Những địa điểm được yêu thích, được tìm kiếm và được lựa chọn
              nhiều nhất
            </p>
          </div>
          <div className="grow">
            <div className="grid grid-rows-4 grid-flow-col gap-4 h-[540px]">
              <div className="row-span-2 col-span-2 border-2 border-dashed">
                <PlaceComponent />
              </div>
              <div className="row-span-2 col-span-2 border-2 border-dashed">
                <PlaceComponent />
              </div>
              <div className="row-span-4 col-span-2 border-2 border-dashed">
                <PlaceComponent />
              </div>
              <div className="row-span-2 col-span-3 border-2 border-dashed">
                <PlaceComponent />
              </div>
              <div className="row-span-2 border-2 border-dashed">
                <PlaceComponent />
              </div>
              <div className="row-span-2 col-span-2 border-2 border-dashed">
                <PlaceComponent />
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen p-20">
          <div className="grid grid-cols-2 h-full">
            <div className="flex items-center">
              <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                  <div className="max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                      Let's find more that brings us together.
                    </h2>
                    <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                      Flowbite helps you connect with friends, family and
                      communities of people who share your interests. Connecting
                      with your friends and family as well as discovering new
                      ones is easy with features like Groups, Watch and
                      Marketplace.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                      >
                        Get started
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      >
                        <svg
                          className="mr-2 -ml-1 w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                        </svg>
                        View more
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="h-full bg-red-200"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
