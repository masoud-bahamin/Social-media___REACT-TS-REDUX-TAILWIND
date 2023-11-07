import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postFunc from "../../utils/postFuncs";

export const getPosts = createAsyncThunk("posts/getPosts", postFunc.get)

export const addPost = createAsyncThunk("addPost", postFunc.add)

export const updatePost = createAsyncThunk("posts/updatePost", postFunc.update)

const initialState: PostInitialState = {
    data: [],
    status: "none",
    error: "",
    loading: true
}

const pending = (state: PostInitialState) => {
    state.loading = true;
    state.error = "";
    state.status = "pending"
}

const postSlice = createSlice({
    name: "posts",
    reducers: {},
    initialState,
    extraReducers: (bulder) => {
        bulder
            .addCase(getPosts.pending, pending)
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.status = "success";
                state.error = ""
                state.data = action.payload
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.loading = false;
                state.status = "rejected";
                state.error = action.error.message || ""
            })

            .addCase(addPost.pending, pending)
            .addCase(addPost.fulfilled, (state, action) => {
                state.loading = false;
                state.status = "success";
                state.error = ""
                state.data = [...state.data, action.meta.arg]
            })
            .addCase(addPost.rejected, (state, action) => {
                state.loading = false;
                state.status = "rejected";
                state.error = action.error.message || ""
            })

            .addCase(updatePost.pending, pending)
            .addCase(updatePost.fulfilled, (state, action) => {
                state.loading = false;
                state.status = "success";
                state.error = ""
                getPosts()
                state.data = [...state.data].map(post => {
                    if (post.id === action.meta.arg.id) {
                        return action.meta.arg
                    }
                    return post
                }) as PostType[]
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.loading = false;
                state.status = "rejected";
                state.error = action.error.message || ""
            })
    }
})

export default postSlice.reducer