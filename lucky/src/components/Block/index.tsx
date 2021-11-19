import React from 'react';
import './index.scss';

export default function Block(props: any) {
    let className = 'c42--block';
    const bgColor = props.bgColor || 'rgba(0, 0, 0, 0.5)';

    if (props.className) {
        className = `${className} ${props.className}`;
    }

    return (
        <div
            className={className}
            onClick={props.onClick ? () => props.onClick() : () => {}}
        >
            <span
                className="border row top"
                style={{ backgroundColor: bgColor }}
            ></span>
            <span
                className="border row bottom"
                style={{ backgroundColor: bgColor }}
            ></span>
            <span
                className="border col left"
                style={{ backgroundColor: bgColor }}
            ></span>
            <span
                className="border col right"
                style={{ backgroundColor: bgColor }}
            ></span>
            <div className="content" style={{ backgroundColor: bgColor }}>
                {props.children}
            </div>
        </div>
    );
}
