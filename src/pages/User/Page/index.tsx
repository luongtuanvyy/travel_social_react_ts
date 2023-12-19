import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '~/app/hook';
import Navbar from '~/components/Navbar';

import { PlaceApi } from '~/api/PlaceApi';
import Pagination from '~/components/Pagination';
import { PlaceAction } from '~/slice/PlaceSlide';
import { TabTitle } from '~/utils/TabTilte';
import FilterPlace from './components/Filter';
import Places from './components/Places';

const PlacePage = () => {
  TabTitle('Địa điểm');

  const dispatch = useDispatch();
  const place = useAppSelector((state) => state.places);

  const [pageCurrent, setPageCurrent] = useState<number>(1);
  const [address, setAddress] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [pageParam, setPageParam] = useSearchParams();
  const page = pageParam.get('page');

  useEffect(() => {
    if (Number(page) < 1 && page != null) {
      setPageParam({ page: '1' });
    }

    setPageCurrent(Number(page));
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      await PlaceApi.getPlaces({
        pageSize: 9,
        page: Number(page) - 1 < 0 ? 0 : Number(page) - 1,
        address,
      })
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
  }, [pageCurrent, address]);

  const handleAddress = (address: string) => {
    setAddress(address);
  };

  const handlePage = (currentPage: number) => {
    setPageParam({ page: currentPage.toString() });
    setPageCurrent(currentPage);
    setLoading(true);
  };

  return (
    <>
      <Navbar />
      <div className="mt-24">
        <FilterPlace handleAddress={handleAddress} />
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
