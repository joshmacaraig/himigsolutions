import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getInvitations, deleteInvitation } from '../../services/invitationService';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminInvitations = () => {
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // Fetch invitations on component mount
  useEffect(() => {
    fetchInvitations();
  }, []);

  // Function to fetch invitations
  const fetchInvitations = async () => {
    try {
      setLoading(true);
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

  // Handle invitation deletion
  const handleDelete = async (id) => {
    try {
      await deleteInvitation(id);
      // Update the invitation list
      setInvitations(invitations.filter(invitation => invitation.id !== id));
      setDeleteConfirm(null);
    } catch (err) {
      console.error('Error deleting invitation:', err);
      setError('Failed to delete invitation. Please try again.');
    }
  };

  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-serif font-bold text-neutral-dark">
          Manage Invitations
        </h2>
        <Link
          to="/admin/invitations/new"
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        >
          Create New Invitation
        </Link>
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
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
                      <button
                        onClick={() => setDeleteConfirm(invitation.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </div>
                    
                    {/* Delete confirmation */}
                    {deleteConfirm === invitation.id && (
                      <div className="mt-2 p-2 bg-red-50 rounded-md">
                        <p className="text-xs text-red-800 mb-2">
                          Are you sure you want to delete this invitation? This action cannot be undone.
                        </p>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleDelete(invitation.id)}
                            className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(null)}
                            className="px-2 py-1 text-xs bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
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
    </AdminLayout>
  );
};

export default AdminInvitations;
