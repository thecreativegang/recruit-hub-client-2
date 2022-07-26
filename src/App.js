import { Route, Routes } from 'react-router-dom';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div >

      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <ToastContainer
        autoClose={1500}
      />
    </div>
  );
}

export default App;
