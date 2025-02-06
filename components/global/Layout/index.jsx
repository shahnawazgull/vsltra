import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

const Layout = ({ children }) => {
  const navigator = useNavigate();
  let location = useLocation();
  const token = cookie.get('access_token');

  useEffect(() => {
    if (!token && !location.pathname.startsWith('/signup')) navigator('/login');
    if (!token && location.pathname.startsWith('/voice')) navigator('/signup/?to=/voice');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return <>{children}</>;
};

export default Layout;
