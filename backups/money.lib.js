export const formateMoney = (s) => {
    let money = parseFloat(s);
    if (money) {
        s = (money / 100).toFixed(2) + "";
        let l = s.split(".")[0].split("").reverse();
        let r = s.split(".")[1];
        let t = "";
        l.forEach((ll, key) => {
            t += l[key] + ((key + 1) % 3 === 0 && (key + 1) !== l.length ? "," : "");
        });
        return t.split("").reverse().join("") + "." + r;
    } else if (s === 0) {
        return "0.00"
    } else {
        return '---';
    }
};
