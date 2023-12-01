import { useAppSelector } from '~/app/hook';
import { Close, Image } from '~/assets/svg';
import Location from '~/assets/svg/Location';

type ModalNewPostProps = {
  handleNewPost: (value: boolean) => void;
};

const ModalNewPost = (props: ModalNewPostProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const { handleNewPost } = props;
  return (
    <div className="bg-white w-[600px] p-4 rounded-lg">
      <div className="text-end">
        <button onClick={() => handleNewPost(false)}>
          <Close />
        </button>
      </div>
      <div className="flex items-center mb-4">
        <img
          src={user?.avatar}
          alt=""
          className="w-12 h-12 rounded-full mr-2"
        />
        <div className="flex flex-col">
          <span className="font-medium  ">{user?.name}</span>
          <select
            defaultValue={''}
            id="countries"
            className="bg-gray-200 px-2 border-gray-200 p-1 text-gray-900 text-xs font-medium rounded-lg "
          >
            <option value="public">Công khai</option>
            <option value="follower">Người theo dõi</option>
            <option value="myself">Chỉ mình tôi</option>
          </select>
        </div>
      </div>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Tuấn Vỹ ơi, bạn đang nghĩ gì thế?"
          className="w-full h-24 bg-white rounded-lg p-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className=" w-full mb-3">
        <div className="flex space-x-4 border p-4 rounded-lg border-gray-400">
          <p className="flex items-center text-gray-400">
            <span>Thêm vào bài viết của bạn</span>
          </p>
          <button className="flex space-x-2 items-center text-gray-400">
            <span className="text-gray-600">
              <Image size={20} />
            </span>
            <span className="text-gray-600">
              <Location size={24} />
            </span>
          </button>
        </div>
      </div>
      <button className="bg-blue-600 rounded-lg px-4 w-full py-2 text-white font-bold">
        Đăng
      </button>
    </div>
  );
};

export default ModalNewPost;
