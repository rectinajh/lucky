import React from 'react';
import Row from '@/components/Row';
import { Info } from '@/components/Text';
import { NavLink } from 'react-router-dom';

import style from './index.module.scss';
import RouteConfig from '@/constants/route';
import { useTranslation } from 'react-i18next';
import Value from '@/components/Value';
import { LINKS } from '@/constants';
import TokenLogo from '@/assets/images/token-logo.png';
import FarmImg from '@/assets/images/nav/farm.png';
import HedgeImg from '@/assets/images/nav/hedge.png';

export default function NavSide() {
    const { t } = useTranslation();
    return (
        <div className={style.navWrapper}>
            <div className={style.top}>
                <NavLink to={RouteConfig.home} className={style.logo}>
                    <img src="/images/header-logo.png" alt="Beaver" />
                </NavLink>
                <div className={style.links}>
                    <NavLink
                        className={style.link}
                        to={RouteConfig.farm}
                        isActive={(match) => Boolean(match)}
                    >
                        <img src={FarmImg} alt="" />
                        <Info color="#fff">{t('nav.farm')}</Info>
                    </NavLink>
                    <NavLink
                        className={style.link}
                        to={RouteConfig.hedge}
                        isActive={(match) => Boolean(match)}
                    >
                        <img src={HedgeImg} alt="" />
                        <Info color="#fff">{t('nav.hedge')}</Info>
                    </NavLink>
                </div>
            </div>
            <div className={style.bottom}>
                <div className={style.balance}>
                    <img src={TokenLogo} alt="" />
                    <div className={style.info}>
                        <div>
                            <Info fontSize={12}>Beaver Price</Info>
                        </div>
                        <div>
                            <Info color="#A1ADBF">
                                $ <Value value={0.5} />
                            </Info>
                        </div>
                    </div>
                </div>
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
            </div>
        </div>
    );
}
