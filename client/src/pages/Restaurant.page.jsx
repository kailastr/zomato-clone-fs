import React, { useEffect } from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getCart } from "../redux/reducers/cart/cart.action";

const Restaurant = () => {
  const { _id } = useParams();
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  if (`/restaurant/${_id}` === pathname) {
    return <Navigate to={`/restaurant/${_id}/overview`} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default Restaurant;