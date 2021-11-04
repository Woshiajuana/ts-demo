interface ICQOptions {
    width?: number;
    height?: number;
    quality?: number;
}
interface ICQResult {
    base64: string;
    width: number;
    height: number;
    quality: number;
}
export declare const imageCompressQuality: (path: string, options?: ICQOptions | undefined) => Promise<ICQResult>;
export {};
