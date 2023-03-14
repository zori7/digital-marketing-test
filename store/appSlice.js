import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    profile: {
        role: null,
        firstName: "",
        lastName: "",
        email: "",
        fein: "",
        jobTitle: "",
        number: ""
    }
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
        setProfile: (state, action) => {
            state.profile = {
                ...state.profile,
                ...action.payload
            }
        }
    },
});

export const { login, logout, setProfile } = appSlice.actions;

export default appSlice.reducer;
