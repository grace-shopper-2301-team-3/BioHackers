import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

import { fetchSingleUser, selectSingleUser } from "./userSlice";


const SingleUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const id = useSelector((state) => state.auth.me.id);
    const { firstName, lastName } = useSelector((state) => state.auth.me);

    useEffect(() => {
        dispatch(fetchSingleUser(id));
    }, [dispatch]);

    //logout functionality for logout button in single user page
    const logoutAndRedirectHome = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <div>
            <div>
                <h1>
                    Hello, {firstName} {lastName}!
                </h1>
                <button
                    type="button"
                    onClick={logoutAndRedirectHome}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default SingleUser;