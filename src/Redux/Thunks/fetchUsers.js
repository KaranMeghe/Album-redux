import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://127.0.0.1:3001/users');

    await pause(1000);
    return response.data;
});

// For devlopment only 
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};