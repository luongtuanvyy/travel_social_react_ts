import React, { useEffect } from 'react';
import { TourApi } from '~/api/TourApi';
import Navbar from '~/components/Navbar';
import Pagination from '~/components/Pagination';
import { StateApiResponse } from '~/types/api';
import { Tour } from '~/types/entity';
import Filter from './components/Filter';
import ListTour from './components/ListTour';
import { tour } from '~/assets/images';

const Tours = () => {
  const [state, setState] = React.useState<StateApiResponse<Tour[]>>();

  useEffect(() => {
    const fetchTours = async () => {
      await TourApi.getAllTour().then((response) => {
        setState(response.data.data);
        console.log(response.data.data);
        
      });
    };
    fetchTours();
  }, []);

  const handlePage = () => {
    console.log('handlePage');
  };

  return (
    <React.Fragment>
      <Navbar />
      <Filter />
      {state?.datas && <ListTour tours={state.datas} />}
      {state && (
        <Pagination
          handlePage={handlePage}
          currentPage={state?.currentPage}
          total={state?.totalItems}
          pageCount={state?.totalPage}
        />
      )}
    </React.Fragment>
  );
};

export default Tours;
