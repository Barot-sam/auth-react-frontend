import { createSlice } from "@reduxjs/toolkit";

type T_user = {
  name: undefined | string;
  email: undefined | string;
  firstName: undefined | string;
  LastName: undefined | string;
  isLoggedIn: boolean;
};

const user: T_user = {
  name: "",
  email: "",
  firstName: "",
  LastName: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    login: (
      //     {
      //   userEmail,
      //   userPassword,
      // }: {
      //   userEmail: string;
      //   userPassword: string;
      // }
      state
    ) => ({
      name: "Mr. Sage",
      email: "sage@sagegroup.com",
      firstName: "Sage",
      LastName: "Barot",
      isLoggedIn: true,
    }),
    logout: (state) => ({ ...user }),
    register: () => ({
      name: "Mr. Sage (Registered)",
      email: "sage@sagegroup.com",
      firstName: "Sage",
      LastName: "Barot",
      isLoggedIn: true,
    }),
  },
});

export const { login, logout, register } = userSlice.actions;

export default userSlice.reducer;
