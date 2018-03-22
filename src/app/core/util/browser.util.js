"use strict";
var util_1 = require("util");
var BrowserUtil = (function () {
    function BrowserUtil() {
    }
    BrowserUtil.isWexin = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        var ms = ua.match(/MicroMessenger/i);
        if (!util_1.isNullOrUndefined(ms) && ms.toString() == 'micromessenger') {
            return true;
        }
        else {
            return false;
        }
    };
    return BrowserUtil;
}());
exports.BrowserUtil = BrowserUtil;
