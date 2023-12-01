import { useEffect, useState } from 'react';
import { useAppSelector } from '~/app/hook';
import Navbar from '~/components/Navbar';
import Aside from './components/Aside';
import ListBlog from './components/ListBlog';
import ModalNewPost from './components/ModalNewPost';
import NewPost from './components/NewPost';
import RightSide from './components/RightSide';

const BlogFeature = () => {
  const [newPost, setNewPost] = useState(false);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    // Tắt cuộn trang khi mở modal
    if (newPost) document.body.style.overflow = 'scrollY';
    else document.body.style.overflow = 'auto';
  }, [newPost]);

  const handleNewPost = (value: boolean) => {
    setNewPost(value);
  };

  return (
    <div className="bg-gray-400 z-10">
      <Navbar />
      <Aside />
      <RightSide />
      <main className="p-5 max-w-2xl mx-auto h-auto pt-24  grid grid-cols-1 gap-y-5">
        <NewPost handleNewPost={handleNewPost} />
        <ListBlog />
      </main>
      <div
        className={` ${
          newPost ? 'fixed' : 'hidden'
        } top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center z-50`}
      >
        <ModalNewPost handleNewPost={handleNewPost} />
      </div>
    </div>
  );
};

export default BlogFeature;