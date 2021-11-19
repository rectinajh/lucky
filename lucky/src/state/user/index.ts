import { ChainId } from '@/constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../index';

// Define a type for the slice state

interface UserState {
    address: string;
    connectError: string;
    connected: boolean;
    chainId: ChainId;
}

// Define the initial state using that type
const initialState: UserState = {
    address: '',
    connectError: '',
    connected: false,
    chainId: ChainId.BSCTestnet,
};

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setAddress: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
        setConnectError: (state, action: PayloadAction<string>) => {
            state.connectError = action.payload;
        },
        setConnected: (state, action: PayloadAction<boolean>) => {
            state.connected = action.payload;
        },
        setChainId: (state, action: PayloadAction<number | undefined>) => {
            state.chainId = action.payload || ChainId.BSCTestnet;
        },
    },
});

export const {
    setAddress,
    setConnectError,
    setConnected,
    setChainId,
} = userSlice.actions;

export default userSlice.reducer;
