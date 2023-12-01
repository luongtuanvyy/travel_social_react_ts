import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PlaceApi } from '~/api/PlaceApi';
import { useAppSelector } from '~/app/hook';
import Navbar from '~/components/Navbar';

import { PlaceAction } from '~/slice/PlaceSlide';
import FilterPlace from './components/Filter';
import Places from './components/Places';
import Pagination from '~/components/Pagination';

const PlacePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>((): number => {
    let pageURL = parseInt(
      new URLSearchParams(location.search).get('page') ?? '1',
    );
    return pageURL;
  });
  const place = useAppSelector((state) => state.places);

  useEffect(() => {
    const fetchData = async () => {
      await PlaceApi.getPlaces({ pageSize: 9, page: page - 1 })
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
  }, [page]);

  const handlePage = (currentPage: number) => {
    setPage(currentPage);
    setLoading(true);
    navigate(`/places?page=${currentPage}`);
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
        currentPage={page}
        total={place?.totalItems}
        pageCount={place?.totalPages}
      />
    </>
  );
};

export default PlacePage;
