import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
// import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation} from 'react-router-dom';
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
import OTPFeature from './pages/OTP';
import Photo from './pages/Photo';
import ProfileFeature from './pages/Profile';
import Profile from './pages/Profile/pages';
import Follower from './pages/Profile/pages/Followers';
import History from './pages/Profile/pages/History';
import Images from './pages/Profile/pages/Images';
import Posts from './pages/Profile/pages/Post';
import RegisterFeature from './pages/Register';
import { RememberFeature } from './pages/Remember';
import Setting from './pages/Setting';
import LayoutBooking from './pages/User/Book/layout';
import Information from './pages/User/Book/page/Information';
import Successful from './pages/User/Book/page/Successful';
import Home from './pages/User/Home';
import PlacePage from './pages/User/Page';
import Payment from './pages/User/Payment';
import TourDetail from './pages/User/TourDetail';
import Tours from './pages/User/Tours';

// const DATA_PATHNAME = [
//   '/login',
//   '/registers',
//   '/home',
//   '/tours',
//   '/photo',
//   '/places',
//   '/newfeed',
//   '/about',
// ];

const App = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const IntercepterPathname = (pathname: string) => {
  //   DATA_PATHNAME.forEach((item) => {
  //     if (pathname === item) {
  //       return false;
  //     }
  //   });
  //   return true;
  // };

  function usePageViews() {
    let location = useLocation();
    useEffect(() => {
      initFlowbite();
    }, [location]);
  }

  usePageViews();

  return (
    <>
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="newpassword" element={<Login />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="places" element={<PlacePage />}></Route>
        <Route path="tours" element={<Tours />}></Route>
        <Route path="photo" element={<Photo />}></Route>
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
        <Route path="forgotten" element={<RememberFeature />} />
        <Route path="newfeed" element={<BlogFeature />} />
        <Route path="otp" element={<OTPFeature />} />
        <Route path="booking" element={<LayoutBooking />}>
          <Route path="information/:id" element={<Information />} />
          <Route path="payment" element={<Payment />} />
          <Route path="successful" element={<Successful />} />
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
