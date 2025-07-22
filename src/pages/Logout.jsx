// src/pages/Logout.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();  // or just remove specific keys
    navigate('/login');
  }, []);

  return null; // or a spinner/loading UI
}
