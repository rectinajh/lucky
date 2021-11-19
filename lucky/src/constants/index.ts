import tokenImages from './token-images';
export enum ChainId {
    BSCTestnet = 97,
    BSCMainnet = 56,
}

export const supportChainIds = [ChainId.BSCMainnet, ChainId.BSCTestnet];

export const LINKS = {
    twitter: 'https://twitter.com/Beaver_Finance',
    medium: 'https://medium.com/@Beaver_Finance',
    gitbook: 'https://beaverfinance.gitbook.io/beaverfinance/',
    telegram: 'https://t.me/beaver_finance',
};

export const Tokens = {
    [ChainId.BSCTestnet]: {
        eth: {
            name: 'ETH',
            img: tokenImages.eth,
            address: '',
            decimals: 18,
        },
        usdt: {
            name: 'USDT',
            img: tokenImages.usdt,

            address: '',
            decimals: 18,
        },
        busd: {
            name: 'BUSD',
            img: tokenImages.usdt,

            address: '',
            decimals: 18,
        },
        btc: {
            name: 'BTC',
            img: tokenImages.btc,

            address: '',
            decimals: 18,
        },
        cake: {
            name: 'CAKE',
            img: tokenImages.cake,

            address: '',
            decimals: 18,
        },
        bnb: {
            name: 'BNB',
            img: tokenImages.bnb,

            address: '',
            decimals: 18,
        },
    },
    [ChainId.BSCMainnet]: {
        eth: {
            name: 'ETH',
            img: tokenImages.eth,
            address: '',
            decimals: 18,
        },
        usdt: {
            name: 'USDT',
            img: tokenImages.usdt,

            address: '',
            decimals: 18,
        },
        busd: {
            name: 'BUSD',
            img: tokenImages.usdt,

            address: '',
            decimals: 18,
        },
        btc: {
            name: 'BTC',
            img: tokenImages.btc,

            address: '',
            decimals: 18,
        },
        cake: {
            name: 'CAKE',
            img: tokenImages.cake,

            address: '',
            decimals: 18,
        },
        bnb: {
            name: 'BNB',
            img: tokenImages.bnb,

            address: '',
            decimals: 18,
        },
    },
};

export type Token = typeof Tokens[ChainId.BSCMainnet]['eth'];
