import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import BlogFeature from './pages/Blog';
import Login from './pages/Login';
import Home from './pages/User/Home';
import PlacePage from './pages/User/Page';
import TourDetail from './pages/User/TourDetail';
import Tours from './pages/User/Tours';
import { authAction } from './slice/AuthSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token = localStorage.getItem('token') || '';
    dispatch(authAction.login({ token, user, with: 'gmail' }));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/places" element={<PlacePage />}></Route>
        <Route path="/newfeed" element={<BlogFeature />}></Route>
        <Route path="/tour" element={<Tours />}></Route>
        <Route path="/tour-detail" element={<TourDetail />}></Route>
      </Routes>
    </>
  );
};

export default App;
