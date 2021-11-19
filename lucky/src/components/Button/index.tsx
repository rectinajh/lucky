import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import style from './index.module.scss';

interface Props {
    size?: 'middle' | 'normal' | 'large';
    type?: 'primary' | 'transparent' | 'dark';
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    onClick?:
        | ((event?: React.SyntheticEvent) => void)
        | ((event?: React.SyntheticEvent) => Promise<any>);
}

export default function Button(props: Props) {
    const {
        size = 'normal',
        type = 'primary',
        disabled,
        children,
        className,
        onClick,
        ...rest
    } = props;
    const [loading, setLoading] = useState(false);
    const loadingRef = useRef(loading);
    const mountedRef = useRef(true);

    loadingRef.current = loading;

    const handleLoading = useCallback(
        (value) => {
            if (mountedRef.current) {
                setLoading(value);
            }
        },
        [setLoading],
    );

    const handleClick = useCallback(
        (event) => {
            if (loadingRef.current || disabled || !onClick) {
                return;
            }

            const promise = onClick(event);
            if (
                promise != null &&
                typeof (promise as Promise<any>).then === 'function'
            ) {
                handleLoading(true);
                (promise as Promise<any>)
                    .then((result: any) => {
                        handleLoading(false);
                        return result;
                    })
                    .catch((e) => {
                        handleLoading(false);
                    });
            }
        },
        [loadingRef, mountedRef, disabled, handleLoading, onClick],
    );

    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;
        };
    }, []);

    const classes = [
        style.button,
        size === 'normal' && style.normal,
        size === 'middle' && style.middle,
        size === 'large' && style.large,
        type === 'primary' && style.primary,
        type === 'dark' && style.dark,
        type === 'transparent' && style.transparent,
        disabled && style.disabled,
        loading && style.loading,
        className,
    ];

    return (
        <button className={classes.join(' ')} onClick={handleClick} {...rest}>
            {children}
            {loading && (
                <CircularProgress size={24} className={style.loadingIcon} />
            )}
        </button>
    );
}
