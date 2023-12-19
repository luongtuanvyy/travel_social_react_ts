import { useEffect, useState } from 'react';
import { BlogApi } from '~/api/BlogApi';
import { Blog as BlogInterface } from '~/types/entity';
import Blog from '../Blog';
import ModalImage from '../Modal';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingComponent from '../LoadingComponent';

const ListBlog = () => {
  const [listBlog, setListBlog] = useState<BlogInterface[]>([]);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await BlogApi.getAllBlog({ page: 0, pageSize: 10 })
        .then((response) => {
          setListBlog(response.data.data.datas);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  const loadMoreDate = async () => {
    await BlogApi.getAllBlog({ page: page, pageSize: 10 })
      .then((response) => {
        setListBlog((state) => [...state, ...response.data.data.datas]);
        setPage((state) => state + 1);
        if (response.data.data.totalPage - 1 === page) {
          setHasMore(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setModal = (value: boolean) => {
    setModalImage(value);
  };

  return (
    <div
      id="list-blog"
      className={`bg-gray-200 rounded-3xl list-blog ${
        modalImage && ' overflow-hidden'
      }`}
    >
      <InfiniteScroll
        dataLength={listBlog.length}
        next={loadMoreDate}
        hasMore={hasMore}
        loader={<LoadingComponent />}
        endMessage={
          <div className="rounded-lg bg-white p-5">
            <p style={{ textAlign: 'center' }}>
              Bạn đã xem hết tất cả bài viết vui lòng theo dõi những người dùng
              khác để xem nhiều thông tin
            </p>
          </div>
        }
      >
        {listBlog.map((blog: BlogInterface, index: number) => (
          <Blog blog={blog} key={index} setModalImage={setModal} />
        ))}
      </InfiniteScroll>

      <div
        className={`fixed top-0 left-0 right-0 z-50 ${
          !modalImage && ' hidden '
        } w-screen overflow-x-hidden overflow-y-auto md:inset-0 h-screen`}
      >
        <ModalImage setModalImage={setModalImage} />
      </div>
    </div>
  );
};

export default ListBlog;
