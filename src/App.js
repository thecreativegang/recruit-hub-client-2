import { Route, Routes } from 'react-router-dom';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Pages/Home/Home/Home';
import Profile from './components/Pages/Profile/Profile';

function App() {
  return (
    <div >

      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/profile' element={<Profile></Profile>} />
      </Routes>
      <ToastContainer
        autoClose={1500}
      />
    </div>
  );
}

export default App;


// for aos library 
