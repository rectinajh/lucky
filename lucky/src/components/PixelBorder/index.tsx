import React from 'react';
import './index.scss';

interface Props {
    borderWidth?: number;
}

export default function PixelBorder(props: Props) {
    const { borderWidth = 5 } = props;

    return (
        <>
            <div
                className="border border-top"
                style={{ height: borderWidth, top: -borderWidth }}
            />
            <div
                className="border border-left"
                style={{ width: borderWidth, left: -borderWidth }}
            />
            <div
                className="border border-right"
                style={{ width: borderWidth, right: -borderWidth }}
            />
            <div
                className="border border-bottom"
                style={{ height: borderWidth, bottom: -borderWidth }}
            />
        </>
    );
}
