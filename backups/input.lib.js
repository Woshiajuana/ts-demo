
import Dialogs                  from 'plugins/dialogs.plugin'

export default {

    assignmentData (source_params, result_params) {
        this.forEach(result_params, (item, key) => {
            source_params[key] && (item.value = source_params[key]);
        })
    },

    checkData (source_params, options = {mode: true}) {
        let type = null;
        try {
            this.forEach(source_params, (param, key) => {
                let { use_check, value } = param;
                if (!use_check) return null;
                use_check.forEach((item) => {
                    let {nonempty, rule, gt, lt, type, prompt} = item;
                    if (nonempty && !value) {
                        param.is_error = true;
                        throw prompt;
                    }
                    if (typeof rule === 'function' && !rule(value)) {
                        param.is_error = true;
                        throw prompt;
                    }
                    if (typeof rule === 'object' && !rule.text(value)) {
                        param.is_error = true;
                        throw prompt;
                    }
                    if (gt && type === 'date' && value) {
                        let num1 = new Date(value).getTime();
                        let num2 = new Date(source_params[gt].value).getTime();
                        if (num1 && num2 && num1 < num2) {
                            source_params[gt].is_error = true;
                            throw prompt;
                        }
                    }
                    if (lt && type === 'date' && value) {
                        let num1 = new Date(value).getTime();
                        let num2 = new Date(source_params[lt].value).getTime();
                        if (num1 && num2 && num1 > num2) {
                            source_params[gt].is_error = true;
                            throw prompt;
                        }
                    }
                    if (gt && value && value < +source_params[gt].value) {
                        param.is_error = true;
                        throw prompt;
                    }
                    if (lt && value && value > +source_params[lt].value) {
                        param.is_error = true;
                        throw prompt;
                    }
                })
            });
        } catch (error) {
            options.mode && Dialogs.toast({message: error});
            type = true;
        }
        return type;
    },

    filterData (source_params, expect_params) {
        let result = {};
        !expect_params && (expect_params = source_params);
        this.forEach(expect_params, (item, key) => {
            result[key] = source_params[key].value;
        });
        return result;
    },

    forEach (obj, callback) {
        for(let key in obj){
            callback && callback(obj[key], key);
        }
    }
}
