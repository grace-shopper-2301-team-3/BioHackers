import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import biohackersTheme from "../../app/theme";
import { ThemeProvider, Typography } from "@mui/material";
import { MainContainer } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers, selectAllUsers } from '../users/userSlice'


const AdminUsers = () => {

  const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])


  const mainContainerStyle = {
    marginBottom: "60px",
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <AdminHeaderbar />
      <MainContainer style={mainContainerStyle}>
        <Typography variant="h5">Users</Typography>
        {users.map((user) => {
                    return (
                        <div key={user.id}>
                            <Link to={`/users/${user.id}`}>
                                <p>{user.username}</p>
                            </Link>
                            {/* add order number here? */}
                            {/* add delete user button here? */}
                        </div>
                    )
                })}
      </MainContainer>
    </ThemeProvider>
  );
};

export default AdminUsers;
