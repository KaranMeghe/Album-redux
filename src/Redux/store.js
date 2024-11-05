import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { fetchUsers } from "./Thunks/fetchUsers";
import { addUser } from "./Thunks/addUser";
import { removeUser } from "./Thunks/deleteUser";

const store = configureStore({
    reducer: {
        users: usersReducer
    }
});

export { store, fetchUsers, addUser, removeUser };