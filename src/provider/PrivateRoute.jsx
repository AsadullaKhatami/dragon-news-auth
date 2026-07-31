import React, { use } from "react";
import { UserContext } from "./AuthProvidr";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const PrivateRoute = ({ childern }) => {
    const {user, loading} = use(UserContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <Loading></Loading>;
    }
    if(user && user?.email){
        return childern;
    }
    return <Navigate state={location.pathname} to="/auth/login" />
}

export default PrivateRoute;