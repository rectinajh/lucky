import React from 'react';
import cx from 'classnames';
import style from './index.module.scss';

interface Props {
    fontSize?: number;
    fontWeight?: number;
    color?: string;
    customClass?: string;
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    lineHeight?: number | string;
}
const colors = {
    main: '#72d9f5',
};

export default function Text({
    fontSize,
    fontWeight,
    color,
    customClass,
    children,
    align = 'left',
    lineHeight,
}: Props) {
    return (
        <span
            className={customClass}
            style={{
                fontSize: `${fontSize}px`,
                fontWeight: fontWeight,
                color:
                    color && colors[color as keyof typeof colors]
                        ? colors[color as keyof typeof colors]
                        : color,
                textAlign: align,
                lineHeight: lineHeight,
            }}
        >
            {children}
        </span>
    );
}

export const Title = (props: Props) => {
    const { children, customClass, ...rest } = props;
    return (
        <Text
            customClass={cx(style.title, customClass)}
            fontWeight={500}
            color="#fff"
            {...rest}
        >
            {props.children}
        </Text>
    );
};

export const SecondTitle = (props: Props) => {
    const { children, customClass, ...rest } = props;

    return (
        <Text
            customClass={cx(style.secondTitle, customClass)}
            fontWeight={500}
            color="#fff"
            {...rest}
        >
            {props.children}
        </Text>
    );
};

export const ThirdTitle = (props: Props) => {
    const { children, customClass, ...rest } = props;

    return (
        <Text
            customClass={cx(style.thirdTitle, customClass)}
            fontWeight={500}
            color="#fff"
            {...rest}
        >
            {props.children}
        </Text>
    );
};

export const Info = (props: Props) => {
    const { children, customClass, ...rest } = props;

    return (
        <Text
            customClass={cx(style.normal, customClass)}
            fontWeight={500}
            color="#7493AD"
            {...rest}
        >
            {children}
        </Text>
    );
};

export const Small = (props: Props) => {
    const { children, customClass, ...rest } = props;

    return (
        <Text
            customClass={cx(style.small, customClass)}
            fontWeight={500}
            color="#7493AD"
            {...rest}
        >
            {children}
        </Text>
    );
};

export const Error = (props: Props) => {
    return (
        <Text fontSize={15} fontWeight={500} color="red">
            {props.children}
        </Text>
    );
};

export const Warning = (props: Props) => {
    const { children, customClass, ...rest } = props;

    return (
        <Text fontSize={8} fontWeight={500} color="#FFB200" {...rest}>
            {children}
        </Text>
    );
};
