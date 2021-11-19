import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import user from './user';
import web3 from './web3';

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
});

export const store = configureStore({
    reducer: {
        user,
        web3,
    },
    middleware: customizedMiddleware,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
