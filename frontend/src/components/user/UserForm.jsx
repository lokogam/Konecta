import React, { useState, useEffect } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const UserForm = ({ onSubmit, initialData }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Asesor', 
  });

  useEffect(() => {
    if (initialData) {
      setUserData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting user data:', userData);
    if (initialData) {
      onSubmit(initialData.id, userData);
    } else {
      onSubmit(userData);
    }
  
    setUserData({ name: '', email: '', password: '', role: 'Asesor' }); 
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="user-form w-full max-w-lg flex flex-col items-center"
    >
      <Input
        name="name"
        type="text"
        placeholder="Name"
        value={userData.name}
        onChange={handleChange}
        required
        className="mb-4"
      />
      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleChange}
        required
        className="mb-4"
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={handleChange}
        required={!initialData}
        className="mb-4"
      />
      <select
        name="role"
        value={userData.role}
        onChange={handleChange}
        required
        className="mb-4 p-2 border rounded"
      >
        <option value="Administrador">Administrador</option>
        <option value="Asesor">Asesor</option>
      </select>
      <Button type="submit" className="bg-blue-500">
        {initialData ? 'Update User' : 'Create User'}
      </Button>
    </form>
  );
};

export default UserForm;
