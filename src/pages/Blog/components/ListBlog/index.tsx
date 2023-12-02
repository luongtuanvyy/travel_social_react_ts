import React, { useEffect, useState } from 'react';
import { BlogApi } from '~/api/BlogApi';
import { Blog as BlogInterface } from '~/types/entity';
import Blog from '../Blog';
import ModalImage from '../Modal';

const ListBlogReup = () => {
  const [listBlog, setListBlog] = useState<BlogInterface[]>([]);
  const [page, setPage] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  const fetchData = async (page: number) => {
    try {
      const blog = await BlogApi.getAllBlog({ page: 0, pageSize: 10 });
      setListBlog(blog.data.data.datas);
      console.log(blog.data.data.datas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollY(position);

      if (position > 4500 + (page - 1) * 7000) {
        setPage((state) => state + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    const fetchMoreData = async () => {
      await BlogApi.getAllBlog({ page, pageSize: 10 })
        .then((res) => {
          setListBlog((state) => [...state, ...res.data.data.datas]);
        })
        .catch((err) => {});
    };

    if (page > 1) {
      fetchMoreData();
    }
  }, [page]);

  return (
    <div className="bg-gray-400 rounded-3xl">
      {listBlog.map((blog: BlogInterface, index: number) => (
        <Blog blog={blog} key={index} />
      ))}
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-screen overflow-x-hidden overflow-y-auto md:inset-0 h-screen"
      >
        <ModalImage />
      </div>
    </div>
  );
};

export default ListBlogReup;
