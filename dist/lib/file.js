// 文件转 base64
export const fileToBase64 = function (file) {
    return new Promise((resolve, reject) => {
        const fileRender = new FileReader();
        fileRender.readAsDataURL(file);
        fileRender.onload = function (e) {
            resolve(fileRender.result);
        };
        fileRender.onerror = reject;
    });
};
// bas464转成文件
export const base64ToFile = function (encodedString, contentType) {
    const binaryString = window.atob(encodedString);
    const arrayBuffer = new ArrayBuffer(binaryString.length);
    const intArray = new Uint8Array(arrayBuffer);
    for (let i = 0, j = binaryString.length; i < j; i++) {
        intArray[i] = binaryString.charCodeAt(i);
    }
    let data = [intArray], blob;
    try {
        blob = new Blob(data);
    }
    catch (e) {
        const BlobBuilder = window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder;
        if (e.name === 'TypeError' && window.BlobBuilder) {
            const builder = new BlobBuilder();
            builder.append(arrayBuffer);
            blob = builder.getBlob(contentType);
        }
        else {
            throw new Error('版本过低，不支持图片压缩上传');
        }
    }
    return blob;
};
