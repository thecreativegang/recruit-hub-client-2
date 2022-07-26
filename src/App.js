import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './shared/Navbar';

function App() {
  return (
    <div >

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <ToastContainer
        autoClose={1500}
      />
    </div>
  );
}

export default App;
