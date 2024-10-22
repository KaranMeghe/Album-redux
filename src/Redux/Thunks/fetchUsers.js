import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://127.0.0.1:3001/users');
    return response.data;
});
