const BACKEND_URL = 'http://localhost:5005';

import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = { username, password };
    console.log('Login', requestBody);

    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/login`,
        requestBody
      );
    

      console.log('JWT token', response.data.authToken);
      storeToken(response.data.authToken);

    
      await authenticateUser();

      console.log('Navigate to the profile page');
      navigate('/profile');
    } catch (err) {
      const errorDescription = err.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <h3>Hello!!</h3>
        <h4>Awesome to have you at IronProfile again!</h4>
        <p>
          If you signup, you agree with all our terms and conditions where we
          can do whatever we want with the data!
        </p>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Login;