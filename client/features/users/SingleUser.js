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
    const { firstName, lastName, email, isAdmin, username, password } = useSelector((state) => state.auth.me);

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
                <h3>
                    User Profile
                </h3>
                <ul>
                    <li>First Name: {firstName}</li>
                    <li>Last Name: {lastName}</li>
                    <li>Username: {username}</li>
                    <li>Email: {email}</li>
                    {/* order h/o component? */}
                </ul>
                {/* eventually create edit button and editUser component */}
                
                {/* <Link to={`/users/${id}/edit`}><button>Edit Profile</button></Link> */}

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