import { useLocation } from 'react-router-dom';
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
import RequireUsername from './components/Shared/RequireUsername';
import Loading from './components/Shared/Loading';
import SkillAssessment from './components/Pages/SkillAssessment/SkillAssessment';
import PostAJob from './components/Pages/PostAJob/PostAJob';
import { UserStoreProvider } from './stateManagement/UserContext/UserContextStore';
import ChatPage from './components/Pages/ChatPage/ChatPage';
import FindJob from './components/Pages/FindJob/FindJob';
import MainAdmin from './AdminDashboard/MainAdmin/MainAdmin';
import DashboardHome from './AdminDashboard/DashboardHome/DashboardHome';
import Notifications from './AdminDashboard/Notifications/Notifications';
import AskForUsername from './components/Shared/AskForUsername';
import ProtectedRout from './components/Shared/ProtectedRout';
import ForgetPassword from './components/Pages/Login/ForgetPassword';
import UserProfile from './components/Pages/UserProfile/UserProfile';

import PostResource from './AdminDashboard/PostResource/PostResource';
import FreeResource from './components/Pages/FreeResource/FreeResource';
import Developer from './components/Pages/Developer/Developer';
import ReactTooltip from 'react-tooltip';
import UserAbout from './components/Pages/UserProfile/UserAbout/UserAbout';
import UserSkills from './components/Pages/UserProfile/UserSkills/UserSkills';
import UserDashboard from './components/Pages/UserDashboard/UserDashboard';
import Featured from './components/Pages/UserProfile/Featured/Featured';
import Courses from './components/Pages/UserProfile/Courses/Courses';
import Projects from './components/Pages/UserProfile/Projects/Projects';
import Experience from './components/Pages/UserProfile/Experience/Experience';
import PostBlogs from './AdminDashboard/PostBlogs/PostBlogs';


function App() {
  const url = useLocation()
  // console.log('see current location', url)
  return (
    <div className='transition-all duration-500 bg-[#F3F3F3]'>
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
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<AccountTypePage />} />
          <Route path='/register/:accType' element={<Register />} />
          <Route path='/lod' element={<Loading />}></Route>
          <Route path='/chat' element={
            <ProtectedRout>
              <ChatPage />
            </ProtectedRout>
          }></Route>
          <Route path='/postJob' element={<PostAJob />}></Route>
          <Route path='/developer' element={<Developer />}></Route>

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
            <Route path='postBlogs' element={<PostBlogs />}></Route>
          </Route>


          <Route path='/user-profile' element={<UserProfile />} >
            <Route index element={<UserAbout />} />
            <Route path="skills" element={<UserSkills />} />
            <Route path="featured" element={<Featured />} />
            <Route path="courses" element={<Courses />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experience" element={<Experience />} />
          </Route>

          <Route path='userDashboard' element={<UserDashboard />} />


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