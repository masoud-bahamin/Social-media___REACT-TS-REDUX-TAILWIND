import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import auth from "../../utils/auth"


export const getAllUser = createAsyncThunk("users/getAllUsers", auth.get)

export const addUser = createAsyncThunk("users/addUsers", auth.add)

export const loginUser = createAsyncThunk("useres/loginUser", auth.login)

export const getUserInfo = createAsyncThunk("users/getUserInfo", auth.getInfo)

export const updateUserInfo = createAsyncThunk("users/updateUserInfo", auth.update)

const initialState: UserInitialState = {
    data: [],
    error: "",
    status: "none",
    loading: true,
    userInfo: null
}

const pending = (state: UserInitialState) => {
    state.loading = true;
    state.error = "";
    state.status = "pending"
}


const slice = createSlice({
    name: "users",
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllUser.pending, pending)
            .addCase(getAllUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.status = "success"
                state.data = action.payload;
            })
            .addCase(getAllUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "";
                state.status = "rejected"
            })

            .addCase(addUser.pending, pending)
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.status = "success"
                state.data = [...state.data, action.meta.arg];
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "";
                state.status = "rejected"
            })

            .addCase(loginUser.pending, pending)
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.status = "success"
                state.userInfo = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "";
                state.status = "rejected"
            })

            .addCase(getUserInfo.pending, pending)
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.status = "success"
                state.userInfo = action.payload;
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "";
                state.status = "rejected"
            })

            .addCase(updateUserInfo.pending, pending)
            .addCase(updateUserInfo.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.status = "success"
                state.userInfo = action.meta.arg;
            })
            .addCase(updateUserInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "";
                state.status = "rejected"
            })
    }
})

export default slice.reducer