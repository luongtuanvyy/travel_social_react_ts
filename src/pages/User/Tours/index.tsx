import React, { useEffect } from 'react';
import { TourApi } from '~/api/TourApi';
import Navbar from '~/components/Navbar';
import Pagination from '~/components/Pagination';
import { StateApiResponse } from '~/types/api';
import { Tour } from '~/types/entity';
import Filter from './components/Filter';
import ListTour from './components/ListTour';
import { useAppDispatch, useAppSelector } from '~/app/hook';
import { TourAction } from '~/slice/TourSlice';
import { useNavigate } from 'react-router-dom';

const Tours = () => {
  const [state, setState] = React.useState<StateApiResponse<Tour[]>>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const [page, setPage] = React.useState<number>((): number => {
    let pageURL = parseInt(
      new URLSearchParams(location.search).get('page') ?? '1',
    );
    navigate(`/tours?page=${pageURL}`);
    return pageURL;
  });
  const dispatch = useAppDispatch();

  const stateTourRedux = useAppSelector((state) => state.tour);

  useEffect(() => {
    const fetchTours = async () => {
      await TourApi.getAllTour({ page: page - 1, pageSize: 12 }).then(
        (response) => {
          setState(response.data.data);
          dispatch(TourAction.setTours(response.data.data));
        },
      );
    };
    fetchTours();
  }, [page]);

  const handlePage = (currentPage: number) => {
    setPage(currentPage);
    setLoading(true);
    navigate(`/tours?page=${currentPage}`);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Filter />
      {stateTourRedux && <ListTour />}
      {state && (
        <Pagination
          handlePage={handlePage}
          currentPage={page}
          total={state?.totalItems}
          pageCount={state?.totalPage}
        />
      )}
      {loading && <div className="loader"></div>}
    </React.Fragment>
  );
};

export default Tours;
