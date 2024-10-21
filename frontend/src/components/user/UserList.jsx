import React from 'react';
import Button from '../common/Button';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list w-full max-w-4xl mt-6">
      <h3 className="text-xl font-semibold mb-4">User List</h3>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">
                <Button onClick={() => onEdit(user)} className="mr-2">Edit</Button>
                <Button onClick={() => onDelete(user.id)} className="bg-red-500">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
