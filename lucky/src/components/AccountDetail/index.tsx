import React from 'react';
import Modal from '../Modal';
import Row from '@/components/Row';
import style from './index.module.scss';
import { ThirdTitle, Info, SecondTitle } from '@/components/Text';
import Button from '@/components/Button';
import { Copy, ExternalLink } from 'react-feather';
import useCopyClipboard from '@/hooks/use-copy-clipboard';
import useConnectWallet from '@/hooks/use-connect-wallet';
import { formatHashValue } from '@/common-helpers/utils';
import Alert from '@/utils/components/alert';
// import {
//     clearUserLoginInfoHooks,
//     setIsOpenConnectModalHooks,
// } from '@/state/user/hooks';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function AccountDetail({ isOpen, onClose }: Props) {
    const [, setCopied] = useCopyClipboard();
    const { connected, walletAddress, resetApp } = useConnectWallet();
    async function disconnect() {
        await resetApp();
        window.location.reload();
    }

    // async function handleChangeAccount() {
    //     await resetApp();
    //     onClose();
    //     connectWallet();
    // }
    if (!connected) return null;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            customContentClass={style.container}
        >
            <Row lineHeight="none">
                <ThirdTitle color="#fff">Account</ThirdTitle>
            </Row>
            <div className={style.content}>
                <Row align="between" lineHeight="none">
                    <Info color="#66757F">Connected with Provider</Info>
                    <Button
                        size="middle"
                        className={style.changeButton}
                        onClick={disconnect}
                        type="dark"
                    >
                        Disconnect
                    </Button>
                </Row>
                <Row>
                    <img
                        src={require('@/assets/images/token-logo.png')}
                        alt=""
                        className={style.logo}
                    />
                    <Info fontSize={18} color="#fff">
                        {formatHashValue(walletAddress)}
                    </Info>
                </Row>
                <Row customClass={style.bottom}>
                    <div
                        className={style.funcWrapper}
                        onClick={() => {
                            setCopied(walletAddress || '');
                            Alert({
                                type: 'success',
                                text: 'Copied!',
                            });
                        }}
                    >
                        <Copy size={16} color="#5985D3" />
                        <Info customClass={style.text} color="#5985D3">
                            Copy Address
                        </Info>
                    </div>
                    <div
                        className={style.funcWrapper}
                        onClick={() => {
                            window.open(
                                `https://bscscan.com/address/${walletAddress}`,
                            );
                        }}
                    >
                        <ExternalLink size={16} color="#5985D3" />
                        <Info customClass={style.text} color="#5985D3">
                            View on BSC
                        </Info>
                    </div>
                </Row>
            </div>
        </Modal>
    );
}
