import React from 'react';
import Row from '@/components/Row';
import { Info, Small } from '@/components/Text';
import cx from 'classnames';
import style from './index.module.scss';
import Button from '@/components/Button';
import { Token } from '@/constants';
import TipIcon from '@/components/TipsIcon';
import { useTranslation } from 'react-i18next';
import Value from '@/components/Value';
import Asset from './Asset';

interface Props {
    token1: Token;
    token2: Token;
    apy1: number;
    total1: number;
    tvl1: number;
    left1: number;
    apy2: number;
    total2: number;
    tvl2: number;
    left2: number;

    harvestTokenName: string;
}

export default function Pool({
    token1,
    token2,
    apy1,
    total1,
    tvl1,
    apy2,
    total2,
    tvl2,
    left1,
    left2,
    harvestTokenName,
}: Props) {
    const { t } = useTranslation();
    return (
        <div className={style.pool}>
            <Row lineHeight="none">
                {token1.name}-{token2.name}
            </Row>
            <div className={style.assets}>
                <Asset
                    token={token1}
                    apy={apy1}
                    total={total1}
                    tvl={tvl1}
                    remaining={left1}
                    harvestTokenName={harvestTokenName}
                />
                <Asset
                    token={token2}
                    apy={apy2}
                    total={total2}
                    tvl={tvl2}
                    remaining={left2}
                    harvestTokenName={harvestTokenName}
                />
            </div>
        </div>
    );
}
