import React, { useState } from 'react';
import Button from '@/components/Button';
import cx from 'classnames';
import Row from '@/components/Row';
import { Title, Info } from '@/components/Text';
import Modal from '@/components/Modal';
import style from './index.module.scss';

const acknowledge_key = 'acknowledge';

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
    const [isNext, setIsNext] = useState(false);
    const metaMaskNotInstall = !(
        window.web3 ||
        (window.ethereum && !window.ethereum.isMetaMask)
    );

    const acknowledge = !!window.localStorage.getItem(acknowledge_key);

    function handleClick(name: string) {
        onClickWallet(name);
        onClose();
    }

    function handleNext() {
        setIsNext(true);
        window.localStorage.setItem(acknowledge_key, 'true');
    }
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            customContentClass={style.modalContent}
        >
            <div className={style.warpper}>
                <Row>
                    <Title>Connect Wallet</Title>
                </Row>
                {acknowledge || isNext ? (
                    <>
                        <Row>
                            <Info>
                                Connect your crypto wallet to manage all NFT
                                tokens and transactions
                            </Info>
                        </Row>
                        <div className={style.walletsList}>
                            {metaMaskNotInstall ? (
                                <div
                                    className={cx(
                                        style.item,
                                        style.installMetaMask,
                                    )}
                                    onClick={() =>
                                        window.open('https://metamask.io/')
                                    }
                                >
                                    <div className={style.metaMask} />
                                    <Info>Install Metamask</Info>
                                </div>
                            ) : (
                                <div
                                    className={cx(style.item, style.metaMask)}
                                    onClick={() => handleClick('injected')}
                                />
                            )}

                            <div
                                className={cx(style.item, style.walletConnect)}
                                onClick={() => handleClick('walletconnect')}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <Row>
                            <Info>
                                Under current applicable regulations, access to
                                this promotion is not available for residents
                                of, or persons/entities located in, the United
                                States of America or Canada. We are proactively
                                working towards tailoring future promotions to
                                become available worldwide.
                            </Info>
                        </Row>
                        <Row align="center">
                            <Button
                                className={style.nextButton}
                                size="middle"
                                onClick={handleNext}
                            >
                                Acknowledge, Next
                            </Button>
                        </Row>
                    </>
                )}
            </div>
        </Modal>
    );
}
