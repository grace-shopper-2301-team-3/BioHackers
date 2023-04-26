import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchAllUsers, selectAllUsers } from "./userSlice";

// import { styled } from '@mui/material/styles';

const AllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <Link to={`/users/${user.id}`}>
                <p>{user.username}</p>
              </Link>
              {/* add order number here? */}
              {/* add delete user button here? */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AllUsers;
