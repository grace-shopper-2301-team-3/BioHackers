import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";
import { fetchSingleUser } from "./userSlice";

const EditUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { me } = useSelector((state) => state.auth);

    const handleEdit = (event) => {
        event.preventDefault();
        const { username, firstName, lastName, email } = event.target;
        dispatch(updateUser({
            id: me.id,
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
        }))
        // .then(() => {
        //     dispatch(fetchSingleUser(me.id))
        //     navigate(`/users/${me.id}`);
        // })
        window.location.reload();
    };

    return (
        <>
            <div>
                <div>
                    <h2>User Profile</h2>
                    <span>
                        <h4>Username:</h4>
                        <p>{me.username}</p>
                    </span>
                    <span>
                        <h4>First Name:</h4>
                        <p>{me.firstName}</p>
                    </span>
                    <span>
                        <h4>Last Name:</h4>
                        <p>{me.lastName}</p>
                    </span>
                    <span>
                        <h4>E-mail:</h4>
                        <p>{me.email}</p>
                    </span>
                </div>

                <hr />

                <div>
                    <h2>Edit Information</h2>
                    <form onSubmit={handleEdit}>

                        <label htmlFor="username">
                            <small>Username:</small>
                        </label>
                        <input type="text" name="username" />

                        <label htmlFor="firstName">
                            <small>First Name:</small>
                        </label>
                        <input type="text" name="firstName" />

                        <label htmlFor="lastName">
                            <small>Last Name:</small>
                        </label>
                        <input type="text" name="lastName" />

                        <label htmlFor="email">
                            <small>E-mail:</small>
                        </label>
                        <input type="email" name="email" />

                        <br />
                        <br />

                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditUser;