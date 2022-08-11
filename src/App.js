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
import Alluser from './AdminDashboard/Alluser/Alluser';
import DashboardHome from './AdminDashboard/DashboardHome/DashboardHome';

function App() {
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

          <Route path='/home' element={<RequireUsername>
            <Home />
          </RequireUsername>} />

          <Route path='/profile' element={<Profile></Profile>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<AccountTypePage />} />
          <Route path='/register/:accType' element={<Register />} />
          <Route path='/lod' element={<Loading />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/chat' element={<ChatPage />}></Route>
          <Route path='/postJob' element={<PostAJob />}></Route>
          <Route path='/skilltest' element={<SkillAssessment />}></Route>
          <Route path='/findJob' element={<FindJob />}></Route>
          <Route path='/admin' element={<MainAdmin />}>
            <Route index element={<DashboardHome></DashboardHome>}></Route>
            <Route path='alluser' element={<Alluser></Alluser>}></Route>
          </Route>

        </Routes >
        <FooterBottomSection />
        <ToastContainer
          autoClose={1500}
        />
      </UserStoreProvider>
    </div >
  );
}
//
export default App;

//
