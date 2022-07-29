import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Home from './components/Pages/Home/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';
import FooterBottomSection from './components/Shared/Footer/FooterBottomSection';
import SignUp from './components/Pages/Register/SignUp';
import AccountTypePage from './components/Pages/Register/AccountTypePage';
import Profile from './components/Pages/Profile/Profile';

function App() {
  return (
    <div >
      {/*  */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile></Profile>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<AccountTypePage />} />
        <Route path='/register/:accType' element={<Register />} />
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <FooterBottomSection />
      <ToastContainer
        autoClose={1500}
      />
    </div>
  );
}

export default App;
