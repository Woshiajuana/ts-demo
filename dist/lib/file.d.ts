export declare const fileToBase64: (file: Blob) => Promise<string | null | ArrayBuffer>;
export declare const base64ToFile: (encodedString: string, contentType?: string | undefined) => Blob;
