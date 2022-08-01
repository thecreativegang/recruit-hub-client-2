import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Home from './components/Pages/Home/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';
import FooterBottomSection from './components/Shared/Footer/FooterBottomSection';
import AccountTypePage from './components/Pages/Register/AccountTypePage';
import Profile from './components/Pages/Profile/Profile';
<<<<<<< HEAD
import RequireUsername from './components/Shared/RequireUsername';
import Loading from './components/Shared/Loading';
=======
import ChatPage from './components/Pages/ChatPage/ChatPage';
>>>>>>> 709aac5b414733eed8bd246f58579d5a322a7009

function App() {
  return (
    <div >
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
<<<<<<< HEAD
        <Route path='/lod' element={<Loading />}></Route>
=======
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/chat' element={<ChatPage />}></Route>
>>>>>>> 709aac5b414733eed8bd246f58579d5a322a7009
      </Routes>
      <FooterBottomSection />
      <ToastContainer
        autoClose={1500}
      />
    </div>
  );
}

export default App;
