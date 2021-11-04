export const withPromise = (fn) => {
    return function (options) {
        return new Promise((resolve, reject) => {
            wx[fn](Object.assign(Object.assign({}, options), { success: resolve, cancel: () => reject(new Error('cancel')), error: reject }));
        });
    };
};
