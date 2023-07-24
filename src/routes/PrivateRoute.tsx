// Higher Order Component (HOC)

import { useAppSelector } from '@/redux/hook';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProps {
  children: ReactNode;
  //   path: string;
}

export default function PrivateRoute({ children, path }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user.email && !isLoading) {
    // return <Navigate to="/login" state={{ path: pathname }} />;
    return <Navigate to="/login" state={{ from: location }} replace />;

    // alternate solution for checkout private route if not login
    // return (
    //   <Navigate to={`/login?redirect=${encodeURIComponent(path)}`} replace />
    // );
  }

  return children;
}
