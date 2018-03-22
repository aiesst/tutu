import { isNullOrUndefined } from "util";
export var BrowserUtil = (function () {
    function BrowserUtil() {
    }
    BrowserUtil.isWexin = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        var ms = ua.match(/MicroMessenger/i);
        if (!isNullOrUndefined(ms) && ms.toString() == 'micromessenger') {
            return true;
        }
        else {
            return false;
        }
    };
    return BrowserUtil;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/core/util/browser.util.js.map