import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Home from './components/Pages/Home/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';
import FooterBottomSection from './components/Shared/Footer/FooterBottomSection';
import AccountTypePage from './components/Pages/Register/AccountTypePage';
import Profile from './components/Pages/Profile/Profile';
import RequireUsername from './components/Shared/RequireUsername';
import Loading from './components/Shared/Loading';
import SkillAssessment from './components/Pages/SkillAssessment/SkillAssessment';
import PostAJob from './components/Pages/PostAJob/PostAJob';
import { UserStoreProvider } from './stateManagement/UserContext/UserContextStore';
import ChatPage from './components/Pages/ChatPage/ChatPage';
import FindJob from './components/Pages/FindJob/FindJob';
import MainAdmin from './AdminDashboard/MainAdmin/MainAdmin';
import DashboardHome from './AdminDashboard/DashboardHome/DashboardHome';
// import Review from './components/Pages/Review/Review';
import Notifications from './AdminDashboard/Notifications/Notifications';
import AskForUsername from './components/Shared/AskForUsername';
import ProtectedRout from './components/Shared/ProtectedRout';
import ForgetPassword from './components/Pages/Login/ForgetPassword';

// import UserMain from './components/Pages/UserDasboard/UserMain/UserMain';
// import UserProfile from './components/Pages/UserDasboard/UserProfile/UserProfile';
// import UserReview from './components/Pages/UserDasboard/UserReiew/UserReview';

import PostResource from './AdminDashboard/PostResource/PostResource';
import FreeResource from './components/Pages/FreeResource/FreeResource';
import { useLocation } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import UserProfile from './components/Pages/UserProfile/UserProfile';


function App() {
  const url = useLocation()
  console.log('see current location', url)
  return (
    <div >
      <UserStoreProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <RequireUsername>
              <Home />
            </RequireUsername>
          } />

          <Route path='/home' element={<Home />} />
          <Route path='/freeResource' element={<FreeResource />} />

          <Route path='/profile' element={<Profile></Profile>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<AccountTypePage />} />
          <Route path='/register/:accType' element={<Register />} />
          <Route path='/lod' element={<Loading />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/chat' element={
            <ProtectedRout>
              <ChatPage />
            </ProtectedRout>
          }></Route>
          <Route path='/postJob' element={<PostAJob />}></Route>
          <Route path='/skilltest' element={<SkillAssessment />}></Route>
          <Route path='/findJob' element={<FindJob />}></Route>
          <Route path='/askUsername' element={<AskForUsername />}></Route>
          <Route path='/forgetPassword' element={<ForgetPassword />}></Route>


          {/* admin dashboard page  */}
          <Route path='/admin' element={<MainAdmin />}>
            <Route index element={<DashboardHome></DashboardHome>}></Route>
            <Route path='notifications' element={<Notifications />}></Route>
            <Route path='findJob' element={<FindJob />}></Route>
            <Route path='postResource' element={<PostResource />}></Route>
          </Route>


          <Route path='user-profile' element={<UserProfile />} ></Route>

          {/* <Route path='/dashboard' element={<UserMain></UserMain>}>
            <Route index element={<UserProfile></UserProfile>}></Route>
            <Route path='userReview' element={<Review></Review>}></Route>
          </Route> */}
        </Routes >

        <div >
          {
            url?.pathname !== '/chat' &&
            < FooterBottomSection />
          }
        </div>
        <ToastContainer
          autoClose={1500}
        />
        <ReactTooltip />
      </UserStoreProvider>
    </div >
  );
}
export default App;