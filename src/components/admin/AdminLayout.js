import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logoutAdmin } from '../../services/authService';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = ({ children }) => {
  const { admin } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Invitations', href: '/admin/invitations' },
    { name: 'Settings', href: '/admin/settings' },
  ];

  const handleLogout = () => {
    logoutAdmin();
  };

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Admin Header */}
      <header className="bg-primary shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-white">
            Himig Solutions Admin
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-white">Welcome, {admin?.name || 'Admin'}</span>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-white text-primary rounded-md hover:bg-gray-100 text-sm"
            >
              Log Out
            </button>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`py-2 px-1 text-sm font-medium border-b-2 ${
                    isActive
                      ? 'border-white text-white'
                      : 'border-transparent text-primary-100 hover:text-white hover:border-primary-200'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
