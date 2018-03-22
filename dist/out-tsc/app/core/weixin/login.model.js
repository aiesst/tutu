import { isNullOrUndefined } from "util";
import { WeixinConfig } from "../../shared/config/weixin.config";
export var WeixinLogin = (function () {
    function WeixinLogin(code, state) {
        this.code = code;
        this.state = state;
    }
    WeixinLogin.prototype.isEnable = function () {
        return !isNullOrUndefined(this.code) && !isNullOrUndefined(this.state);
    };
    /**
     * 微信浏览器直接登录
     * @returns {boolean}
     */
    WeixinLogin.prototype.isLoginByDirect = function () {
        return this.isEnable() && this.state == WeixinConfig.directState;
    };
    /**
     * 扫码登录
     * @returns {boolean}
     */
    WeixinLogin.prototype.isLoginByQrcode = function () {
        return this.isEnable() && this.state != WeixinConfig.directState;
    };
    return WeixinLogin;
}());
//# sourceMappingURL=E:/项目/个人项目/途徒总工程/tutu-web-front/web_front/web_front/web_front/src/app/core/weixin/login.model.js.map