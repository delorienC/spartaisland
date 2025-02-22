import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const useAuthController = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('https://localhost:443/api/is_authenticated', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          },
        });
        const data = await response.json();
        if (!data.authenticated && location.pathname === '/login') {
          return null;
        } else if (!data.authenticated && location.pathname !== '/login') {
          navigate('/login');
        } else if (data.authenticated && location.pathname !== '/login') {
          return null;
        } else if (data.authenticated) {
          navigate('/admin-panel');
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        navigate('/login');
      }
    };
    checkAuth();
  }, [navigate, location]);
  return null;
};
