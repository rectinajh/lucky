import React from 'react';
import NavSide from '@/components/NavSide';
import style from './index.module.scss';
import MainViewHeader from '@/components/MainViewHeader';
interface Props {
    children: React.ReactNode;
}

export default function LayoutWithNavSlider({ children }: Props) {
    return (
        <div className={style.wrapper}>
            <NavSide />
            <div className={style.mainView}>
                <div className={style.content}>
                    <div className={style.header}>
                        <MainViewHeader />
                    </div>
                    <div className={style.child}>{children}</div>
                </div>
            </div>
        </div>
    );
}
