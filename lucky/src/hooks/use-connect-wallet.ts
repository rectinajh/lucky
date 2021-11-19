import { useEffect } from 'react';
import useWeb3Modal from './use-web3-modal';
import { getSupportChainData } from '@/common-helpers/utils';
import Modal from '@/utils/components/modal';
import { useAppSelector, useAppDispatch } from '@/state/hooks';
import {
    setAddress,
    setConnected,
    setChainId,
    setConnectError,
} from '@/state/user';

export default function useConnectWallet() {
    const { address, connected, connectError: errorMessage } = useAppSelector(
        (state) => state.user,
    );
    const [
        web3,
        web3Provider,
        chainId,
        connectError,
        onConnect,
        resetApp,
    ] = useWeb3Modal();
    const dispatch = useAppDispatch();

    async function getAccountInfo() {
        try {
            const accounts = await web3.eth.getAccounts();
            if (accounts && accounts.length) {
                const account = (accounts[0] as string).toLocaleLowerCase();
                dispatch(setAddress(account));
                dispatch(setConnected(true));
                dispatch(setChainId(chainId));
                return account;
            }

            return undefined;
        } catch (e) {
            console.error(e);
            dispatch(setConnectError('connect error'));
        }
    }

    useEffect(() => {
        if (web3Provider && dispatch) {
            getAccountInfo();
        }
    }, [web3Provider, dispatch]);

    async function disconnect() {
        await resetApp();
        dispatch(setAddress(''));
        dispatch(setConnected(false));
        dispatch(setChainId(undefined));
    }

    async function connectWallet() {
        const chainData = getSupportChainData(chainId);
        if (!chainData) {
            Modal({
                type: 'sorry',
                text: 'Please change network and try again',
                buttonText: 'OK, I got it',
            });
            return;
        }

        if (connected) return await getAccountInfo();
        const res = await onConnect();
        if (!res) return undefined;
        try {
            return await getAccountInfo();
        } catch (e) {
            console.error(e);
            dispatch(setConnectError('connect error'));
            return e;
        }
    }

    return {
        connectWallet,
        disconnect,
        errorMessage: errorMessage || connectError,
        walletAddress: address,
        chainId,
        connected,
        web3,
        web3Provider,
        resetApp,
    };
}
