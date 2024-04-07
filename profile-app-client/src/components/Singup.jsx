

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [campus, setCampus] = useState('');
  const [course, setCourse] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleCampus = (e) => setCampus(e.target.value);
  const handleCourse = (e) => setCourse(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = { username, password, campus, course };

    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/signup`,
        requestBody
      );
     
      navigate('/login');
    } catch (err) {
  
      const errorDescription = err.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
        <div>
          <label>Campus:</label>
          <select name="campus" value={campus} onChange={handleCampus}>
            <option value="">Select Campus</option>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Miami">Miami</option>
            <option value="Paris">Paris</option>
            <option value="Berlin">Berlin</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="México">México</option>
            <option value="Sao Paulo">Sao Paulo</option>
            <option value="Lisbon">Lisbon</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        <div>
          <label>Course:</label>
          <select name="course" value={course} onChange={handleCourse}>
            <option value="">Select Course</option>
            <option value="Web Dev">Web Dev</option>
            <option value="UX/UI">UX/UI</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>
        </div>
        <h3>Hello!!</h3>
        <h4>Welcome to IronProfile</h4>
        <p>
          If you signup, you agree with all our terms and conditions where we
          can do whatever we want with the data!
        </p>
        <button type="submit">Create the Account</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Signup;