import Web3Modal from 'web3modal';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../index';

// Define a type for the slice state

interface UserState {
    web3ModalInstance?: Web3Modal;
}

// Define the initial state using that type
const initialState: UserState = {
    web3ModalInstance: undefined,
};

export const web3State = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setWeb3ModalInstance: (state, action: PayloadAction<Web3Modal>) => {
            state.web3ModalInstance = action.payload;
        },
    },
});

export const { setWeb3ModalInstance } = web3State.actions;

export default web3State.reducer;
