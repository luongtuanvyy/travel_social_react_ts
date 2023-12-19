import { useEffect, useState } from 'react';
import { useAppSelector } from '~/app/hook';
import Navbar from '~/components/Navbar';
import { TabTitle } from '~/utils/TabTilte';
import Aside from './components/Aside';
import ListBlog from './components/ListBlog';
import NewPost from './components/NewPost';
import RightSide from './components/RightSide';

const BlogFeature = () => {
  TabTitle('Bảng tin');
  const [newPost, setNewPost] = useState(false);
  // const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    document.body.style.overflow = newPost ? 'scrollY' : 'auto';
  }, [newPost]);

  const handleNewPost = (value: boolean) => {
    setNewPost(value);
  };

  return (
    <div className="bg-gray-200 z-10">
      <Navbar />
      <Aside />

      <RightSide />
      <main className="p-5 min-w-[500px] max-w-3xl lg:mx-auto h-auto pt-24  grid grid-cols-1 gap-y-5">
        <NewPost handleNewPost={handleNewPost} />
        <ListBlog />
      </main>
      <div
        className={` ${
          newPost ? 'fixed' : 'hidden'
        } top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex items-center justify-center z-50`}
      >
        {/* <ModalNewPost handleNewPost={handleNewPost} /> */}
      </div>
    </div>
  );
};

export default BlogFeature;
