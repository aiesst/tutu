/**
 * 用于对base64的相应处理的组件
 *
 * Created by zhz on 2017/1/11.
 */
export var Base64Util = (function () {
    function Base64Util() {
    }
    /**
     * 对字符串进行base64编码，该代码从js代码转换过来
     * @param str 待编码的字符串
     */
    Base64Util.base64Encode = function (str) {
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += Base64Util.BASE64_ENCODE_CHARS.charAt(c1 >> 2);
                out += Base64Util.BASE64_ENCODE_CHARS.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += Base64Util.BASE64_ENCODE_CHARS.charAt(c1 >> 2);
                out += Base64Util.BASE64_ENCODE_CHARS.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += Base64Util.BASE64_ENCODE_CHARS.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += Base64Util.BASE64_ENCODE_CHARS.charAt(c1 >> 2);
            out += Base64Util.BASE64_ENCODE_CHARS.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += Base64Util.BASE64_ENCODE_CHARS.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += Base64Util.BASE64_ENCODE_CHARS.charAt(c3 & 0x3F);
        }
        return out;
    };
    /**
     * base64解码
     * @param str 待解码的字符串
     */
    Base64Util.base64decode = function (str) {
        var c1, c2, c3, c4;
        var i, len, out;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            /* c1 */
            do {
                c1 = Base64Util.BASE64_DECODE_CHARS[str.charCodeAt(i++) & 0xff];
            } while (i < len && c1 == -1);
            if (c1 == -1)
                break;
            /* c2 */
            do {
                c2 = Base64Util.BASE64_DECODE_CHARS[str.charCodeAt(i++) & 0xff];
            } while (i < len && c2 == -1);
            if (c2 == -1)
                break;
            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
            /* c3 */
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61)
                    return out;
                c3 = Base64Util.BASE64_DECODE_CHARS[c3];
            } while (i < len && c3 == -1);
            if (c3 == -1)
                break;
            out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
            /* c4 */
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61)
                    return out;
                c4 = Base64Util.BASE64_DECODE_CHARS[c4];
            } while (i < len && c4 == -1);
            if (c4 == -1)
                break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    };
    /// 编码解码需要的字符
    Base64Util.BASE64_ENCODE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    Base64Util.BASE64_DECODE_CHARS = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
        -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
        45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
    return Base64Util;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/core/util/base64.util.js.map