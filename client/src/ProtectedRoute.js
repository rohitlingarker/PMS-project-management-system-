import { Navigate } from "react-router-dom";

export function ProtectedRoute({ element }) {
  const isAuth = JSON.parse(localStorage.getItem("authenticated"));
  if (isAuth) {
    return element;
  } else {
    return <Navigate to="/signin" />;
  }
}