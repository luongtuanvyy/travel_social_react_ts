import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import DashboardAdmin from './pages/Admin/Dashboard';
import TourAdmin from './pages/Admin/Tour';
import UserAdmin from './pages/Admin/Users';
import LayoutAdmin from './pages/Admin/layout';
import BlogFeature from './pages/Blog';
import ListBlog from './pages/Blog/components/ListBlog';
import TourCompany from './pages/Company/TourCompany';
import LayoutCompany from './pages/Company/layout';
import Login from './pages/Login';
import ProfileFeature from './pages/Profile';
import Profile from './pages/Profile/pages';
import Follower from './pages/Profile/pages/Followers';
import History from './pages/Profile/pages/History';
import Images from './pages/Profile/pages/Images';
import Posts from './pages/Profile/pages/Post';
import RegisterFeature from './pages/Register';
import Setting from './pages/Setting';
import LayoutBooking from './pages/User/Book/layout';
import Information from './pages/User/Book/page/Information';
import Successful from './pages/User/Book/page/Successful';
import Home from './pages/User/Home';
import PlacePage from './pages/User/Page';
import Payment from './pages/User/Payment';
import TourDetail from './pages/User/TourDetail';
import Tours from './pages/User/Tours';
import { authAction } from './slice/AuthSlice';

const App = () => {
  initFlowbite();
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token = localStorage.getItem('token') || '';
    dispatch(authAction.login({ token, user, with: 'gmail' }));
  }, []);

  //Enum

  return (
    <>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="places" element={<PlacePage />}></Route>
        <Route path="newfeed" element={<BlogFeature />}></Route>
        <Route path="tours" element={<Tours />}></Route>
        <Route path="/tours/:id" element={<TourDetail />} />
        <Route path=":id" element={<ProfileFeature />}>
          <Route path="" element={<Profile />}>
            <Route path="" element={<Posts />}>
              <Route index element={<ListBlog />} />
              <Route path="reup" element={<ListBlog />} />
            </Route>
            <Route path="images" element={<Images />} />
            <Route path="follower" element={<Follower />} />
          </Route>
          <Route path="setting" element={<Setting />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path="register" element={<RegisterFeature />} />
        <Route path="newfeed" element={<BlogFeature />} />
        <Route path="booking" element={<LayoutBooking />}>
          <Route path="information/:id" element={<Information />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="successful/:id" element={<Successful />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/company" element={<LayoutCompany />}>
          <Route path="tour" element={<TourCompany />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="users" element={<UserAdmin />}></Route>
          <Route path="tours" element={<TourAdmin />}></Route>
          <Route path="dashboard" element={<DashboardAdmin />}></Route>
        </Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </>
  );
};

export default App;
