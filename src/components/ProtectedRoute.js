import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const userCurrent = useAuth();
  return userCurrent ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
