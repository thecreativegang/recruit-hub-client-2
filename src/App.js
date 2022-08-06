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
import ChatBox from './components/Pages/ChatPage/ChatBox';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireUsername>
              <Home />
            </RequireUsername>
          }
        />

        <Route
          path="/home"
          element={
            <RequireUsername>
              <Home />
            </RequireUsername>
          }
        />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<AccountTypePage />} />
        <Route path="/register/:accType" element={<Register />} />
        <Route path="/lod" element={<Loading />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/chat" element={<ChatBox />}></Route>
      </Routes>
      <FooterBottomSection />
      <ToastContainer autoClose={1500} />
    </div>
  );
}
//
export default App;

//
