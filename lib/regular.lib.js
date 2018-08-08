export default {
    // 手机号
    isPhone: value => /^1\d{10}$/.test(value),
    // 身份证
    isIDCard: value => /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(value),
    // 银行卡
    isBankCard: value => /^(\d{16}|\d{18}|\d{19})$/.test(value),
    // 邮箱
    isEmail: value => /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value),
    // 金额
    isMoney: value => /^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$/.test(value)
};
