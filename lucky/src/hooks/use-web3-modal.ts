import { useEffect, useState } from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { getChainData, getSupportChainData } from '@/common-helpers/utils';
import Web3 from 'web3';
import Modal from '@/utils/components/modal';
import ConnectWallet from '@/utils/connect-wallect';
import { ChainId } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { setWeb3ModalInstance } from '@/state/web3';

function initWeb3(provider: any) {
    const web3: any = new Web3(provider);
    web3.eth.extend({
        methods: [
            {
                name: 'chainId',
                call: 'eth_chainId',
                outputFormatter: web3.utils.hexToNumber,
            },
        ],
    });
    return web3;
}

export default function useWeb3Modal() {
    const dispatch = useAppDispatch();
    const { web3ModalInstance } = useAppSelector((state) => state.web3);
    const [web3, setWeb3] = useState<any>(null);
    const [web3Provider, setWeb3Provider] = useState<any>(null);
    const [chainId, setChainId] = useState<number>(ChainId.BSCTestnet);
    const [connectError, setConnectError] = useState<string>('');

    function getNetwork() {
        const chainData = getChainData(chainId);
        if (chainData) return chainData.network;
        return '';
    }

    function getProviderOptions() {
        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    infuraId: '6a40c823f6e5485297eb147118323924',
                },
            },
        };
        return providerOptions;
    }

    async function resetApp() {
        if (!web3ModalInstance) {
            return;
        }
        if (web3 && web3.currentProvider && web3.currentProvider.close) {
            await web3.currentProvider.close();
        }
        web3ModalInstance.clearCachedProvider();
        window.localStorage.removeItem('walletconnect');
        setWeb3Provider(null);
    }

    async function subscribeProvider(provider: any) {
        if (!provider.on) {
            return;
        }
        provider.on('close', () => resetApp());
        provider.on('accountsChanged', async (accounts: string[]) => {
            if (!accounts.length && web3ModalInstance) {
                web3ModalInstance.clearCachedProvider();
            }
            window.location.reload();
        });
        provider.on('chainChanged', async (chainId: number) => {
            window.location.reload();
        });

        provider.on('networkChanged', async (networkId: number) => {
            window.location.reload();
        });
    }

    async function onConnect(autoConnected?: boolean) {
        let modalInstance;
        if (!web3ModalInstance) {
            // for muti component use this hooks
            modalInstance = new Web3Modal({
                network: getNetwork(),
                cacheProvider: true,
                providerOptions: getProviderOptions(),
            });
            dispatch(setWeb3ModalInstance(modalInstance));
        } else {
            modalInstance = web3ModalInstance;
        }
        try {
            let provider;
            if (!autoConnected) {
                const walletName = await ConnectWallet();
                provider = await modalInstance.connectTo(walletName);
            } else {
                provider = await modalInstance.connect();
            }
            setWeb3Provider(provider);
            let tempWeb3;
            if (web3) {
                web3.setProvider(provider);
                tempWeb3 = web3;
            } else {
                tempWeb3 = initWeb3(provider);
                setWeb3(tempWeb3);
            }
            const chainId = await tempWeb3.eth.chainId();
            const chainData = getSupportChainData(chainId);
            await subscribeProvider(provider);
            if (!chainData && !(window as any).alertChangeNetwork) {
                // hook will be called many times, filter muti alert
                (window as any).alertChangeNetwork = true;
                Modal({
                    type: 'sorry',
                    text: 'Please change to correct network',
                    buttonText: 'OK, I got it',
                    onClose: async () => {
                        (window as any).alertChangeNetwork = false;
                        await resetApp();
                        window.location.reload();
                    },
                });
                return false;
            }

            setConnectError('');
            return true;
        } catch (e) {
            // console.error(e);
            setConnectError('User canceled');
            return false;
        }
    }

    useEffect(() => {
        if (!web3ModalInstance) {
            const modalInstance = new Web3Modal({
                network: getNetwork(),
                cacheProvider: true,
                providerOptions: getProviderOptions(),
            });
            dispatch(setWeb3ModalInstance(modalInstance));
        }
    }, [web3ModalInstance]);

    useEffect(() => {
        if (window.web3 && window.web3.currentProvider) {
            subscribeProvider(window.web3.currentProvider);
        }
    }, []);

    useEffect(() => {
        if (web3ModalInstance && web3ModalInstance.cachedProvider) {
            onConnect(true);
        } else {
            setWeb3(initWeb3(Web3.givenProvider || 'ws://localhost:8545'));
        }
    }, [web3ModalInstance, connectError]);

    async function setChainAndNetwork() {
        try {
            const _chainId = await web3.eth.chainId();
            setChainId(_chainId);
        } catch (error) {
            console.error(error);
            setConnectError('connect error');
        }
    }

    // useEffect(() => {
    //     if (chainId) {
    //         const chainData = getSupportChainData(chainId);
    //         if (!chainData && !AlertRef.current) {
    //             AlertRef.current = true;
    //             Modal({
    //                 type: 'sorry',
    //                 text: 'Please change network and try again',
    //                 buttonText: 'OK, I got it',
    //             });
    //         }
    //     }
    // }, [chainId]);

    useEffect(() => {
        if (web3) {
            setChainAndNetwork();
        }
    }, [web3]);

    return [web3, web3Provider, chainId, connectError, onConnect, resetApp];
}
