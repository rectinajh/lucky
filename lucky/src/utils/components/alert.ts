import React from 'react';
import { Color } from '@material-ui/lab/Alert';
import ReactDOM from 'react-dom';
import Alert from '@/components/Alert';

interface Props {
    type?: Color;
    text: string;
}

const AlertFunc = ({ type, text }: Props) => {
    let targetRef: any;
    // const propsRef: React.MutableRefObject<Props> = useRef(props);

    const handleDestroy = () => {
        if (!targetRef) {
            return;
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
            Alert as any,
            {
                type,
                text,
                onClose: handleDestroy,
            },
            null,
        );

        ReactDOM.render(component, targetRef);
    };

    render();
};

export default AlertFunc;
