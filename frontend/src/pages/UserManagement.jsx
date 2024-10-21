import React, { useState, useEffect } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/user.service";
import UserList from "../components/user/UserList";
import UserForm from "../components/user/UserForm";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const fetchedUsers = await getUsers();
    setUsers(fetchedUsers);
  };

  const handleCreateUser = async (userData) => {
    // log de userdata
    console.log('handleCreateUser user',userData);  
    await createUser(userData);
    fetchUsers();
  };

  const handleUpdateUser = async (id, userData) => {
    await updateUser(id, userData);
    fetchUsers();
    setEditingUser(null);
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="user-management flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <UserForm
        onSubmit={editingUser ? handleUpdateUser : handleCreateUser}
        initialData={editingUser}
      />
      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
}

export default UserManagement;
