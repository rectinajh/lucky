function openWindowFeatures(newWinWidth = 600, newWinHeight = 500) {
    const winWidth = window.screen.width;
    const winHeight = window.screen.height;
    const left = (winWidth - newWinWidth) / 2;
    const top = (winHeight - newWinHeight) / 2;
    return `width=${newWinWidth},height=${newWinHeight},left=${left},top=${top}`;
}

export default function SocialMediaShare(
    platform: string,
    shareUrl: string = '',
    preFillText: string = '',
    callback?: () => void,
) {
    if (!shareUrl) return;
    let generateUrl = '';
    let shareWindowTitle = '';
    let text = '';

    switch (platform) {
        case 'facebook':
            generateUrl = `https://www.facebook.com/share.php?u=${encodeURIComponent(
                shareUrl || window.location.href,
            )}`;
            shareWindowTitle = 'Share to Facebook';
            break;
        case 'twitter':
            text = preFillText
                ? `&text=${encodeURIComponent(preFillText)}`
                : '';
            generateUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                shareUrl || window.location.href,
            )}${text}`;
            shareWindowTitle = 'Share to Twitter';
            break;
        case 'linkedin':
            generateUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                shareUrl || window.location.href,
            )}`;
            shareWindowTitle = 'Share to LinkedIn';
            break;
        case 'telegram':
            text = preFillText
                ? `&text=${encodeURIComponent(preFillText)}`
                : '';
            generateUrl = `https://t.me/share/url?url=${encodeURIComponent(
                shareUrl || window.location.href,
            )}${text}`;
            shareWindowTitle = 'Share to Telegram';
            break;

        default:
            return;
    }
    if (callback) {
        callback();
    }
    window.open(generateUrl, shareWindowTitle, openWindowFeatures(626, 426));
}

export const SALE_INFO = {
    price: 16.1,
    opeanSeaFee: 0.4025,
    totalEarn: 15.6975,
    artEarn: 4.70925,
    nftTribeEarn: 10.98825,
};
