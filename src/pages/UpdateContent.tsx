import React, { useState } from 'react';
import axios from 'axios';
import { useStore } from '../store';

function UpdateContent() {
  const [content, setContent] = useState('');
  const { isAdmin } = useStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('/api/update-content', { content })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Update Content</h1>
      <form onSubmit={handleSubmit}>
        <textarea value={content} onChange={(event) => setContent(event.target.value)} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateContent;