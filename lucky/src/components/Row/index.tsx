import React from 'react';
import cx from 'classnames';
import style from './index.module.scss';

interface Props {
    // justify?: string;
    align?: 'center' | 'between';
    children?: React.ReactNode;
    customClass?: string;
    lineHeight?: 'normal' | 'small' | 'md' | 'none';
}

export default function Row({
    align,
    children,
    customClass,
    lineHeight = 'normal',
}: Props) {
    return (
        <div
            className={cx(
                style.row,
                align === 'center' && style.alignCenter,
                align === 'between' && style.between,
                lineHeight === 'small' && style.small,
                lineHeight === 'md' && style.md,
                lineHeight === 'md' && style.md,
                lineHeight === 'none' && style.none,
                customClass,
            )}
        >
            {children}
        </div>
    );
}
