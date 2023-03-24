import { Navigate } from "react-router-dom";

const UnAuthenticatedRoutes = ({ children }) => {
    const token = localStorage.getItem('token')
    return token ? (
        <Navigate to="/profile" />
    ) : (
        children
    );
};
export default UnAuthenticatedRoutes