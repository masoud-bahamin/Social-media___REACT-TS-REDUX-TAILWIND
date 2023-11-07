import { configureStore } from "@reduxjs/toolkit"
import postSlice from "./store/posts.ts"
import userSlice from "./store/users.ts"
import themeSlice from "./store/theme.ts"


export const store = configureStore({
    reducer: {
        Posts: postSlice,
        Users: userSlice,
        Theme: themeSlice
    }
})

export type DispatchType = typeof store.dispatch

export type StateType =  ReturnType<typeof store.getState> 
