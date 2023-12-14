import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '~/app/hook';
import Navbar from '~/components/Navbar';

import { PlaceApi } from '~/api/PlaceApi';
import Pagination from '~/components/Pagination';
import FilterPlace from './components/Filter';
import Places from './components/Places';
import { PlaceAction } from '~/slice/PlaceSlide';
import { set } from 'firebase/database';

const PlacePage = () => {
  const dispatch = useDispatch();
  const [pageCurrent, setPageCurrent] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageParam, setPageParam] = useSearchParams();
  const page = pageParam.get('page');
  const place = useAppSelector((state) => state.places);

  useEffect(() => {
    if (Number(page) < 1 || isNaN(Number(page))) {
      setPageParam({ page: '1' });
    }
    setPageCurrent(Number(page));
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      await PlaceApi.getPlaces({ pageSize: 9, page: Number(page) - 1 })
        .then((response) => {
          try {
            dispatch(
              PlaceAction.setPlaces({
                currentPage: response.data.data.currentPage,
                datas: response.data.data.datas,
                pageSize: response.data.data.pageSize,
                totalItems: response.data.data.totalItems,
                totalPages: response.data.data.totalPage,
              }),
            );
            setLoading(false);
          } catch (err) {
            console.log(err);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [pageCurrent]);

  const handlePage = (currentPage: string) => {
    setPageParam({ page: currentPage });
    setLoading(true);
  };

  return (
    <>
      <Navbar />
      <div className="mt-24">
        <FilterPlace />
        <Places loading={loading} />
      </div>
      <Pagination
        handlePage={handlePage}
        currentPage={page ? parseInt(page) : 1}
        total={place?.totalItems}
        pageCount={place?.totalPages}
      />
    </>
  );
};

export default PlacePage;
