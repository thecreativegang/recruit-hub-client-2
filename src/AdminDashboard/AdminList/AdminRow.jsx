import axios from 'axios';
import React from 'react';
import { serverLink } from '../../utilities/links';

const AdminRow = ({ dev, i }) => {
  const { _id, username, email, accountType, isAdmin } = dev;
  const makeAdmin = async () => {
    await axios
      .put(`${serverLink}/user/developer-admin/${_id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((data) => console.log(data.data));
  };
  const removeAdmin = async () => {
    await axios
      .put(`${serverLink}/user/developer-admin-remove/${_id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((data) => console.log(data.data));
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{username}</td>
      <td>{email}</td>
      <td>{accountType}</td>
      <td>{isAdmin ? 'Admin' : 'Not Admin'}</td>
      <td>
        <button className="focus:outline-none">
          {isAdmin ? (
            <span
              onClick={removeAdmin}
              className="bg-red-500 text-black py-3 px-2 rounded-md text-center"
            >
              Remove Admin
            </span>
          ) : (
            <span
              onClick={makeAdmin}
              className="bg-green-500 text-black py-3 px-4 rounded-md text-center"
            >
              Make Admin
            </span>
          )}
        </button>
      </td>
    </tr>
  );
};

export default AdminRow;
