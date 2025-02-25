import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useAuthController = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) return;

    let isMounted = true;

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

        if (!isMounted) return;

        if (!response.ok) {
          throw new Error('Server error');
        }

        const data = await response.json();
        if (data.authenticated && location.pathname !== '/admin-panel') {
          navigate('/admin-panel');
        } else if (!data.authenticated && location.pathname !== '/login') {
          navigate('/login');
        }

        if (isMounted) setChecked(true);
      } catch (error) {
        if (isMounted && location.pathname !== '/login') {
          navigate('/login');
        }
      }
    };

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [navigate, location.pathname]);

  return null;
};
