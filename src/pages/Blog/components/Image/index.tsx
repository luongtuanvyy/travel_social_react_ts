import { initModals } from 'flowbite';
import { useEffect, useState } from 'react';

type ImageProps = {
  image: string[] | undefined;
  setBlog: (image: string) => void;
};

const ImageBlog = (props: ImageProps) => {
  const { setBlog } = props;
  const [image, setimage] = useState<string[] | undefined>(props.image);

  if (!image) {
    return <></>;
  }

  const setGrid = (image: string[]): string => {
    if (image.length == 1) {
      return 'grid-cols-1';
    } else if (image.length == 2) {
      return 'grid-cols-2';
    } else {
      return 'grid-cols-2 grid-rows-2 grid-flow-col';
    }
  };

  const imageShow: string[] = image.slice(
    0,
    image.length < 4 ? image.length : 3,
  );

  const imageHide: string[] = image.length > 3 ? image.slice(3) : [];

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

  const handleErrorImage = (index: number) => {
    const imageTemp = [...image];
    imageTemp.splice(index, 1);
    setimage(imageTemp);
  };

  return (
    <div
      className={`grid ${setGrid(image)} ${
        imageShow.length > 0 && ' gap-4'
      } h-full`}
    >
      {imageShow.map((imageItem, index) => (
        <div
          key={index}
          className={`${imageShow.length >= 3 && getClass(index)}`}
        >
          <button
            className="w-full h-full"
            type="button"
            onClick={() => setBlog(imageItem)}
          >
            <img
              className={`object-cover rounded-xl w-full ${
                imageShow.length >= 3 ? 'h-full' : 'h-96'
              }`}
              src={`https://res.cloudinary.com/di2n480w0/image/upload/${imageItem}`}
              onError={() => handleErrorImage(index)}
              alt=""
            />
          </button>
          {imageHide.length > 0 && index == 2 ? (
            <div className="absolute top-0 rounded-xl h-full w-full bg-gray-800/75 flex justify-center items-center">
              <button
                className="w-full h-full"
                type="button"
                onClick={() => setBlog(imageHide[0])}
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
