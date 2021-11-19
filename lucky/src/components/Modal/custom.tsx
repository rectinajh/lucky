import React from 'react';
import Modal, { Props } from './modal';
import Row from '@/components/Row';
import Button from '@/components/Button';
import { Title, Info } from '@/components/Text';
// import SuccessImg from '@/assets/images/success-modal-bg.png';
// import ErrorImg from '@/assets/images/error-modal-bg.png';
// import SorryImg from '@/assets/images/sorry-modal-bg.png';
// import FailImg from '@/assets/images/too-late.png';
import style from './index.module.scss';
import { Congratulation } from '@/components/Lottie';

interface CustomProps extends Props {
    type?: 'success' | 'error' | 'sorry' | 'fail' | 'congratulations' | 'info';
    title?: string;
    text?: string;
    buttonText?: string;
    textAlign?: 'center' | 'left' | 'right';
    hideClose?: boolean;
    disableBackgroundClick?: boolean;
    onConfirm?(): void;
}

const ModalTitle = {
    success: 'Success!',
    error: 'Something went wrong!',
    sorry: 'Sorry',
    fail: 'Sorry',
    congratulations: 'Congratulations',
    info: 'Title',
};

const ButtonText = {
    success: 'Next',
    error: 'Restart',
    sorry: 'Back to square',
    fail: 'Back to square',
    congratulations: 'Next',
    info: 'desc',
};

// const ModalImg = {
//     success: SuccessImg,
//     error: ErrorImg,
//     sorry: SorryImg,
//     fail: FailImg,
//     congratulations: SuccessImg,
//     info: null,
// };

export default function CustomModal({
    isOpen,
    type = 'success',
    onClose,
    title,
    text,
    textAlign = 'center',
    buttonText,
    onConfirm,
    hideClose,
    disableBackgroundClick,
}: CustomProps) {
    title = title || ModalTitle[type];
    buttonText = buttonText || ButtonText[type];
    // const bg = ModalImg[type];
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            hideClose={hideClose}
            disableBackgroundClick={disableBackgroundClick}
        >
            <div className={style.customWrapper}>
                <Row lineHeight="none" customClass={style.imgContainer}>
                    {/* {bg && <img src={bg} className={style.image} alt="" />} */}
                    {type === 'congratulations' && (
                        <Congratulation
                            customClass={style.animation}
                            width="100%"
                            height="100%"
                            loop={false}
                        />
                    )}
                </Row>
                <Row align="center">
                    <Title align="center">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}
                        />
                    </Title>
                </Row>
                {text && (
                    <Row align="center">
                        <Info align={textAlign}>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: text,
                                }}
                            />
                        </Info>
                    </Row>
                )}
                <div className={style.footer}>
                    <Row align="center">
                        <Button
                            className={style.button}
                            onClick={() => {
                                onConfirm && onConfirm();
                                onClose && onClose();
                            }}
                            size="normal"
                        >
                            {buttonText}
                        </Button>
                    </Row>
                </div>
            </div>
        </Modal>
    );
}
