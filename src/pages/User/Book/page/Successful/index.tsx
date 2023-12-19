import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BookingActions } from '~/slice/BookingSlice';

const Successful = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BookingActions.removeBooking());
  }, []);
  return <div></div>;
};

export default Successful;
