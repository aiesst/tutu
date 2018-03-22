import {isNullOrUndefined} from "util";
import {WeixinConfig} from "../../shared/config/weixin.config";
export class WeixinLogin {

    code: string;
    state: string;

    constructor(code: string, state: string) {
        this.code = code;
        this.state = state;
    }

    isEnable() {
        return !isNullOrUndefined(this.code) && !isNullOrUndefined(this.state);
    }

    /**
     * 微信浏览器直接登录
     * @returns {boolean}
     */
    isLoginByDirect(): boolean {
        return this.isEnable() && this.state == WeixinConfig.directState;
    }

    /**
     * 扫码登录
     * @returns {boolean}
     */
    isLoginByQrcode(): boolean {
        return this.isEnable() && this.state != WeixinConfig.directState;
    }




}
