import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';
import Orders from './Orders';

const Profile = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name: '',
    email: ''
  });

  const fetchUserProfile = async () => {
    try {
      if (!token) return;

      const response = await axios.get(`${backendUrl}/api/user/profile`, {
        headers: { token }
      });

      if (response.data.success) {
        setUserData(response.data.user);
        setEditedData({
          name: response.data.user.name,
          email: response.data.user.email
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/user/update`, 
        { name: editedData.name },
        { headers: { token } }
      );

      if (response.data.success) {
        setUserData(prevData => ({
          ...prevData,
          name: editedData.name
        }));
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [token]);

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <div className='text-center text-2xl'>

      <Title text1="MY" text2="PROFILE" />
        </div>
      
      <div className="bg-white shadow-md rounded-lg p-6 mt-8">
        <div className="flex justify-between items-center mb-6">
            <div className='text-2xl'>
                
      <Title text1="Account" text2="Details" />
            </div>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="border px-4 py-2 rounded-sm text-sm font-medium"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="space-y-4">
          {isEditing ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text"
                  value={editedData.name}
                  onChange={(e) => setEditedData(prev => ({...prev, name: e.target.value}))}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email"
                  value={editedData.email}
                  disabled
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100"
                />
              </div>
              <button 
                onClick={handleUpdateProfile}
                className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"
              >
                Save Changes
              </button>
            </>
          ) : (
            <>
              <div>
                <p className="text-sm font-medium text-gray-600">Name</p>
                <p className="text-lg text-gray-800">{userData.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Email</p>
                <p className="text-lg text-gray-800">{userData.email}</p>
              </div>
            </>
          )}
        </div>
      <Orders/>
      </div>
    </div>
  );
};

export default Profile;