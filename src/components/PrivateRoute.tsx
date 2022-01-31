import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

const PrivateRoute: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/signin" />;
};

export default PrivateRoute;
