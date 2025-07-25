
import { createSlice } from "@reduxjs/toolkit";


const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
const getLoggedInUser = () => JSON.parse(localStorage.getItem("loggedInUser")) || null;

const initialState = {
    users: getUsers(),
    loggedInUser: getLoggedInUser(),
    error: null,
    success: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        register: (state, action) => {
            const { name, email, password } = action.payload;
            const userExists = state.users.find((u) => u.email === email);

            if (userExists) {
                state.error = "Email already registered.";
            } else {
                const newUser = { name, email, password };
                state.users.push(newUser);
                localStorage.setItem("users", JSON.stringify(state.users));
                state.error = null;
            }
        },

        login: (state, action) => {
            const { email, password } = action.payload;


            const localUsers = JSON.parse(localStorage.getItem("users")) || [];


            const user = localUsers.find(
                (u) => u.email === email && u.password === password
            );

            if (user) {

                state.loggedInUser = user;
                state.error = null;


                localStorage.setItem("loggedInUser", JSON.stringify(user));
                state.success = "login successfully"
            } else {
                state.error = "Invalid email or password.";
            }
        },

        logout: (state) => {
            state.loggedInUser = null;
            localStorage.removeItem("loggedInUser");
        },

        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { register, login, logout, clearError } = userSlice.actions;
export default userSlice.reducer;
