import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
      <Link to="/update-content">Update Content</Link>
    </div>
  );
}

export default Home;