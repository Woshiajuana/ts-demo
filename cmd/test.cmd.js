
import path from 'path'
import {
    log
} from 'wow-cmd'

const Handle = (options, data) => new Promise((resolve, reject) => {
    let {
        params,
        parameters,
    } = options;
    params = params ? params.toLocaleLowerCase() : '';
    if (!params)
        return reject('未指定执行 test文件');
    parameters.slice(1).forEach((item, index) => {
        try {
            let dir = path.join(__dirname, `../test/${item}.test.js`);
            require(dir);
        } catch (e) {
            reject(e);
        }
    });
    return resolve();
});

// 参数 options
Handle.options = {
    cmd: ['-t', '--test'],
};

// 成功
Handle.success = (res, next) => {
    next(res);
};

// 失败
Handle.error = (err, next) => {
    log(err, '004');
    next();
};

export default Handle;
