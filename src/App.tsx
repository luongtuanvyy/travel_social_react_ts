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
import ProfileFeature from './pages/Profile';
import Profile from './pages/Profile/pages';
import Posts from './pages/Profile/pages/Post';
import ListBlogReup from './pages/Blog/components/ListBlog';
import Follower from './pages/Profile/pages/Followers';
import Images from './pages/Profile/pages/Images';
import Booking from './pages/User/Book';
import RegisterFeature from './pages/Register';

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
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/place" element={<PlacePage />}></Route>
        <Route path="/newfeed" element={<BlogFeature />}></Route>
        <Route path="/tour" element={<Tours />}></Route>
        <Route path="/profile" element={<ProfileFeature />}>
          <Route path="" element={<Profile />}>
            <Route path="post" element={<Posts />}>
              <Route index element={<ListBlogReup />} />
              <Route path="reup" element={<ListBlogReup />} />
            </Route>
            <Route path="images" element={<Images />} />
            <Route path="follower" element={<Follower />} />
          </Route>
        </Route>
        <Route path="/register" element={<RegisterFeature />} />
        <Route path="/newfeed" element={<BlogFeature />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/tour-detail" element={<TourDetail />}></Route>
      </Routes>
    </>
  );
};

export default App;
