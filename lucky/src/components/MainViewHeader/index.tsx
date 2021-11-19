import React, { useState } from 'react';
// import { Title, SecondTitle } from '@/components/Text';
import ConnectWalletButton from '@/pages/components/ConnectWalletButton';
// import cx from 'classnames';
import style from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/state/hooks';
import { formatHashValue } from '@/common-helpers/utils';
import Header from '@/components/Header';
import Button from '../Button';
import SelectLanguage from '@/components/SelectLng';
import AccountDetail from '@/components/AccountDetail';
// import FinanceLogo from '@/assets/images/second-logo.png';

export default function MainViewHeader() {
    const { i18n } = useTranslation();
    const { address, connected } = useAppSelector((state) => state.user);
    const [isOpenAccountDetail, setIsOpenAccountDetail] = useState(false);
    const isEn = i18n.language === 'en';

    function handleSelectLanguage(language: string) {
        i18n.changeLanguage(language);
    }
    return (
        <>
            <div className={style.wrapper}>
                {/* <div className={style.left}>
                    <SecondTitle>Beaver.fi</SecondTitle>
                    <div className={style.title}>
                        <Title>Beaver Finance</Title>
                        <img src={FinanceLogo} alt="" />
                    </div>
                </div> */}
                <div className={style.right}>
                    <SelectLanguage customClass={style.language} />
                    {/* <div className={style.language}>
                        <div
                            className={cx(style.item, !isEn && style.active)}
                            onClick={() => {
                                handleSelectLanguage('zh_cn');
                            }}
                        >
                            中文
                        </div>
                        <div
                            className={cx(style.item, isEn && style.active)}
                            onClick={() => {
                                handleSelectLanguage('en');
                            }}
                        >
                            EN
                        </div>
                    </div> */}
                    <ConnectWalletButton />
                    {connected && address && (
                        <Button
                            type="transparent"
                            onClick={() => {
                                setIsOpenAccountDetail(true);
                            }}
                        >
                            {formatHashValue(address)}
                        </Button>
                    )}
                </div>
            </div>
            <Header className={style.mobileHeader} />
            <AccountDetail
                isOpen={isOpenAccountDetail}
                onClose={() => {
                    setIsOpenAccountDetail(false);
                }}
            />
        </>
    );
}
