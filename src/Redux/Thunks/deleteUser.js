import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk('users/remove', async (user) => {
    const response = await axios.delete(`http://127.0.0.1:3001/users/${user.id}`);

    return response.data;
});

// Note : you shouldn't rely on what the API server is returning. It could be an empty object, a user object, or something you haven't planned for. It is best to return the user object that was passed to the thunk as this will yield consistent and expected results.