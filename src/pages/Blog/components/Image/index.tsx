import { initModals } from 'flowbite';
import { useEffect } from 'react';

type ImageProps = {
  image: string[];
  setBlog: () => void;
};

const ImageBlog = (props: ImageProps) => {
  const { image, setBlog } = props;

  useEffect(() => {
    initModals();
  }, []);

  const setGrid = (image: string[]): string => {
    if (image.length == 1) {
      return 'grid-cols-1';
    } else if (image.length == 2) {
      return 'grid-cols-2';
    } else {
      return 'grid-cols-2 grid-rows-2 grid-flow-col';
    }
  };

  let imageShow: string[] = image.slice(0, image.length < 4 ? image.length : 3);
  let imageHide: string[] = [];
  if (image.length > 3) {
    imageHide = image.slice(3);
  }

  const getClass = (index: number) => {
    switch (index) {
      case 0:
        return 'row-span-3';
      case 1:
        return 'col-span-2';
      case 2:
        return 'row-span-2 col-span-2 relative';
      default:
        break;
    }
  };

  return (
    <div className={`grid ${setGrid(image)} gap-4 h-full`}>
      {imageShow.map((imageItem, index) => (
        <div
          key={index}
          className={`${imageShow.length >= 3 && getClass(index)}`}
        >
          <button
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            className="w-full h-full"
            type="button"
            onClick={setBlog}
          >
            <img
              className={`object-cover rounded-xl w-full ${
                imageShow.length >= 3 ? 'h-full' : 'h-96'
              }`}
              src="https://loremflickr.com/640/480/nature"
              alt=""
            />
          </button>
          {imageHide.length > 0 && index == 2 ? (
            <div className="absolute top-0 rounded-xl h-full w-full bg-gray-800/75 flex justify-center items-center">
              <button
                data-modal-target="defaultModal"
                data-modal-toggle="defaultModal"
                className="w-full h-full"
                type="button"
                onClick={setBlog}
              >
                <span className="text-2xl font-medium text-white">
                  +{imageHide.length}
                </span>
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageBlog;
