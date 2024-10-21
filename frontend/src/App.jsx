import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/common/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Header from './components/layout/Header';
import UserManagement from './pages/UserManagement';
import SalesManagement from './pages/SalesManagement';



function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/" element={<PrivateRoute element={<Dashboard />} />} /> 
            <Route path="/users" element={<PrivateRoute element={<UserManagement />} />} />
            <Route path="/sales" element={<PrivateRoute element={<SalesManagement />} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
