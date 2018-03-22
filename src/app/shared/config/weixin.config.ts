export class WeixinConfig {
    static readonly directState = "-1";
    static readonly appId = "wx366274c96302b860";
    static readonly callbackUrl = "www.tutufree.com";


    /**
     * 通过State切换登录模式，比如扫码登录
     * @param state
     * @returns {string}
     */
    static getUrlByState(state: string): string {
        return "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
            WeixinConfig.appId +
            "&redirect_uri=https%3a%2f%2f" +
            WeixinConfig.callbackUrl +
            "&response_type=code&scope=snsapi_userinfo&state=" +
            state +
            "&connect_redirect=1#wechat_redirect";
    }

    /**
     * 微信直接登录Url
     * @returns {string}
     */
    static getDirectUrl(): string {
    return WeixinConfig.getUrlByState(WeixinConfig.directState);
    }
}