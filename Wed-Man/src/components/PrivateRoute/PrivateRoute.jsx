/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center h-[90vh]">
          <span className="loading loading-spinner text-[#ff69b4] loading-lg"></span>
        </div>
        ;
      </>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
}
