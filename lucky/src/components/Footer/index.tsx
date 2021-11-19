/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Row from '../Row';
import style from './index.module.scss';
import { LINKS } from '@/constants';

export default function Footer() {
    return (
        <div className={style.footer}>
            <Row align="between" customClass={style.content}>
                <div className={style.soialMedia}>
                    <a
                        href={LINKS.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.twitter}
                    />
                    <a
                        href={LINKS.gitbook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.gitbook}
                    />
                    <a
                        href={LINKS.medium}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.medium}
                    />
                    <a
                        href={LINKS.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.telegram}
                    />
                </div>
            </Row>
        </div>
    );
}
