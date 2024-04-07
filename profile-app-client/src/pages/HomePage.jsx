import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>IronProfile</h1>
      <p>
        Today we will create an app with authorization, adding some cool styles
      </p>
      <div>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
        <Link to="/login">
          <button>Log in</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;