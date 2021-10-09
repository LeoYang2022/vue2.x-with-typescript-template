// 字符串转大写
function strToUpper(value: string): string {
    if (!value) {
        return "";
    }
    return value.toLocaleUpperCase();
}

export default {
    strToUpper,
};
