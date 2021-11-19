import React from 'react';
import ReactDOM from 'react-dom';
import { CustomModal } from '@/components/Modal';

interface Props {
    type?: 'success' | 'error' | 'sorry' | 'fail' | 'congratulations' | 'info';
    title?: string;
    text?: string;
    buttonText?: string;
    textAlign?: 'center' | 'left' | 'right';
    onConfirm?(): void;
    onClose?(): void;
    hideClose?: boolean;
    disableBackgroundClick?: boolean;
}

const Modal = ({
    type,
    title,
    text,
    textAlign,
    buttonText,
    onConfirm,
    onClose,
    hideClose,
    disableBackgroundClick,
}: Props) => {
    let targetRef: any;
    // const propsRef: React.MutableRefObject<Props> = useRef(props);

    const handleDestroy = () => {
        if (!targetRef) {
            return;
        }

        if (onClose) {
            onClose();
        }

        const unmountResult = ReactDOM.unmountComponentAtNode(targetRef);
        if (unmountResult && targetRef && targetRef.parentNode) {
            targetRef.parentNode.removeChild(targetRef);
        }

        targetRef = undefined;
    };

    const render = function () {
        if (!targetRef) {
            targetRef = document.createElement('div');
            document.body.appendChild(targetRef);
        }

        const component = React.createElement(
            CustomModal as any,
            {
                isOpen: true,
                type,
                title,
                text,
                textAlign,
                onConfirm,
                buttonText,
                onClose: handleDestroy,
                hideClose,
                disableBackgroundClick,
            },
            null,
        );

        ReactDOM.render(component, targetRef);
    };

    render();
};

export default Modal;
