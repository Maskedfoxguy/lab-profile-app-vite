const BACKEND_URL = 'http://localhost:5005';

import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';

function Profile() {
  const { user, logOutUser } = useContext(AuthContext);
 
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const storedToken = localStorage.getItem('authToken');

  const findUserData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BACKEND_URL}/api/users`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setUserData(response.data);
      console.log('User data from the backend:', response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogOut = () => {
    logOutUser();
    navigate('/');
  };

  useEffect(() => {
    findUserData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Profile</h2>
      <div>
        {userData && (
          <>
            <p>Username: {userData.username}</p>
            <p>Campus: {userData.campus}</p>
            <p>Course: {userData.course}</p>
          </>
        )}
      </div>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}

export default Profile;