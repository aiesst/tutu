"use strict";
var util_1 = require("util");
var weixin_config_1 = require("../../shared/config/weixin.config");
var WeixinLogin = (function () {
    function WeixinLogin(code, state) {
        this.code = code;
        this.state = state;
    }
    WeixinLogin.prototype.isEnable = function () {
        return !util_1.isNullOrUndefined(this.code) && !util_1.isNullOrUndefined(this.state);
    };
    /**
     * 微信浏览器直接登录
     * @returns {boolean}
     */
    WeixinLogin.prototype.isLoginByDirect = function () {
        return this.isEnable() && this.state == weixin_config_1.WeixinConfig.directState;
    };
    /**
     * 扫码登录
     * @returns {boolean}
     */
    WeixinLogin.prototype.isLoginByQrcode = function () {
        return this.isEnable() && this.state != weixin_config_1.WeixinConfig.directState;
    };
    return WeixinLogin;
}());
exports.WeixinLogin = WeixinLogin;
