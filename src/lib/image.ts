
interface ICQOptions {
    width?: number,
    height?: number,
    quality?: number
}
interface ICQResult {
    base64: string,
    width: number,
    height: number,
    quality: number,
}

// 压缩图片
export const imageCompressQuality = function (path: string, options?: ICQOptions) : Promise<ICQResult> {
    return new Promise((resolve, reject) => {
        let { width, height, quality } = Object.assign({ width: 1024, quality: 0.6 }, options);
        const img = new Image();
        img.src = path;
        img.onerror = reject;
        img.onload = function () {
            const { width: w, height: h } = img;
            const scale = w / h;
            width = width > w ? w : width;
            height = height || (width / scale);
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2D') as any;
            canvas.width = width;
            canvas.height = height;
            ctx.fillStyle = '#FFF';
            ctx.fillRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);
            const base64 = canvas.toDataURL('image/jpeg', quality);
            resolve({ base64, height, width, quality });
        };
    });
};
