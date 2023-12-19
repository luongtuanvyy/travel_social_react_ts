import { useAppSelector } from '~/app/hook';
import { Close, Image } from '~/assets/svg';
import Location from '~/assets/svg/Location';
import { cloudinaryToImage } from '~/service/ImageService';
import ImageBlog from '../Image';
import { ChangeEvent, useState } from 'react';

type ModalNewPostProps = {
  handleNewPost: (value: boolean) => void;
};

const ModalNewPost = (props: ModalNewPostProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const [image, setImage] = useState<string>();
  const { handleNewPost } = props;
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    // setImage();
    console.log(URL.createObjectURL(e.target.files![0]));
  };
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
          </select>
        </div>
      </div>
      <div className="relative mb-4">
        <textarea
          placeholder="Tuấn Vỹ ơi, bạn đang nghĩ gì thế?"
          className="w-full h-24 min-h-[100px] max-h-[100px] bg-white rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div
        className={` ${
          image.split(',').length > 0 ? '' : 'hidden'
        } image px-5 border-gray-600 border rounded-xl mb-6`}
      >
        <div
          className={`rounded-lg h-40 

           mt-2 mb-2`}
        >
          <ImageBlog
            image={cloudinaryToImage(image)}
            // setBlog={setBlog}
          />
        </div>
      </div>

      <div className=" w-full mb-3">
        <div className="flex space-x-4 border p-4 rounded-lg border-gray-400">
          <p className="flex items-center text-gray-400">
            <span>Thêm vào bài viết của bạn</span>
          </p>
          <button className="flex space-x-2 items-center text-gray-400">
            <input
              id="image"
              type="file"
              className="hidden"
              onChange={(e) => handleImage(e)}
              accept="image/*"
            />
            <label htmlFor="image" className="text-gray-600">
              <Image size={20} />
            </label>
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
