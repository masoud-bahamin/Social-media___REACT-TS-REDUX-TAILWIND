import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "theme",
    initialState: { status: "light" },
    reducers: {
        changeTheme(state, action: PayloadAction<"light" | "dark">) {
            state.status = action.payload
            localStorage.setItem("BGram" , action.payload)
        }
    }
})

export const { changeTheme } = slice.actions

export default slice.reducer