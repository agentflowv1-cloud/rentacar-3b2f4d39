// src/pages/UpdateContent.tsx
import React, { useState } from 'react';
import { useStore } from '../store';

function UpdateContent() {
  const [content, setContent] = useState('');
  const { isAdmin } = useStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Removed axios.post and replaced with console.log since we cannot make API calls in a static spa
    console.log({ content });
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