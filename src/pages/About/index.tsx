import { Link } from 'react-router-dom';
import { Plane } from '~/assets/svg';
import Navbar from '~/components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen">
        <div className="h-full grid grid-cols-2">
          <div className="flex flex-col justify-center items-start pl-40">
            <Link
              to="/about"
              className="text-sm font-medium flex border mb-4 border-gray-400 px-2 py-2 rounded-lg"
            >
              <span className="mr-2">Đặt chuyến đi </span>
              <Plane size={20} />
            </Link>
            <p className="text-6xl font-bold mb-3">
              Chúng tôi mang đến cho bạn những trải nghiệm tốt nhất
            </p>
            <p>
              Lời nhận xét và góp ý của bạn là động lực để chúng tôi ngày càng
              phát triển, mang lại trải nghiệm của người dùng tốt hơn bao giờ
              hết. Hãy gửi phản hồi cho chúng tôi sớm nhất khi bạn có vấn đề gì
              với trang web này.
            </p>

            <form className="w-full mt-3">
              <label htmlFor="chat" className="sr-only">
                Your message
              </label>
              <div className="w-full flex items-center pr-3 py-2 rounded-lg">
                <textarea
                  id="chat"
                  rows={1}
                  className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Phản hồi của bạn"
                />
                <button
                  type="submit"
                  className="justify-center p-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                >
                  <span className="whitespace-nowrap">Gửi phản hồi</span>
                </button>
              </div>
            </form>
          </div>
          <div className="bg-white ml-5 flex item-center">
            <img
              className="object-cover w-full h-full"
              src="https://wallpapercosmos.com/w/full/6/7/4/1473807.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
