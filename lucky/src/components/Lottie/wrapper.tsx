import React from 'react';
import Lottie from 'react-lottie';

interface Props {
    // json file
    animationData: any;
    customClass?: string;
    width?: number | string;
    height?: number | string;
    loop?: boolean;
    isClickToPauseDisabled?: boolean;
}

export default function LottieWrapper(props: Props) {
    const {
        animationData,
        customClass,
        width = 200,
        height = 200,
        loop = true,
        isClickToPauseDisabled,
    } = props;

    const defaultOptions = {
        loop,
        autoplay: true,
        animationData,
    };

    return (
        <div className={customClass}>
            <Lottie
                options={defaultOptions}
                height={height}
                width={width}
                isClickToPauseDisabled={isClickToPauseDisabled}
            />
        </div>
    );
}
