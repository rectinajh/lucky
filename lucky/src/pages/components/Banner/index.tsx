import React from 'react';
import Row from '@/components/Row';
import { Info, SecondTitle } from '@/components/Text';
import style from './index.module.scss';
import { useTranslation } from 'react-i18next';
import Value from '@/components/Value';

interface Props {
    title?: string;
    amount?: number;
}

export default function Banner({ title, amount = 40000000 }: Props) {
    const { t } = useTranslation();
    return (
        <div className={style.wrapper}>
            <div className={style.top} />
            <Row lineHeight="none">
                <Info>{title || t('assetsLPTotalStakedAmount')}</Info>
            </Row>
            <Row customClass={style.amountWrapper} lineHeight="none">
                {/* <img src="/logo.svg" alt="" /> */}
                <SecondTitle>
                    $ <Value value={amount} />
                </SecondTitle>
            </Row>
        </div>
    );
}
