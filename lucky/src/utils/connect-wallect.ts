import ConnectWallet from '@/utils/components/connect-wallet';

export default function ConnectWalletPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
        ConnectWallet({
            onClickWallet: (name: string) => {
                resolve(name);
            },
            onClose: () => {
                reject('user cancel');
            },
        });
    });
}
