import { useContext } from 'react';
import { authContext } from '../provider/Provider'
import { Navigate } from 'react-router-dom';


const PrivetRoutes = ({ children }) => {
    const { user } = useContext(authContext);
    if (user) {
        return children
    }
    return <Navigate to="/login" />
}

export default PrivetRoutes