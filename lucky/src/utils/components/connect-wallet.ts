import React from 'react';
import ReactDOM from 'react-dom';
import ConnectWallet from '@/components/ConnectWallet';

interface Props {
    onClickWallet(name: string): void;
    onClose(): void;
}

const ConnectWalletFunc = ({ onClickWallet, onClose }: Props) => {
    let targetRef: any;
    // const propsRef: React.MutableRefObject<Props> = useRef(props);

    const handleDestroy = () => {
        if (!targetRef) {
            return;
        }

        onClose();

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
            ConnectWallet as any,
            {
                isOpen: true,
                onClickWallet,
                onClose: handleDestroy,
            },
            null,
        );

        ReactDOM.render(component, targetRef);
    };

    render();
};

export default ConnectWalletFunc;
