import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UpdateContent from './pages/UpdateContent';
import AdminPage from './pages/AdminPage';
import { useStore } from './store';

function App() {
  const { isAdmin } = useStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update-content" element={isAdmin ? <UpdateContent /> : <div>Access denied</div>} />
        <Route path="/admin" element={isAdmin ? <AdminPage /> : <div>Access denied</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;