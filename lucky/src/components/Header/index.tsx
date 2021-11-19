import React, { useState } from 'react';
import classNames from 'classnames';
import './index.scss';
import Nav from './nav';
import SelectLng from '../SelectLng';
import { useHistory } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import ConnectWalletButton from './connect-wallet';
import useConnectWallet from '@/hooks/use-connect-wallet';
import { useAppSelector } from '@/state/hooks';
import RouteConfig from '@/constants/route';

interface Props {
    className?: string;
    showConnectButton?: boolean;
    connected?: boolean;
    onClickConnect?(): void;
    onClickDisconnect?(): void;
    address?: string;
    showLanguage?: boolean;
    notSupportedChain?: boolean;
}

export default function Header(props: Props) {
    const { className } = props;
    const { connected } = useAppSelector((state) => state.user);
    const [isOpen, setIsOpen] = useState(false);
    const { resetApp } = useConnectWallet();
    const history = useHistory();

    async function disconnect() {
        await resetApp();
        window.location.reload();
    }

    return (
        <div className={classNames('header', isOpen && 'open', className)}>
            <div className="content">
                <img
                    className="logo"
                    src="/images/header-logo.png"
                    alt="Metis logo"
                    onClick={() => {
                        history.push(RouteConfig.home);
                    }}
                />
                <div
                    className="menu-icon"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    Menu
                </div>
                <div className="right" onClick={() => setIsOpen(false)}>
                    <div className="right-bg"></div>
                    <Nav
                        onClickItem={() => setIsOpen(false)}
                        disconnect={disconnect}
                        connected={connected}
                    />
                    {/* <ConnectWalletButton
                        disconnect={disconnect}
                        connected={connected}
                        walletAddress={address}
                    /> */}
                    <SelectLng />
                </div>
            </div>
        </div>
    );
}
