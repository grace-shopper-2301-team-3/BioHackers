import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//fetch all users - thunderclient tested successfully
export const fetchAllUsers = createAsyncThunk('users/fetchAll', async () => {
    try {
        const { data } = await axios.get('/api/users');
        return data;
    }
    catch (err){
        return err.message;
    }
});

//fetch single user - thunderclient tested successfully
export const fetchSingleUser = createAsyncThunk('users/fetchSingle', async (id) => {
    try {
        const { data } = await axios.get(`/api/users/${id}`);
        return data;
    }
    catch (err){
        return err.message;
    }
});

//create user
export const createUser = createAsyncThunk(
    "createUser",
    async ({ firstName, lastName, username, password, email }) => {
      const { data } = await axios.post("/api/users", {
        firstName,
        lastName,
        username,
        password,
        email
      });
      return data;
    }
  );

//update user
export const updateUser = createAsyncThunk('users/update', async ({ id, username, password, firstName, lastName, email,}) => {
    try {
        const { data } = await axios.put(`/api/users/${id}`, {
            username,
            firstName,
            lastName,
            email,
        });
        return data;
    }
    catch (err) {
        return err.message;
    }
});


//delete user
export const deleteUser = createAsyncThunk('users/delete', async (id) => {
    try {
        const { data } = await axios.delete(`/api/users/${id}`);
        return data;
    }
    catch (err) {
        return err.message;
    }
});

const initialState = {
    allUsers: [],
    singleUser: {}
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.allUsers = action.payload;
        });
        builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
            state.singleUser = action.payload;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.allUsers.push(action.payload);
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.singleUser = action.payload;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.allUsers = state.allUsers.filter(user => user.id!== action.payload);
        });
    }
});

export const selectAllUsers = (state) => {
    return state.users.allUsers;
};

export const selectSingleUser = (state) => {
    return state.users.singleUser;
};

export default userSlice.reducer;