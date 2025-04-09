import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';


const ProtectedRoute = ({ children }) => {
    const { user } = useAuthContext();
    

    if (!user) {
        // Redirect to login page if user is not authenticated
        return <Navigate to="/login" />;
    }

    // Render the protected page if user is authenticated
    return children;
};

export default ProtectedRoute;