import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useGlobalContext } from "../store/User-Context";
import ErrorPage from "./ErrorPage";

// type PrivateRoutePropsType = {
//   children: React.ReactNode;
// };

const PrivateRoute: React.FC = () => {
  const { user } = useGlobalContext();
  const { userID } = useParams();

  if (!user) {
    return <Navigate to="/" />;
  }
  if (user.id !== Number(userID)) {
    return <ErrorPage />;
  }
  return <Outlet />;
};

export default PrivateRoute;
