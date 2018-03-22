/**
 * 用于生成相应的UUID
 * Created by zhz on 2017/1/11.
 */
export var UUIDUtil = (function () {
    function UUIDUtil() {
    }
    UUIDUtil.generateUuid = function () {
        var uuid = [36];
        var rnd = 0;
        var r;
        for (var i = 0; i < 36; i++) {
            if (i == 8 || i == 13 || i == 18 || i == 23) {
                uuid[i] = '-';
            }
            else if (i == 14) {
                uuid[i] = '4';
            }
            else {
                if (rnd <= 0x02)
                    rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
                r = rnd & 0xf;
                rnd = rnd >> 4;
                uuid[i] = UUIDUtil.DEFAULT_CHARS[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
        return uuid.join('');
    };
    // 默认拼接字符串
    UUIDUtil.DEFAULT_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return UUIDUtil;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/core/util/uuid.util.js.map