import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../Thunks/fetchUsers';
import { addUser } from '../Thunks/addUser';

const userSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        isLoading: true,
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        // Pending
        builder.addCase(fetchUsers.pending, (state, action) => {
            // Update our state object to show users that we are loading data 
            state.isLoading = true;
        });

        // Fullfilled
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        // Rejected
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

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

    }
});

export const usersReducer = userSlice.reducer;