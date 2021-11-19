import supportedChains from './chains';
import { IChainData } from './types';
import BigNumber from 'bignumber.js';

export function getSupportChainData(chainId: number) {
    return supportedChains.filter(
        (chain: any) => chain.chain_id === chainId,
    )[0];
}

export function getChainData(chainId: number): IChainData | undefined {
    let chainData = getSupportChainData(chainId);

    const API_KEY = process.env.REACT_APP_INFURA_ID;

    if (
        chainData &&
        chainData.rpc_url.includes('infura.io') &&
        chainData.rpc_url.includes('%API_KEY%') &&
        API_KEY
    ) {
        const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY);

        return {
            ...chainData,
            rpc_url: rpcUrl,
        };
    }

    return chainData;
}

export function sanitizeHex(hex: string): string {
    hex = hex.substring(0, 2) === '0x' ? hex.substring(2) : hex;
    if (hex === '') {
        return '';
    }
    hex = hex.length % 2 !== 0 ? '0' + hex : hex;
    return '0x' + hex;
}

export function formatTransaction(from: string, to: string, value: number) {
    // const value = sanitizeHex(convertStringToHex(_value));

    const tx = {
        from,
        to,
        value,
    };

    return tx;
}

export function zeroPadTime(num: number) {
    if (num < 10) {
        return `0${num}`;
    }
    return num;
}

export function formatHashValue(address?: string) {
    if (!address) {
        return;
    }
    const arr = address.split('0x');
    const prev4 = arr[1].substring(0, 4);
    const last4 = arr[1].substring(arr[1].length - 4, arr[1].length);
    return `0x${prev4}...${last4}`;
}

export function fixNumberTo2(number: number) {
    let arr = number.toString().split('.');
    let len = 0;
    if (arr[1]) {
        len = Number(arr[1]) === 0 ? 0 : arr[1].length;
    }
    if (len === 0) {
        return number.toFixed(0);
    }
    return number.toFixed(2);
}

export const getBalanceNumber = (balance: BigNumber, decimals = 18) => {
    const displayBalance = balance.dividedBy(new BigNumber(10).pow(decimals));
    return displayBalance.toNumber();
};

export const getDisplayBalance = (balance: BigNumber, decimals = 18) => {
    const displayBalance = balance.dividedBy(new BigNumber(10).pow(decimals));
    if (displayBalance.lt(1)) {
        return displayBalance.toPrecision(4);
    } else {
        return displayBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
};

export const getFullDisplayBalance = (
    balance: BigNumber,
    decimals = 18,
    fixed = 8,
) => {
    return balance.dividedBy(new BigNumber(10).pow(decimals)).toFixed(fixed);
};

export function shuffleArray(array: any[]) {
    // Fisher-Yates Algorithm
    const result = [...array];
    for (let index = 0; index < result.length; index++) {
        const j = Math.floor(Math.random() * index);
        const temp = result[index];
        result[index] = result[j];
        result[j] = temp;
    }
    return result;
}
export const calculateCountDown = (targetTimestamp: number) => {
    const sec = 1000;
    const min = 60 * sec;
    const hour = 60 * min;
    const timestampNow = new Date().getTime();

    const subTimestamp = targetTimestamp - timestampNow;

    if (subTimestamp <= 0) {
        return {
            h: 0,
            m: 0,
            s: 0,
            left: 0,
            format: '00:00:00',
        };
    }

    const h = Math.floor(subTimestamp / hour);
    const m = Math.floor((subTimestamp % hour) / min);
    const s = Math.floor((subTimestamp % min) / sec);

    function formatNum(num: number) {
        return num < 10 ? `0${num}` : '' + num;
    }

    return {
        h,
        m,
        s,
        left: subTimestamp,
        format: `${formatNum(h)}:${formatNum(m)}:${formatNum(s)}`,
    };
};

export const formatDate = (date: Date, fmt: string) => {
    interface FmtMap {
        [propName: string]: number;
    }

    const o: FmtMap = {
        'M+': date.getMonth() + 1, //月份
        'D+': date.getDate(), //日
        'H+': date.getHours(), //小时
        'm+': date.getMinutes(), //分
        's+': date.getSeconds(), //秒
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds(), //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + '').substr(4 - RegExp.$1.length),
        );
    for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1
                    ? o[k] + ''
                    : ('00' + o[k]).substr(('' + o[k]).length),
            );
        }
    }
    return fmt;
};

export function randomNum(minNum: number, maxNum: number) {
    switch (arguments.length) {
        case 1:
            return parseInt(`${Math.random() * minNum + 1}`, 10);
        case 2:
            return parseInt(
                `${Math.random() * (maxNum - minNum + 1) + minNum}`,
                10,
            );
        default:
            return 0;
    }
}
