/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Text from '../Text';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';

import style from './connect-wallet.module.scss';
import { formatHashValue } from '@/common-helpers/utils';
import Fade from '@material-ui/core/Fade';
import ConnectWalletButton from '@/pages/components/ConnectWalletButton';

interface Props {
    disconnect(): void;
    connected: boolean;
    walletAddress: string;
}

export default function ConnectButton({
    disconnect,
    connected,
    walletAddress,
}: Props) {
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const handleClick = (e?: React.SyntheticEvent) => {
        if (e && e.currentTarget) {
            setAnchorEl(e.currentTarget);
        }
        return;
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {!connected ? (
                <ConnectWalletButton />
            ) : (
                <>
                    <div className={style.button} onClick={handleClick}>
                        <Text color="#fff" fontSize={14}>
                            {formatHashValue(walletAddress)}
                        </Text>
                        <ArrowDropDownIcon className={style.hideDropdownIcon} />
                    </div>
                    <Menu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        className={style.menuWrapper}
                        open={Boolean(anchorEl)}
                        getContentAnchorEl={null}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        TransitionComponent={Fade}
                    >
                        <MenuItem className={style.menu} onClick={handleClose}>
                            <NavLink to="/profile">Profile</NavLink>
                        </MenuItem>
                        <MenuItem className={style.menu} onClick={handleClose}>
                            <a href="javascript:;" onClick={disconnect}>
                                Disconnect
                            </a>
                        </MenuItem>
                    </Menu>
                </>
            )}
        </>
    );
}
