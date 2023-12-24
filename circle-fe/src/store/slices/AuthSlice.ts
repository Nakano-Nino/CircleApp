import { setAuthToken } from "@/config/Api";
import { UserType } from "@/types/UserType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserType = {
    id: 0,
    username: "",
    full_name: "",
    email: "",
    photo_profile: "",
    bio: "",
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        AUTH_LOGIN: (_, action) => {
            const payload = action.payload;

            setAuthToken(payload.token);
            localStorage.setItem("token", payload.token);

            const user: UserType = {
                id: payload.id,
                username: payload.username,
                full_name: payload.full_name,
                email: payload.email,
                photo_profile: payload.photo_profile,
                bio: payload.bio,
            }
            return user
        },
        AUTH_CHECK: (_, action) => {
            const payload = action.payload

            const user: UserType = {
                id: payload.user.id,
                username: payload.user.username,
                full_name: payload.user.full_name,
                email: payload.user.email,
                photo_profile: payload.user.photo_profile,
                bio: payload.user.bio,
            }
            return user
        },
        AUTH_ERROR: () => {
            localStorage.removeItem("token");
        },
        AUTH_LOGOUT: () => {
            localStorage.remove("token");
        },
    },
})