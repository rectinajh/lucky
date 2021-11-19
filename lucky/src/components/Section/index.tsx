import React from 'react';
import classNames from 'classnames';
import './index.scss';

interface Props {
    backgroundColor: string;
    children: React.ReactNode;
    customClass?: string;
}

export default function Section(props: Props) {
    const { backgroundColor, children, customClass } = props;
    return (
        <section
            className={classNames('section', customClass)}
            style={{
                backgroundColor,
            }}
        >
            {children}
        </section>
    );
}
