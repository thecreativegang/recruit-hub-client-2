import React from 'react';

const AdminRow = ({ dev, i }) => {
  const { username, email, accountType, isAdmin } = dev;
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{username}</td>
      <td>{email}</td>
      <td>{accountType}</td>
      <td>{isAdmin ? 'Admin' : 'Not Admin'}</td>
      <td>
        <button>
          {isAdmin ? (
            <span className="bg-red-500 text-black py-3 px-2 rounded-md text-center">
              Remove Admin
            </span>
          ) : (
            <span className="bg-green-500 text-black py-3 px-4 rounded-md text-center">
              Make Admin
            </span>
          )}
        </button>
      </td>
    </tr>
  );
};

export default AdminRow;
