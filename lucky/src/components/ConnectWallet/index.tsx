import React from 'react';
import cx from 'classnames';
import Row from '@/components/Row';
import { ThirdTitle, Info } from '@/components/Text';
import Modal from '@/components/Modal';
import style from './index.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
    isOpen: boolean;
    onClose(): void;
    onClickWallet(name: string): void;
}

export default function ConnectWallet({
    isOpen,
    onClickWallet,
    onClose,
}: Props) {
    const { t } = useTranslation();
    const metaMaskNotInstall = !(
        window.web3 ||
        (window.ethereum && !window.ethereum.isMetaMask)
    );

    function handleClick(name: string) {
        onClickWallet(name);
        onClose();
    }
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            customContentClass={style.modalContent}
        >
            <div className={style.warpper}>
                <Row lineHeight="none">
                    <ThirdTitle>{t('connectWallet')}</ThirdTitle>
                </Row>
                <div className={style.walletsList}>
                    <div
                        className={cx(style.item, style.metamask)}
                        onClick={() => {
                            if (metaMaskNotInstall) {
                                window.open('https://metamask.io/');
                            } else {
                                handleClick('injected');
                            }
                        }}
                    >
                        <div className={style.icon} />

                        <Info color="#fff" fontSize={18}>
                            {metaMaskNotInstall
                                ? 'Install Metamask'
                                : 'Metamask'}
                        </Info>
                    </div>

                    <div
                        className={cx(style.item, style.walletConnect)}
                        onClick={() => handleClick('walletconnect')}
                    >
                        <div className={style.icon} />
                        <Info color="#fff" fontSize={18}>
                            WalletConnect
                        </Info>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
