/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CustomModal } from '@/components/Modal';
import RouteConfig from '@/constants/route';
import { Info } from '../Text';
import FarmImg from '@/assets/images/nav/farm.png';
import HedgeImg from '@/assets/images/nav/hedge.png';
import ConnectWalletButton from '@/pages/components/ConnectWalletButton';
import Button from '@/components/Button';

import './index.scss';

interface Props {
    onClickItem(): void;
    disconnect(): void;
    connected: boolean;
}

export default function Nav({ disconnect, connected }: Props) {
    const { t } = useTranslation();
    const history = useHistory();
    const [isOpenCommingSoon, setIsOpenCommingSoon] = useState(false);
    return (
        <nav className="nav-container">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink
                        key="Square"
                        to={RouteConfig.farm}
                        isActive={(match, { pathname }) =>
                            Boolean(match) || pathname.startsWith('/home')
                        }
                    >
                        <img src={FarmImg} alt="" />
                        <Info color="#fff">{t('nav.farm')}</Info>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        key="Square"
                        to={RouteConfig.hedge}
                        isActive={(match, { pathname }) =>
                            Boolean(match) || pathname.startsWith('/home')
                        }
                    >
                        <img src={HedgeImg} alt="" />
                        <Info color="#fff">{t('nav.hedge')}</Info>
                    </NavLink>
                </li>
                {connected ? (
                    <li className="nav-item profile">
                        <Button onClick={disconnect} type="transparent">
                            Disconnect
                        </Button>
                    </li>
                ) : (
                    <li className="nav-item profile">
                        <ConnectWalletButton />
                    </li>
                )}
            </ul>
            <CustomModal
                isOpen={isOpenCommingSoon}
                type="sorry"
                text="Coming Soon！"
                onConfirm={() => {
                    history.push('/home');
                }}
                onClose={() => {
                    setIsOpenCommingSoon(false);
                }}
            />
        </nav>
    );
}
