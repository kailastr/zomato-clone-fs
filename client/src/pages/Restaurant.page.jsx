import React from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Restaurant = () => {
  const { _id } = useParams(); 
  const { pathname } = useLocation();

  if (`/restaurant/${_id}` == pathname) {
    return <Navigate to={`/restaurant/${_id}/overview`} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default Restaurant;