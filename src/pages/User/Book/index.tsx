import { Route, Navigate } from 'react-router-dom';
import LayoutBooking from './layout';
import Information from './page/Information';
import Successful from './page/Successful';
import Payment from '../Payment';
import React from 'react';
import { useAppSelector } from '~/app/hook';

const BookingRoutes = () => {
  const tourBook = useAppSelector((state) => state.tourBook);

  // Kiểm tra xem dữ liệu có tồn tại trong tourBook hay không
  const isDataAvailable = tourBook;

  if (!isDataAvailable) {
    // Nếu không có dữ liệu, chuyển hướng người dùng đến trang khác (ví dụ trang home)
    return <Navigate to="/home" replace />;
  }

  return (
    <React.Fragment>
      <Route path="booking" element={<LayoutBooking />}>
        <Route path="information/:id" element={<Information />} />
        <Route path="payment/:id" element={<Payment />} />
        <Route path="successful/:id" element={<Successful />} />
      </Route>
    </React.Fragment>
  );
};

export default BookingRoutes;
