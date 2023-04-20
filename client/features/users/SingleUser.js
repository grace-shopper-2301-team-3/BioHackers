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

    const logoutAndRedirectHome = () => {
        dispatch(logout());
        navigate("/");
    };

    console.log('This is the id #', id);

    return (
        <div>
            <h2>User Profile</h2>
            <span>
                <h4>Username:</h4>
                <p>{username}</p>
            </span>
            <span>
                <h4>First Name:</h4>
                <p>{firstName}</p>
            </span>
            <span>
                <h4>Last Name:</h4>
                <p>{lastName}</p>
            </span>
            <span>
                <h4>E-mail:</h4>
                <p>{email}</p>
            </span>
            <span>
                <Link to={`/users/${id}/edit`}><button>Edit Profile</button></Link>

                <br />
                <br />

                <button type="button" onClick={logoutAndRedirectHome}>Logout</button>
            </span>
        </div>
    );
}

export default SingleUser;
