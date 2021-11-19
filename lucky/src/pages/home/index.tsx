import React, { useState } from 'react';
import style from './index.module.scss';
import Row from '@/components/Row';
import Button from '@/components/Button';
import { useTranslation } from 'react-i18next';
// import Modal from '@/utils/components/modal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useHistory } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import cx from 'classnames';
import RouteConfig from '@/constants/route';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DemoFarmImg from '@/assets/images/home/demo-farm.png';
import DemoHedgeImg from '@/assets/images/home/demo-hedge.png';
export default function Home() {
    const { t } = useTranslation();
    const history = useHistory();
    const [poolType, setPoolType] = useState(0);
    function comingSoon() {
        history.push(RouteConfig.farm);
    }

    const handlePoolTypeChange = (event: any, newValue: number) => {
        setPoolType(newValue);
    };

    // const sliderSetting: Settings = useMemo(() => {
    //     return {
    //         dots: false,
    //         infinite: true,
    //         speed: 500,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         vertical: true,
    //         verticalSwiping: true,
    //         arrows: false,
    //         pauseOnHover: true,
    //         // autoplay: true,
    //         // autoplaySpeed: 10000,
    //         // draggable: false,
    //     };
    // }, []);

    // function scroll(e: any) {
    //     if (slider === null || !slider.current) return 0;

    //     if (debounceRef.current) return;
    //     console.log(debounceRef.current);
    //     e.wheelDelta < 0
    //         ? slider.current.slickNext()
    //         : slider.current.slickPrev();

    //     debounceRef.current = setTimeout(() => {
    //         debounceRef.current = null;
    //     }, 1500);
    // }

    // function handleSlickNext() {
    //     if (slider.current) {
    //         slider.current.slickNext();
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('wheel', scroll, true);

    //     return () => {
    //         window.removeEventListener('wheel', scroll, true);
    //     };
    // }, []);

    return (
        <div className="container">
            <Header />

            <div className="mainView">
                <div className={style.wrapper}>
                    <div className={cx(style.page, style.mainWrapper)}>
                        <div className={style.main}>
                            <div className={style.left}>
                                <div
                                    className={style.title}
                                    dangerouslySetInnerHTML={{
                                        __html: t('home.title'),
                                    }}
                                ></div>
                                <Button
                                    className={style.enter}
                                    onClick={comingSoon}
                                    size="large"
                                >
                                    {t('home.enterApp')}
                                </Button>
                            </div>
                            <div className={style.right} />
                        </div>
                    </div>
                    <div className={cx(style.page, style.trustBy)}>
                        <Row
                            align="center"
                            customClass={cx(style.desc, style.normal)}
                        >
                            Supported by  Asteria Finance Lab
                        </Row>
                        <div className={cx(style.img)}></div>
                    </div>
                    <div className={cx(style.page, style.whatIsBeaverWrapper)}>
                        <div className={style.whatIsBeaver}>
                            <div className={cx(style.question)}>
                                <span className={cx(style.text, style.title)}>
                                    {t('home.whatIsBeaver')}
                                </span>
                            </div>
                            <Row
                                customClass={cx(style.desc, style.normal)}
                                align="center"
                            >
                                {t('home.whatIsBeaverDesc')}
                            </Row>
                            <img
                                src="/logo.svg"
                                className={style.logo}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={cx(style.page, style.advantageWrapper)}>
                        <div className={style.advantage}>
                            <Row customClass={cx(style.title, style.adTitle)}>
                                {t('home.productAdvantage')}
                            </Row>
                            <div className={style.ads}>
                                <div className={style.item}>
                                    <div className={style.bg} />
                                    <div className={style.img} />
                                    {/* <div className={style.step}>Step1</div> */}
                                    <Row customClass={style.thirdTitle}>
                                        {t('home.adTitle1')}
                                    </Row>
                                    <Row customClass={style.normal}>
                                        {t('home.adDesc1')}
                                    </Row>
                                </div>
                                <div className={style.item}>
                                    <div className={style.bg} />

                                    <div className={style.img} />
                                    {/* <div className={style.step}>Step1</div> */}
                                    <Row customClass={style.thirdTitle}>
                                        {t('home.adTitle2')}
                                    </Row>
                                    <Row customClass={style.normal}>
                                        {t('home.adDesc2')}
                                    </Row>
                                </div>
                                <div className={style.item}>
                                    <div className={style.bg} />

                                    <div className={style.img} />
                                    {/* <div className={style.step}>Step1</div> */}
                                    <Row customClass={style.thirdTitle}>
                                        {t('home.adTitle3')}
                                    </Row>
                                    <Row customClass={style.normal}>
                                        {t('home.adDesc3')}
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx(style.page, style.joinWrapper)}>
                        <div className={style.join}>
                            <Row customClass={style.qs}>
                                <span className={cx(style.text, style.title)}>
                                    {t('home.howToJoin')}
                                </span>
                            </Row>
                            <Row
                                // lineHeight="none"
                                customClass={cx(style.normal, style.desc)}
                                align="center"
                            >
                                {t('home.howToJoinDesc')}
                            </Row>
                            <div className={style.tabWrapper}>
                                <Tabs
                                    value={poolType}
                                    onChange={handlePoolTypeChange}
                                    aria-label="Beaver"
                                    centered
                                >
                                    <Tab label={t('home.role1Title')} />
                                    <Tab label={t('home.role2Title')} />
                                </Tabs>
                                <div
                                    className={cx(
                                        style.tabContent,
                                        style.normal,
                                    )}
                                >
                                    {poolType === 0
                                        ? t('home.role1Desc')
                                        : t('home.role2Desc')}
                                </div>
                                <div
                                    className={style.enter}
                                    onClick={() => {
                                        history.push(
                                            poolType === 0
                                                ? RouteConfig.farm
                                                : RouteConfig.home,
                                        );
                                    }}
                                />
                                <img
                                    src={
                                        poolType === 0
                                            ? DemoFarmImg
                                            : DemoHedgeImg
                                    }
                                    alt=""
                                    className={style.demoImg}
                                />
                            </div>
                            <div className={style.roles}>
                                <div className={style.item}>
                                    <div className={style.bg} />

                                    <Row
                                        customClass={style.thirdTitle}
                                        align="center"
                                    >
                                        {t('home.role1Title')}
                                    </Row>
                                    <Row customClass={style.normal}>
                                        {t('home.role1Desc')}
                                    </Row>
                                    <div
                                        className={style.enter}
                                        onClick={() => {
                                            history.push(RouteConfig.farm);
                                        }}
                                    />
                                    <img
                                        src={DemoFarmImg}
                                        alt=""
                                        className={style.demoImg}
                                    />
                                </div>
                                <div className={style.item}>
                                    <div className={style.bg} />

                                    <Row
                                        customClass={style.thirdTitle}
                                        align="center"
                                    >
                                        {t('home.role2Title')}
                                    </Row>

                                    <Row customClass={style.normal}>
                                        {t('home.role2Desc')}
                                    </Row>
                                    <div
                                        className={style.enter}
                                        onClick={() => {
                                            history.push(RouteConfig.farm);
                                        }}
                                    />
                                    <img
                                        src={DemoHedgeImg}
                                        alt=""
                                        className={style.demoImg}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx(style.page, style.startWrapper)}>
                        <div className={style.start}>
                            <div className={style.left} />

                            <div className={style.right}>
                                <div
                                    className={style.title}
                                    dangerouslySetInnerHTML={{
                                        __html: t('home.getStarted'),
                                    }}
                                ></div>
                                <div
                                    className={cx(style.normal, style.desc)}
                                    dangerouslySetInnerHTML={{
                                        __html: t('home.getStartedDesc'),
                                    }}
                                ></div>
                                <Button
                                    className={style.enter}
                                    onClick={comingSoon}
                                    size="large"
                                >
                                    {t('home.getStartedForFree')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className={style.swapNext} onClick={handleSlickNext} /> */}
            </div>
            <Footer />
        </div>
    );
}
