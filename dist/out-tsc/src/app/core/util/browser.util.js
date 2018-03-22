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
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/core/util/browser.util.js.map