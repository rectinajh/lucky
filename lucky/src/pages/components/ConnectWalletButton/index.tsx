import React from 'react';
import cx from 'classnames';
import Button from '@/components/Button';
import useConnectWallet from '@/hooks/use-connect-wallet';
import { getSupportChainData } from '@/common-helpers/utils';
import Modal from '@/utils/components/modal';
import style from './index.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
    className?: string;
}

export default function ConnectWallet({ className = '' }: Props) {
    const { connectWallet, chainId, connected } = useConnectWallet();
    const supportChain = getSupportChainData(chainId);
    const { t } = useTranslation();

    if (connected) return null;

    const classNames = cx(style.button, className);

    return (
        <>
            {supportChain ? (
                <Button
                    // type="transparent"
                    onClick={() => {
                        connectWallet();
                    }}
                    className={classNames}
                >
                    {t('connectWallet')}
                </Button>
            ) : (
                <Button
                    onClick={() => {
                        Modal({
                            type: 'sorry',
                            text: 'Please choose to connect network',
                            buttonText: 'OK, I got it',
                        });
                    }}
                    className={classNames}
                >
                    Wrong Network
                </Button>
            )}
        </>
    );
}
