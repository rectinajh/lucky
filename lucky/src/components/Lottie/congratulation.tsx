import React from 'react';
import LottieWrapper from './wrapper';
import animationData from './json/congratulation.json';

interface Props {
    customClass?: string;
    width?: number | string;
    height?: number | string;
    loop?: boolean;
}

export default function Congratulation({
    customClass,
    width,
    height,
    loop,
}: Props) {
    return (
        <LottieWrapper
            customClass={customClass}
            animationData={animationData}
            width={width}
            height={height}
            loop={loop}
        />
    );
}
