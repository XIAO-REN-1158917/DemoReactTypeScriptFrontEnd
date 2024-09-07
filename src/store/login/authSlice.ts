import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: sessionStorage.getItem("token") || null,
        menuList: []
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload//save token to redux
            sessionStorage.setItem("token", action.payload)//save token to local
        },
        clearToken: state => {
            state.token = null
            sessionStorage.removeItem("token")
        },
        setMenu: (state, action) => {
            state.menuList = action.payload
        }
    }
})

export const { setToken, clearToken, setMenu } = authSlice.actions
export default authSlice.reducer