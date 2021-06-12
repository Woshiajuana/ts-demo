
declare var wx: any;

export const withPromise = (fn: string) => {
    return function (options: {}): Promise<any> {
        return new Promise((resolve, reject) => {
            wx[fn]({
                ...options,
                success: resolve,
                cancel: () => reject(new Error('cancel')),
                error: reject,
            });
        });
    };
};
