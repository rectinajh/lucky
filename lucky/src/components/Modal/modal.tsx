import React from 'react';
import cx from 'classnames';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Zoom from '@material-ui/core/Zoom';
import style from './index.module.scss';

export interface Props {
    isOpen?: boolean;
    onClose?(): void;
    children?: React.ReactNode;
    customContentClass?: string;
    hideClose?: boolean;
    disableBackgroundClick?: boolean;
    keepMounted?: boolean;
}

export default function TransitionsModal({
    isOpen,
    onClose,
    children,
    customContentClass,
    hideClose,
    keepMounted,
    disableBackgroundClick = false,
}: Props) {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={style.modal}
            open={!!isOpen}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            keepMounted={keepMounted}
            disableBackdropClick={disableBackgroundClick}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Zoom in={isOpen}>
                <div className={cx(style.content, 'card', customContentClass)}>
                    {!hideClose && (
                        <div className={style.close} onClick={onClose} />
                    )}
                    {children}
                </div>
            </Zoom>
        </Modal>
    );
}
