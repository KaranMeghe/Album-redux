import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk('users/remove', async (user) => {
    console.log(user);
    const response = await axios.delete(`http://127.0.0.1:3001/users/${user.id}`);
    // FIX BUG
    return response.data;
});