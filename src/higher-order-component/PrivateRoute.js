import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute() {
  let { currentUser } = useAuth();
  const Navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      Navigate("/login");
      return;
    }
  });
  return <Outlet />;
}
