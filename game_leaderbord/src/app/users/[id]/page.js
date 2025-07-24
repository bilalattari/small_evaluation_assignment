'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';

export default function UserDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock user data for demonstration
  const mockUser = {
    ogCode: 34034474,
    name: 'Brandon Clark',
    title: 'Hitman',
    rank: 'Gold',
    points: 66.2,
    attack: { greenBomb: 2, blackBomb: 1, redBomb: 0 },
    defence: 1,
    status: 'Scull',
    matches: 3403,
    won: 3403,
    approval: 'Approved',
    profilePicture: '/api/placeholder/40/40',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-20T14:45:00Z'
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUser(mockUser);
      setLoading(false);
    }, 1000);
  }, [params.id]);

  const getApprovalColor = (approval) => {
    switch (approval) {
      case 'Approved': return 'text-green-600 bg-green-100';
      case 'Pending': return 'text-orange-600 bg-orange-100';
      case 'Rejected': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Scull': return 'text-purple-600';
      case 'Ripple': return 'text-blue-600';
      case 'Jail': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`/api/users/${params.id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          router.push('/users');
        } else {
          alert('Error deleting user');
        }
      } catch (error) {
        alert('Error deleting user');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading user details...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">User Not Found</h2>
          <Link
            href="/users"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Users
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">PADEL UG</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-gray-700 py-4 px-1 border-b-2 border-transparent">
              Home
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 py-4 px-1 border-b-2 border-transparent">
              Game Config
            </a>
            <a href="#" className="text-green-600 py-4 px-1 border-b-2 border-green-600 font-medium">
              User Management
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 py-4 px-1 border-b-2 border-transparent">
              Announcements
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link
                  href="/users"
                  className="inline-flex items-center text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeftIcon className="h-5 w-5 mr-2" />
                  Back to Users
                </Link>
                <h2 className="text-xl font-semibold text-gray-900">User Details</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Link
                  href={`/users/${user.ogCode}/edit`}
                  className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
                >
                  <PencilIcon className="h-4 w-4 mr-2" />
                  Edit
                </Link>
                <button
                  onClick={handleDelete}
                  className="inline-flex items-center px-3 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700"
                >
                  <TrashIcon className="h-4 w-4 mr-2" />
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* User Profile Header */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-700">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-lg text-gray-600">{user.title}</p>
                <div className="flex items-center mt-2">
                  <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-700">{user.rank}</span>
                </div>
              </div>
            </div>

            {/* User Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500">OG Code</label>
                    <p className="text-lg text-gray-900">{user.ogCode}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Name</label>
                    <p className="text-lg text-gray-900">{user.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Title</label>
                    <p className="text-lg text-gray-900">{user.title}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Status</label>
                    <p className={`text-lg font-medium ${getStatusColor(user.status)}`}>{user.status}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Approval Status</label>
                    <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getApprovalColor(user.approval)}`}>
                      {user.approval}
                    </span>
                  </div>
                </div>
              </div>

              {/* Game Statistics */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Game Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Points</label>
                    <p className="text-2xl font-bold text-gray-900">{user.points.toLocaleString()}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Matches</label>
                    <p className="text-lg text-gray-900">{user.matches.toLocaleString()}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Won</label>
                    <p className="text-lg text-gray-900">{user.won.toLocaleString()}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Win Rate</label>
                    <p className="text-lg text-gray-900">
                      {user.matches > 0 ? ((user.won / user.matches) * 100).toFixed(1) : 0}%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Combat Configuration */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Combat Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Attack */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">Attack</h4>
                  <div className="space-y-2">
                    {user.attack.greenBomb > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Green Bomb</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          💚 x{user.attack.greenBomb}
                        </span>
                      </div>
                    )}
                    {user.attack.blackBomb > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Black Bomb</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          ⚫ x{user.attack.blackBomb}
                        </span>
                      </div>
                    )}
                    {user.attack.redBomb > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Red Bomb</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          🔴 x{user.attack.redBomb}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Defence */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">Defence</h4>
                  <div className="flex items-center">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg font-medium text-gray-900">x{user.defence}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timestamps */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
                <div>
                  <span className="font-medium">Created:</span> {new Date(user.createdAt).toLocaleDateString()}
                </div>
                <div>
                  <span className="font-medium">Last Updated:</span> {new Date(user.updatedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 