const version = (() => {
    const ua = navigator.userAgent;
    return {
        // IE kernel
        trident: ua.indexOf('Trident') > -1,
        // Opera kernel
        presto: ua.indexOf('Presto') > -1,
        // Apple and Chrome kernel
        webKit: ua.indexOf('AppleWebKit') > -1,
        // safari browser
        safari: ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1,
        // Firefox kernel
        gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
        // chrome
        chrome:
            /Chrome/.test(navigator.userAgent) &&
            /Google Inc/.test(navigator.vendor),
        // is mobile
        isMobile: !!ua.match(/AppleWebKit.*Mobile.*/),
        // https://stackoverflow.com/a/58065241
        ios:
            (/iPad|iPhone|iPod/.test(navigator.platform) ||
                (navigator.platform === 'MacIntel' &&
                    navigator.maxTouchPoints > 1)) &&
            !window.MSStream,
        // is Android
        android: ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1,
        // is iPhone or QQ HD browser
        iPhone: ua.indexOf('iPhone') > -1,
        // is iPad
        iPad: ua.indexOf('iPad') > -1,
        // is Wechat
        wechat: ua.indexOf('MicroMessenger') > -1,
        // is firefox
        firefox: ua.toLowerCase().indexOf('firefox') > -1,
    };
})();

module.exports = version;
