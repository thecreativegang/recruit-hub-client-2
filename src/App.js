import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div >
      {/*  */}
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
      <ToastContainer
        autoClose={1500}
      />
    </div>
  );
}

export default App;
