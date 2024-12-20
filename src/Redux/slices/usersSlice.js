import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../Thunks/fetchUsers';
import { addUser } from '../Thunks/addUser';
import { removeUser } from "../Thunks/deleteUser";

const userSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        isLoading: true,
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        // Fetching Users
        builder.addCase(fetchUsers.pending, (state, action) => {
            // Update our state object to show users that we are loading data 
            state.isLoading = true;
        });


        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });


        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        // Adding Users
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });


        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });


        builder.addCase(addUser.rejected, (state, action) => {
            state.error = action.error;
        });

        // Deleting Users
        builder.addCase(removeUser.pending, (state, action) => {
            state.isLoading = true;
        });


        builder.addCase(removeUser.fulfilled, (state, action) => {
            state.isLoading = false;

            // BUG FIX ME
            console.log(action);

            state.data = state.data.filter(user => {
                return user.id !== action.payload.id;
            });
        });

        builder.addCase(removeUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const usersReducer = userSlice.reducer;