import React from 'react';
import Row from '@/components/Row';
import { Info, Small } from '@/components/Text';
import style from './index.module.scss';
import Button from '@/components/Button';
import TipIcon from '@/components/TipsIcon';
import { useTranslation } from 'react-i18next';
import Value from '@/components/Value';
import { Token } from '@/constants';
import cx from 'classnames';

interface Props {
    token: Token;
    harvestTokenName: string;
    apy: number;
    tvl: number;
    total: number;
    remaining: number;
}

export default function Assets({
    token,
    harvestTokenName,
    apy,
    tvl,
    total,
    remaining,
}: Props) {
    const { t } = useTranslation();
    return (
        <div className={style.item}>
            <div className={style.title}>
                <div className={style.left}>
                    <img src={token.img} alt="" className={style.img} />
                    <div className={style.name}>
                        <Info color="#fff">{token.name}</Info>
                    </div>
                </div>
                <div className={style.right}>
                    <Small color="#4d6184">
                        {t('earn')} {harvestTokenName}
                    </Small>
                    <div className={style.harvestIcon} />
                </div>
            </div>
            <div className={style.poolInfo}>
                <div className={style.apy}>
                    <Row lineHeight="none">
                        <Small color="#66757F">{t('apy')}</Small>
                        <TipIcon
                            style={{ marginLeft: '4px' }}
                            tips={t('apy')}
                        />
                    </Row>
                    <Row>
                        <Info color="#14B67B">{apy}%</Info>
                        <div className={style.profileUpIcon} />
                    </Row>
                </div>
                <div className={style.poolTvl}>
                    <Row lineHeight="none">
                        <Small color="#66757F">{t('poolTotalStaked')}</Small>
                    </Row>
                    <Row>
                        <Info color="#fff">
                            ≈ $<Value value={total} />
                        </Info>
                    </Row>
                </div>
                <div className={style.yourTvl}>
                    <Row lineHeight="none">
                        <Small color="#66757F">{t('yourStaked')}</Small>
                        <TipIcon
                            style={{ marginLeft: '4px' }}
                            tips={t('yourStaked')}
                        />
                    </Row>
                    <Row>
                        <Info color="#fff">
                            {tvl} {token.name}
                        </Info>
                    </Row>
                </div>
            </div>
            <div className={style.tvlLeft}>
                <Row>
                    <Small color="#66757F">
                        {t('leftStakedAmount')} [
                        <Small color="#5985D3">
                            {' '}
                            {remaining} {token.name}{' '}
                        </Small>
                        ]
                    </Small>
                </Row>
                <div className={style.progress}>
                    <div className={style.value} style={{ width: '60%' }} />
                </div>
            </div>
            <div className={style.buttons}>
                <Button className={style.button} type="transparent">
                    {t('withdrawAll')}
                </Button>
                <Button className={cx(style.button, style.deposit)}>
                    {t('deposit')} {token.name}
                    <div className={style.icon} />
                </Button>
                {/* <Button className={style.button}>
                            {t('deposit')} BFT
                        </Button>
                        <Button className={style.button}>
                            {t('deposit')} BDOG
                        </Button> */}
            </div>
        </div>
    );
}
