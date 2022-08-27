import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { serverLink } from '../../utilities/links';

const AdminList = () => {
  const [developers, setDevelopers] = useState([]);

  const getAllDevelopers = () =>
    axios
      .get(`${serverLink}/user/developer`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(({ data }) => setDevelopers(data));

  useEffect(() => {
    getAllDevelopers();
  }, []);
  return (
    <div className="min-h-screen bg-sky-100 text-black">
      <h2 className="mt-3 md:mt-7 text-center font-semibold text-3xl md:text-5xl">
        Managers
      </h2>
    </div>
  );
};

export default AdminList;
