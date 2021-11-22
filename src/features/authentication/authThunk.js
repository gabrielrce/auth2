import { createAsyncThunk } from "@reduxjs/toolkit";

export const logIn = createAsyncThunk(
  "auth/login",
  ({ username, password }, { rejectWithValue }) => {
    if (username !== "username" || password !== "psswd") {
      return rejectWithValue("Cannot use this email or password");
    } else {
      localStorage.setItem("authorized", "true");
      return true;
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", () => {
  localStorage.setItem("authorized", "false");
  return false;
});
