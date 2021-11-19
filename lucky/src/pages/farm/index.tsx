import React, { useState } from 'react';
import Layout from '@/components/LayoutWithNavSide';
import Banner from '@/pages/components/Banner';
import cx from 'classnames';
import style from './index.module.scss';
import Pool from './Pool';
import { Tokens } from '@/constants';
import { useAppSelector } from '@/state/hooks';
import { useTranslation } from 'react-i18next';

export default function Farm() {
    const { t } = useTranslation();
    const [tab, setTab] = useState('pancake');
    const { chainId } = useAppSelector((state) => state.user);
    // if (!chainId) return null;
    return (
        <Layout>
            <div className={style.wrapper}>
                <Banner />
                <div className={style.poolWrapper}>
                    <div className={style.switch}>
                        <div
                            className={cx(
                                style.item,
                                tab === 'pancake' && style.active,
                            )}
                            onClick={() => {
                                setTab('pancake');
                            }}
                        >
                            {t('assetsLP.pancakeSwap')}
                        </div>
                        <div
                            className={cx(
                                style.item,
                                tab === 'mdex' && style.active,
                            )}
                            onClick={() => {
                                setTab('mdex');
                            }}
                        >
                            {t('assetsLP.mdexStrategy')}
                        </div>
                    </div>
                    <Pool
                        token1={Tokens[chainId]['eth']}
                        token2={Tokens[chainId]['busd']}
                        apy1={36}
                        tvl1={12}
                        total1={4679890}
                        left1={80}
                        apy2={16}
                        tvl2={8902}
                        total2={4682360}
                        left2={2909800}
                        harvestTokenName={tab === 'pancake' ? 'CAKE' : 'MDX'}
                    />
                    <Pool
                        token1={Tokens[chainId]['btc']}
                        token2={Tokens[chainId]['busd']}
                        apy1={41}
                        tvl1={3}
                        total1={5890890}
                        left1={43}
                        apy2={18}
                        tvl2={78909}
                        total2={5894560}
                        left2={340981}
                        harvestTokenName={tab === 'pancake' ? 'CAKE' : 'MDX'}
                    />
                    {tab === 'pancake' && (
                        <>
                            <Pool
                                token1={Tokens[chainId]['cake']}
                                token2={Tokens[chainId]['bnb']}
                                apy1={50}
                                tvl1={200}
                                total1={6890921}
                                left1={43}
                                apy2={35}
                                tvl2={2000}
                                total2={6887300}
                                left2={340981}
                                harvestTokenName="CAKE"
                            />
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
}
