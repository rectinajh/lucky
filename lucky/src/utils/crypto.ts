import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

export function encodeStr(str: string): string {
    const hashDigest = sha256(str);

    const encodeStr = Base64.stringify(hashDigest);
    return encodeStr;
}

export function genNonceStr(num: number = 6): string {
    const strList =
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let nonce = '';

    for (let i = 0; i < num; i++) {
        let index = Math.floor(Math.random() * strList.length);

        nonce += strList[index];
    }

    return nonce;
}

export function genSignature(nonce: string, timestamp: number): string {
    const key = process.env.REACT_APP_API_KEY;
    const secret = process.env.REACT_APP_API_SECRET;
    const message = `key=${key}&secret=${secret}&timestamp=${timestamp}`;
    return encodeStr(nonce + message);
}
