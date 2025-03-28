import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getInvitations } from '../../services/invitationService';
import { logoutAdmin } from '../../services/authService';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { admin } = useAuth();

  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        const data = await getInvitations();
        setInvitations(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching invitations:', err);
        setError('Failed to load invitations. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchInvitations();
  }, []);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex space-x-6">
          <Link to="/admin/dashboard" className="text-white hover:text-gray-200 font-bold">Dashboard</Link>
          <Link to="/admin/invitations" className="text-white hover:text-gray-200">Invitations</Link>
          <Link to="/admin/media" className="text-white hover:text-gray-200">Media Manager</Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-serif font-bold text-neutral-dark">
            Invitations Dashboard
          </h2>
          <div className="flex space-x-4">
            <Link
              to="/admin/media"
              className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-dark"
            >
              Manage Media
            </Link>
            <Link
              to="/admin/invitations/new"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
            >
              Create New Invitation
            </Link>
          </div>
        </div>

        {/* Error alert */}
        {error && (
          <div className="mb-6 bg-red-50 text-red-700 p-4 rounded-md">
            {error}
          </div>
        )}

        {/* Invitations list */}
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : invitations.length > 0 ? (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Slug
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invitations.map((invitation) => (
                  <tr key={invitation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-neutral-dark">
                        {invitation.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {invitation.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {invitation.slug}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {invitation.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {invitation.viewCount || 0}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <Link
                          to={`/admin/invitations/${invitation.id}/edit`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </Link>
                        <Link
                          to={`/invitation/${invitation.slug}`}
                          target="_blank"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View
                        </Link>
                        <Link
                          to={`/admin/invitations/${invitation.id}/rsvps`}
                          className="text-green-600 hover:text-green-900"
                        >
                          RSVPs
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-500 mb-4">No invitations found.</p>
            <Link
              to="/admin/invitations/new"
              className="text-primary hover:text-primary-dark font-medium"
            >
              Create your first invitation
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;